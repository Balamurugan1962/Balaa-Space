import { LinkComponent } from "@/components/Link";
import { NAVBAR_ITEMS } from "../../../constants/NavBar_items";

export function NavBar() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {NAVBAR_ITEMS.map((item, index) => (
        <LinkComponent
          key={index}
          href={item.href}
          label={item.label}
          link_type={item.link_type}
          type="nav"
        />
      ))}
    </div>
  );
}
