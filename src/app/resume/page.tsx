import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function Resume() {
  return (
    <PageLayout>
      <div className="w-full max-w-5xl px-4 flex items-center">
        <h1 className="text-white text-3xl font-light tracking-tight mb-12 hover:text-yellow-500">
          <Link href="/">portfolio/</Link>
        </h1>
        <h1 className="text-white text-3xl font-light tracking-tight mb-12">
          resume
        </h1>
      </div>
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-white text-3xl font-light tracking-tight mb-12">
          Experience
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl font-light tracking-tight">
              Software Developer III
            </h2>
            <h3 className="text-white text-xl font-light tracking-tight">
              Paycom
            </h3>
            <h4 className="text-white text-lg font-light tracking-tight">
              April 2023 - Present
            </h4>
            <p className="text-white text-lg font-light tracking-tight">
              Contributed to multiple finance-centric projects, including
              International and Domestic Banking.
            </p>
            <p className="text-white text-lg font-light tracking-tight">
              Played a key role in designing and delivering two financial
              dashboards:
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Client-facing Dashboard: Built using React and TypeScript
              (frontend), PHP backend and MySQL database, focusing on intuitive,
              user-centric experiences.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Back-office Dashboard: Led development with React and TypeScript
              (frontend), C# with Entity Framework Core (backend), and MySql
              database for robust, scalable functionality.
            </p>
            <p className="text-white text-lg font-light tracking-tight">
              Demonstrated expertise in React and TypeScript.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Asked to speak on React, leading multiple talks and workshops.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Architected a mission critical dashboard used to manage millions
              of dollars in daily transactions.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Consistently innovated, delivering reusable components and
              patterns used by multiple teams.
            </p>
            <p className="text-white text-lg font-light tracking-tight">
              Improved performance on the Back-office dashboard by 43.5x on the
              backend [c# + EF Core] through a combination of query optimization
              and caching.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
