import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function Links() {
  return (
    <PageLayout>
      <div className="w-full max-w-5xl px-4 flex items-center">
        <h1 className="text-white text-3xl font-light tracking-tight mb-12 hover:text-yellow-500">
          <Link href="/">portfolio/ </Link>
        </h1>
        <h1 className="text-white text-3xl font-light tracking-tight mb-12">
          links
        </h1>
      </div>
      <div className="w-full max-w-5xl px-4">
        <ul className="text-white text-2xl font-light tracking-tight mb-12 space-y-4">
          <li>
            <a
              href="https://maifit.io"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              my company - MaiFit
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rickyeescobar"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              my projects - GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ricardo-escobar-/"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              my professional page - LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
