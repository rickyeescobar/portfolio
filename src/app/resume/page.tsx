"use client";

import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center pt-[20vh] pb-36">
      <div className="w-full max-w-5xl px-4 flex items-center">
        <h1
          onClick={() => router.back()}
          className="text-white text-3xl font-light tracking-tight mb-12 hover:text-yellow-500"
        >
          portfolio/
        </h1>
        <h1 className="text-white text-3xl font-light tracking-tight mb-12">
          resume
        </h1>
      </div>
      <div className="w-full max-w-5xl px-4">
        {/* // TODO: Add resume */}
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
              Collaborated with cross-functional teams to deliver high-quality,
              innovative software solutions in fast-paced, dynamic environments.
            </p>
            <p className="text-white text-lg font-light tracking-tight">
              Demonstrated expertise in React and TypeScript.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Architected a mission critical dashboard used to manage millions
              of dollars in daily transactions.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Asked to speak on React and TypeScript, leading multiple talks and
              workshops.
            </p>
            <p className="text-white text-lg font-light tracking-tight pl-4">
              Consistently innovated, delivering reusable components and
              patterns used by multiple teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
