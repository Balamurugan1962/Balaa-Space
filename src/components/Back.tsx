import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function Back() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-muted hover:text-subtle"
    >
      <ChevronLeft className="w-4 h-4" />
      <p>Back</p>
    </Link>
  );
}
