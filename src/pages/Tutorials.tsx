import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TutorialCard from "../components/TutorialCard";
import { tutorials } from "../data/tutorials";

const Tutorials = () => {
  const [search, setSearch] = useState("");

  const filtered = tutorials.filter((tutorial) =>
    tutorial.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#F4F8FF]">

      {/* HERO / HEADER */}
      <div className="bg-[#061F63]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-[#4DA3FF]/30 bg-[#0057D9] px-4 py-2 text-sm font-bold tracking-wide text-white">
              TUTORIALS
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn Programming
              <span className="block text-[#4DA3FF]">
                & Technology
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Explore free tutorials covering programming,
              web development, AI, data science and more.
            </p>

          </div>

          {/* SEARCH */}
          <div className="mt-10 max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-2 shadow-xl backdrop-blur-sm">
              <SearchBar
                placeholder="Search tutorials..."
                value={search}
                onChange={setSearch}
              />
            </div>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#0057D9]">
              Start Learning
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#061F63] sm:text-3xl">
              Explore Tutorials
            </h2>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-[#C9DEFF] bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-semibold text-gray-600">
              {filtered.length}{" "}
              {filtered.length === 1 ? "Tutorial" : "Tutorials"}
            </span>
          </div>

        </div>

        {/* TUTORIAL GRID */}
        {filtered.length > 0 ? (

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filtered.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                tutorial={tutorial}
              />
            ))}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="mt-10 rounded-3xl border border-[#C9DEFF] bg-white px-6 py-24 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4FF]">
              <span className="text-2xl">
                🔍
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#061F63]">
              No tutorials found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              We couldn't find any tutorials matching your search.
              Try searching for another topic.
            </p>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="
                  mt-6
                  rounded-xl
                  bg-[#0057D9]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:bg-[#061F63]
                  hover:shadow-lg
                "
              >
                Clear Search
              </button>
            )}

          </div>

        )}

        {/* BOTTOM CTA */}
        {filtered.length > 0 && (
          <div className="mt-16 overflow-hidden rounded-3xl bg-[#061F63] px-6 py-12 text-center shadow-xl sm:px-10">

            <div className="mx-auto max-w-2xl">

              <span className="text-sm font-bold uppercase tracking-widest text-[#4DA3FF]">
                Learn at Your Own Pace
              </span>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Build knowledge. Build your future.
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Explore programming, web development, data science,
                artificial intelligence, and other modern technologies.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">

                <div className="rounded-full bg-[#0057D9] px-5 py-2.5 text-sm font-semibold text-white">
                  Learn
                </div>

                <div className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  Practice
                </div>

                <div className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  Grow
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Tutorials;