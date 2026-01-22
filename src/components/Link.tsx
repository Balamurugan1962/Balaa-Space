import { tv } from "tailwind-variants";
import { ChevronRight, ExternalLink } from "lucide-react";
import { NavBarItem } from "@/features/home/types/NavBar_items";

const link = tv({
  base: "flex justify-between items-center w-full",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    type: {
      link: "text-accent group-hover:underline",
      nav: "text-subtle group-hover:text-text",
    },
  },
  defaultVariants: {
    type: "link",
    size: "md",
  },
});

type LinkProps = NavBarItem & {
  type?: "nav" | "link";
};

export function LinkComponent({ label, href, link_type, type }: LinkProps) {
  return (
    <a href={href} className="w-full group flex flex-col gap-1">
      <h1 className={link({ type: type })}>
        {label}
        {type === "nav" && link_type === "internal" && (
          <ChevronRight className="w-4 text-subtle group-hover:opacity-100 opacity-0" />
        )}
        {type === "nav" && link_type === "external" && (
          <ExternalLink className="w-3 text-subtle group-hover:opacity-100 opacity-0" />
        )}
      </h1>
      {type === "nav" && (
        <div className="h-px bg-accent transition-[width] duration-300 ease-in-out w-1 group-hover:w-full group-hover:opacity-100 opacity-0" />
      )}
    </a>
  );
}
