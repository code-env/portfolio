import React from "react";
import { allWritings } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Writing from "@/components/writing";
import "@/styles/mdx.css";

interface PageProps {
  params: {
    write: string;
  };
}

async function getPostFromParams({ params }: PageProps) {
  const slug = params.write;
  const doc = allWritings.find(
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
  };
}

const Page = async ({ params }: PageProps) => {
  const writing = await getPostFromParams({ params });

  if (!writing) {
    notFound();
  }

  return (
    <div className="py-56 min-h-screen wrapper">
      <Writing writing={writing} />
    </div>
  );
};

export default Page;
