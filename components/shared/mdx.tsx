"use client";

import { baseComponents } from "@/components/shared/base-component";
import ContentSection from "@/components/shared/content-section";
import FileTree from "@/components/shared/file-tree";
import Notification from "@/components/shared/notification";
import { MDXContent } from "@content-collections/mdx/react";
import { Callout } from "@/components/shared/callout";
import { ReactNode } from "react";
import { NpmCommands, TouchCommands } from "@/types/unist";
import {
  CopyButton,
  CopyNpmCommandButton,
  copyToClipboardWithMeta,
  CopyTouchCommandButton,
} from "./copy-button";
import { cn } from "@/lib/utils";

type Props = {
  code: string;
};

type HeadingProps = {
  id?: string;
  children?: ReactNode;
};

const components = {
  Notification,
  Callout,
  FileTree,
  ...baseComponents,
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __copyId__,
    __windows__,
    __unix__,
    __bunCommand__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __copyId__?: string;
    __rawString__?: string;
    __withMeta__?: boolean;
  } & NpmCommands &
    TouchCommands) => {
    if (__copyId__ && __rawString__) {
      return (
        <div
          id={`source-${__copyId__}`}
          onClick={() => {
            copyToClipboardWithMeta(__rawString__);
          }}
        />
      );
    }

    return (
      <>
        <pre
          className={cn(
            "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg bg-zinc-800 py-4 [&_code]:bg-transparent",
            className
          )}
          {...props}
        />

        {__rawString__ && !__windows__ && (
          <CopyButton
            value={__rawString__}
            className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
          />
        )}

        {__windows__ && __unix__ && (
          <CopyTouchCommandButton
            commands={{ __windows__, __unix__ }}
            className="absolute right-4 top-4"
          />
        )}

        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              commands={{
                __npmCommand__,
                __yarnCommand__,
                __pnpmCommand__,
                __bunCommand__,
              }}
              className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
            />
          )}
      </>
    );
  },
};

const Markdown = ({ code }: Props) => {
  return (
    <ContentSection>
      <MDXContent code={code} components={components} />
    </ContentSection>
  );
};

export default Markdown;
