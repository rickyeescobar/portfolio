import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[20vh] pb-36">
      {children}
    </div>
  );
}
