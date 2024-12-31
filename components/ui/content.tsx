import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

const Content = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  );
};

interface ContentTitleProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {}

const ContentTitle = ({ children, className, ...props }: ContentTitleProps) => {
  return (
    <h1
      className={cn(
        "text-neutral-500 dark:text-neutral-400 text-sm flex-[0.3]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

interface ContentChildrenProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

const ContentChildren = ({
  children,
  className,
  ...props
}: ContentChildrenProps) => {
  return (
    <div
      className={cn("flex-1 flex flex-col gap-10 text-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Content, ContentTitle, ContentChildren };
