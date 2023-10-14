import { buttonVariants } from "./components/ui/button";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite, React, Tailwind minimal starter
      </h1>
      <a
        href="https://github.com/moinulmoin/vite-react-tailwind-starter"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
      >
        <span className="text-xl hover:underline underline-offset-2">Star on GitHub</span>&nbsp;:)
      </a>
    </main>
  );
}

export default App;
