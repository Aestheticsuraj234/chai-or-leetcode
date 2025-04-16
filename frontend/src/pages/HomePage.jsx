import React, { useEffect } from "react";

import { useProblemStore } from "../store/useProblemStore";
import ProblemsTable from "../components/ProblemTable";
import { Loader } from "lucide-react";

const HomePage = () => {
  const { getAllProblems ,problems , isProblemsLoading} = useProblemStore();

  useEffect(() => {
    getAllProblems();
  }, [getAllProblems]);

  console.log(problems);

  if (isProblemsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center mt-14 px-4">
      <div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
      <h1 className="text-4xl font-extrabold z-10 text-center">
        Welcome to <span className="text-primary">LeetLab</span>
      </h1>
      <p className="mt-4 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10">
        A Platform Inspired by Leetcode which helps you to prepare for coding interviews and helps you to improve your coding skills by solving coding problems
      </p>

    {
      problems.length > 0 ? <ProblemsTable problems={problems} /> : (
        <p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
          No problems found
        </p>
      )
    }
    </section>
  );
};

export default HomePage;
