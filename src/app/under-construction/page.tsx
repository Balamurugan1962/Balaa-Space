import { Back } from "@/components/Back";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-7 min-h-dvh w-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl text-text">Under Construction</h1>
        <p className="text-subtle text-sm md:text-lg">
          This page is currently under construction.
        </p>
      </div>
      <Back />
    </main>
  );
}
