import theme from "@/lib/theme.json" assert { type: "json" };
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { exec as syncExec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import readingTime from "reading-time";
import prettycode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";
import resolveImageBlurDataURL from "./lib/imageBlurDataURL";
import staticImages, { staticCoverImage } from "./lib/static-images";

const exec = promisify(syncExec);

const writingsDirectory = "content/writings";
const projectsDirectory = "content/projects";

function calculateReadingTime(content: string) {
  const contentWithoutSvg = content.replace(
    /<svg[\s\S]+?(?=<\/svg>)<\/svg>/g,
    ""
  );
  return readingTime(contentWithoutSvg).text;
}

async function lastModificationDate(filePath: string) {
  const { stdout } = await exec(
    `git log -1 --format=%ai -- ${path.join(writingsDirectory, filePath)}`
  );
  if (stdout) {
    return new Date(stdout.trim()).toISOString();
  }
  return new Date().toISOString();
}

type ImageParams = {
  image: string;
  directory: string;
  content: "writings" | "projects" | "lab";
};

const codeSetup = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") {
        return;
      }

      node.__rawString__ = codeEl.children?.[0].value;
    }
  });
};

async function collectImageInformation({
  image,
  directory,
  content,
}: ImageParams) {
  if (content === "writings") {
    const url = await staticCoverImage(
      writingsDirectory,
      "public/writings",
      "/writings",
      directory,
      image
    );

    const blurDataURL = await resolveImageBlurDataURL(
      writingsDirectory,
      directory,
      image
    );

    return { url, blurDataURL };
  }

  if (content === "projects") {
    const url = await staticCoverImage(
      projectsDirectory,
      "public/projects",
      "/projects",
      directory,
      image
    );

    const blurDataURL = await resolveImageBlurDataURL(
      projectsDirectory,
      directory,
      image
    );
    return { url, blurDataURL };
  }
}

const writings = defineCollection({
  name: "writings",
  directory: writingsDirectory,
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isPublished: z.boolean().default(false),
  }),
  transform: async (post, ctx) => {
    const mdx = await compileMDX(ctx, post, {
      files: (appender) => {
        const directory = path.join(
          writingsDirectory,
          post._meta.directory,
          "components"
        );
        appender.directory("./components", directory);
      },
      rehypePlugins: [
        rehypeSlug,
        prettycode,
        [
          staticImages,
          {
            publicDir: path.join("public", "writings"),
            resourcePath: "/writings",
            sourceRoot: writingsDirectory,
          },
          theme,
        ],
      ],
      remarkPlugins: [remarkGfm, codeImport],
    });

    const image = await ctx.cache(
      {
        image: post.image as string,
        directory: post._meta.directory,
        content: "writings",
      },
      collectImageInformation
    );
    return {
      ...post,
      image,
      content: {
        mdx,
        raw: post.content,
      },
      readingTime: calculateReadingTime(post.content),
      lastModified: await lastModificationDate(post._meta.filePath),
      url: `/writings/${post._meta.path}`,
    };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: projectsDirectory,
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    oneLiner: z.string(),
    githubUrl: z.string().optional(),
    deployedUrl: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isPublished: z.boolean().default(false),
    pinded: z.boolean().default(false),
  }),
  transform: async (project, ctx) => {
    const mdx = await compileMDX(ctx, project, {
      files: (appender) => {
        const directory = path.join(
          projectsDirectory,
          project._meta.directory,
          "components"
        );
        appender.directory("./components", directory);
      },
      rehypePlugins: [
        codeSetup,
        rehypeSlug,
        [
          prettycode,
          staticImages,
          {
            theme: "github-dark",
            publicDir: path.join("public", "projects"),
            resourcePath: "/projects",
            sourceRoot: projectsDirectory,
          },
        ],
      ],
      remarkPlugins: [remarkGfm, codeImport],
    });
    const image = await ctx.cache(
      {
        image: project.image as string,
        directory: project._meta.directory,
        content: "projects",
      },
      collectImageInformation
    );
    return {
      ...project,
      image,
      content: {
        mdx,
        raw: project.content,
      },
      readingTime: calculateReadingTime(project.content),
      lastModified: await lastModificationDate(project._meta.filePath),
      url: `/projects/${project._meta.path}`,
    };
  },
});

export default defineConfig({
  collections: [writings, projects],
});
