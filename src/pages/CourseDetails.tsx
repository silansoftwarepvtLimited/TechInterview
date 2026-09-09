import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { tutorials } from "../data/tutorials";
import CodeBlock from "../components/CodeBlock";

const TutorialDetails = () => {
  const { slug } = useParams();

  const tutorial = tutorials.find(
    (item) => item.slug === slug
  );

  if (!tutorial) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Tutorial Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-gray-200 bg-white">

            <div className="border-b border-gray-200 p-4">
              <h2 className="font-bold text-gray-900">
                {tutorial.title}
              </h2>
            </div>

            <div className="max-h-[calc(100vh-150px)] overflow-y-auto p-2">
              {tutorial.topics.map((topic, index) => (
                <button
                  key={topic}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm ${
                    index === 0
                      ? "bg-green-50 font-semibold text-green-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs text-gray-400">
                    {index + 1}
                  </span>

                  {topic}
                </button>
              ))}
            </div>

          </div>
        </aside>

        <article className="min-w-0">

          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/tutorials">
              Tutorials
            </Link>

            <ChevronRight size={15} />

            <span className="text-gray-900">
              {tutorial.title}
            </span>
          </div>

          <span className="text-sm font-bold uppercase tracking-wide text-green-600">
            {tutorial.category}
          </span>

          <h1 className="mt-3 text-4xl font-black text-gray-900">
            {tutorial.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {tutorial.description}
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-2xl font-black text-gray-900">
            Introduction
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Welcome to the {tutorial.title}.
            In this tutorial, you will learn the fundamental
            concepts step by step with practical examples.
          </p>

          <h2 className="mt-10 text-2xl font-black text-gray-900">
            Getting Started
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Let's start with a simple example.
          </p>

          <CodeBlock
            language="javascript"
            code={`const message = "Hello World";

console.log(message);`}
          />

          <h2 className="mt-10 text-2xl font-black text-gray-900">
            Topics Covered
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tutorial.topics.map((topic) => (
              <div
                key={topic}
                className="rounded-lg border border-gray-200 p-4 text-sm font-medium hover:border-green-300 hover:bg-green-50"
              >
                {topic}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-between border-t border-gray-200 pt-6">

            <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold">
              ← Previous
            </button>

            <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white">
              Next →
            </button>

          </div>

        </article>

      </div>

    </div>
  );
};

export default TutorialDetails;