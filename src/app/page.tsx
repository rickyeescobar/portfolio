import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[20vh]">
      <main className="w-full max-w-5xl px-4">
        <TerminalText
          text="Ricardo Escobar"
          className="text-white text-7xl md:text-9xl font-light tracking-tight mb-12"
        />

        <nav className="flex flex-col text-white text-3xl space-y-4 ">
          <a href="/resume" className="hover:text-yellow-500 transition-colors">
            ./resume
          </a>

          <a href="/about" className="hover:text-yellow-500 transition-colors">
            ./about
          </a>

          <a href="/links" className="hover:text-yellow-500 transition-colors">
            ./links
          </a>
        </nav>
      </main>
    </div>
  );
}
