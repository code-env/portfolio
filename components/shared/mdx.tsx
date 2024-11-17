"use client";

import { baseComponents } from "@/components/shared/base-component";
import ContentSection from "@/components/shared/content-section";
import FileTree from "@/components/shared/file-tree";
import Notification from "@/components/shared/notification";
import { MDXContent } from "@content-collections/mdx/react";
import { Callout } from "@/components/shared/callout";
import { ReactNode } from "react";

type Props = {
  code: string;
};

type HeadingProps = {
  id?: string;
  children?: ReactNode;
};

const Markdown = ({ code }: Props) => {
  return (
    <ContentSection>
      <MDXContent
        code={code}
        components={{
          Notification,
          Callout,
          FileTree,
          ...baseComponents,
        }}
      />
    </ContentSection>
  );
};

export default Markdown;
