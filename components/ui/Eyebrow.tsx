import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center";
}

export default function Eyebrow({ children, className, align = "start" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="h-px w-8 bg-gold-300/60" />
      <span className="text-eyebrow">{children}</span>
    </div>
  );
}
