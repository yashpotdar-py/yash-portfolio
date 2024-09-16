"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: "16",
    text: "Open-Source Projects & Repositories",
  },
  {
    num: "8",
    text: "Technologies & Frameworks Mastered",
  },
  {
    num: "280",
    text: "Code Commits Across Various Projects",
  },
  {
    num: "2",
    text: "Machine Learning & Deep Learning Projects Deployed",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span className="text-2xl font-extrabold">+</span>
                <p
                  className={`${
                    item.text.length > 15 ? "max-w-[200px]" : "max-w-[250px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
