import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center pt-[20vh]">
      <main className="w-full max-w-5xl px-4">
        <TerminalText
          text="Ricardo Escobar"
          className="text-white text-7xl md:text-9xl font-light tracking-tight mb-12"
        />

        <nav className="text-white space-y-3">
          <div className="flex items-center gap-2">
            <a
              href="/projects"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              ./projects
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume"
              className="hover:text-yellow-500 transition-colors"
            >
              ./resume
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/about"
              className="hover:text-yellow-500 transition-colors"
            >
              ./about
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/links"
              className="hover:text-yellow-500 transition-colors"
            >
              ./links
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
}
