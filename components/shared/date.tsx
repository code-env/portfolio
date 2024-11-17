import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";

type Props = {
  value: string;
  title?: string;
  className?: string;
};

const DateTime = ({ title, value, className }: Props) => (
  <time title={title} className={cn("text-sm", className)} dateTime={value}>
    {format(parseISO(value), "MMMM d, yyyy")}
  </time>
);

export default DateTime;
