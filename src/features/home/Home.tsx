import { NavBar } from "./components/NavBar";

export function Home() {
  return (
    <main className="flex flex-col p-12 items-center justify-center h-screen w-screen py-2">
      <section className="flex flex-col gap-12 max-w-[20rem] w-full">
        <div>
          <h1 className="text-xl">Balaa's Space</h1>
          <p className="text-muted text-sm">Loves Coding.</p>
        </div>
        <NavBar />
      </section>
    </main>
  );
}
