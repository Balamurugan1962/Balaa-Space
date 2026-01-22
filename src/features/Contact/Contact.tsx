import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { CONTACTS_ITEMS } from "./constants/Contact_items";
import { LinkComponent } from "@/components/Link";
import { Back } from "@/components/Back";

export default function Contact() {
  return (
    <main className="w-screen min-h-dvh flex items-center justify-center p-3">
      <section className="flex flex-col gap-7 items-center max-w-[20rem] w-full">
        <div className="flex flex-col gap-7 w-full">
          <h1 className="text-xl">Contact Me here</h1>
          <div className="flex flex-wrap gap-3">
            {CONTACTS_ITEMS.map((link) => (
              <LinkComponent
                key={link.id}
                href={link.href}
                label={link.label}
                link_type={link.link_type}
                type="nav"
              />
            ))}
          </div>
        </div>
        <Back />
      </section>
    </main>
  );
}
