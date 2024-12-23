import ProjectMdx from "@/components/project";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import { allProjects } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    project: string;
  };
}

async function getPostFromParams({ params }: PageProps) {
  const slug = params.project;
  const doc = allProjects.find(
    (doc) => doc._meta.path === slug && doc.isPublished
  );

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const doc = await getPostFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc._meta.path),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@bossadizenith",
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const project = await getPostFromParams({ params });

  if (!project) {
    notFound();
  }

  return (
    <div className="py-56 min-h-screen px-4 sm:px-0 max-w-3xl mx-auto w-full">
      <ProjectMdx project={project} />
    </div>
  );
};

export default Page;
