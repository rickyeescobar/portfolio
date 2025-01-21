import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function About() {
  return (
    <PageLayout>
      <div className="w-full max-w-5xl px-4 flex items-center">
        <h1 className="text-white text-3xl font-light tracking-tight mb-12 hover:text-yellow-500">
          <Link href="/"> portfolio/</Link>
        </h1>

        <h1 className="text-white text-3xl font-light tracking-tight mb-12">
          about
        </h1>
      </div>
      <div className="w-full max-w-5xl px-4">
        <p className="text-white text-2xl font-light tracking-tight mb-12">
          Hey there, I'm Ricky. I'm a software engineer from Houston, TX. Over
          the past 2 years, I've been privileged to work on financial
          applications in the International Banking space at Paycom in Dallas,
          TX.
        </p>
        <p className="text-white text-2xl font-light tracking-tight mb-12">
          I graduated magna cum laude from Baylor University in '22 with a
          double major in Management Information Systems and Entrepreneurship &
          Corporate Innovation.
        </p>
        <p className="text-white text-2xl font-light tracking-tight mb-12">
          Currently, in my free time, I am working on a Fitness startup, MaiFit.
          It is the product of two of my passions, entrepreneurship and fitness.
          I discovered strength training when I was a sophomore in high school
          and it completely changed the course of my life. It taught me
          discipline, focus, and persistence, which continue to pay dividends in
          my life. Then, in college, I discovered my passion for
          entrepreneurship. Now I spend many weekends, early mornings, and
          evenings building MaiFit and working on other side projects.
        </p>
      </div>
    </PageLayout>
  );
}
