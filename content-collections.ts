import { remarkCodeHike } from "@code-hike/mdx";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { exec as syncExec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import resolveImageBlurDataURL from "./lib/imageBlurDataURL";
import staticImages, { staticCoverImage } from "./lib/static-images";
import theme from "@/lib/theme.json" assert { type: "json" };

const exec = promisify(syncExec);

const writingsDirectory = "content/writings";

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

type ImageParams = { image: string; directory: string };

async function collectImageInformation({ image, directory }: ImageParams) {
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
        [
          staticImages,
          {
            publicDir: path.join("public", "writings"),
            resourcePath: "/writings",
            sourceRoot: writingsDirectory,
          },
        ],
      ],
      remarkPlugins: [
        remarkGfm,
        codeImport,
        [remarkCodeHike, { theme, showCopyButton: true, autoImport: true }],
      ],
    });

    const imageInformation = post.image
      ? await collectImageInformation({
          image: post.image,
          directory: post._meta.directory,
        })
      : null;

    return {
      ...post,
      ...imageInformation,
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

export default defineConfig({
  collections: [writings],
});
