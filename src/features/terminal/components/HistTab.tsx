import { tv } from "tailwind-variants/lite";

const histTab = tv({
  base: "pb-2 px-3 flex gap-2",
  variants: {
    type: {
      user: "",
      system: "",
    },
  },
});

type HistTabProps = {
  type: "user" | "system";
  children: React.ReactNode;
};
export function HistTab({ type, children }: HistTabProps) {
  return (
    <div className={histTab({ type })}>
      {type === "user" && (
        <div className="flex">
          <p className="text-accent font-bold">visitor</p>@
          <p className="font-semibold">balaa.space:~$</p>
        </div>
      )}
      {children}
    </div>
  );
}
