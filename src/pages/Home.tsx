import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  PlayCircle,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  // {
  //   icon: Code2,
  //   title: "Web Development",
  //   description: "HTML, CSS, JavaScript, React and modern web technologies.",
  //   resources: "50+ Learning Resources",
  // },
  // {
  //   icon: Code2,
  //   title: "Programming",
  //   description: "Build strong programming fundamentals with practical learning.",
  //   resources: "40+ Learning Resources",
  // },
   {
    icon: Briefcase,
    title: "Java",
    description: "Learn Java programming from basics to advanced concepts.",
    resources: "20+ Learning Resources",
  },
   {
    icon: Sparkles,
    title: "Python",
    description: "Learn Python for development, automation and data science.",
    resources: "20+ Learning Resources",
  },
  // {
  //   icon: Database,
  //   title: "Data Science",
  //   description: "Python, statistics, analytics and data science concepts.",
  //   resources: "30+ Learning Resources",
  // },
  // {
  //   icon: Brain,
  //   title: "Artificial Intelligence",
  //   description: "Learn AI concepts and modern intelligent technologies.",
  //   resources: "25+ Learning Resources",
  // },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Understand machine learning algorithms and applications.",
    resources: "25+ Learning Resources",
  },
  {
    icon: Trophy,
    title: "DSA",
    description: "Improve problem-solving with data structures and algorithms.",
    resources: "30+ Learning Resources",
  },
];

const learningPoints = [
  "Industry-relevant technologies",
  "Practical coding and projects",
  "Structured courses and tutorials",
  "Interview-focused preparation",
];

const Home = () => {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-[#f7fbff] via-white to-[#eef6ff]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#008CFF]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-[#0057D9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9d7ff] bg-white px-4 py-2 text-sm font-semibold text-[#0057D9] shadow-sm">
              <Sparkles size={17} />
              Learn. Practice. Build. Get Interview Ready.
            </div> */}

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#061F63] sm:text-5xl md:text-6xl lg:text-7xl">

              Learn Technology.

              <br />

              <span className="bg-linear-to-r from-[#061F63] via-[#0057D9] to-[#008CFF] bg-clip-text text-transparent">
                Build Your Career.
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Learn programming, web development, data science, artificial
              intelligence, machine learning and other in-demand technologies
              through practical tutorials, courses and interview preparation.
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row">

              <div className="flex flex-1 items-center rounded-xl border border-gray-300 bg-white px-4 shadow-sm transition focus-within:border-[#0057D9] focus-within:ring-4 focus-within:ring-[#EAF4FF]">

                <BookOpen
                  size={20}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search courses, tutorials, topics..."
                  className="w-full bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

              </div>

              <button
                type="button"
                className="rounded-xl bg-linear-to-r from-[#061F63] via-[#0057D9] to-[#008CFF] px-7 py-4 font-bold text-white shadow-lg shadow-[#0057D9]/20 transition hover:-translate-y-0.5"
              >
                Search
              </button>

            </div>

            {/* Popular searches */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">

              {/* <span className="font-medium text-gray-500">
                Popular:
              </span> */}
{/* 
              {["Java", "Python", "DSA"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="font-semibold text-[#0057D9] transition hover:text-[#061F63]"
                  >
                    {item}
                  </Link>
                )
              )} */}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      {/* <section className="border-y border-gray-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">

          <div className="flex flex-col items-center px-4 py-8 text-center">
            <BookOpen className="mb-3 text-[#0057D9]" size={25} />

            <h3 className="text-2xl font-black text-[#061F63]">
              500+
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Tutorials
            </p>
          </div>

          <div className="flex flex-col items-center px-4 py-8 text-center">
            <GraduationCap className="mb-3 text-[#0057D9]" size={25} />

            <h3 className="text-2xl font-black text-[#061F63]">
              20+
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Courses
            </p>
          </div>

          <div className="flex flex-col items-center px-4 py-8 text-center">
            <Code2 className="mb-3 text-[#0057D9]" size={25} />

            <h3 className="text-2xl font-black text-[#061F63]">
              1000+
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Coding Problems
            </p>
          </div>

          <div className="flex flex-col items-center px-4 py-8 text-center">
            <Users className="mb-3 text-[#0057D9]" size={25} />

            <h3 className="text-2xl font-black text-[#061F63]">
              10K+
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Learners
            </p>
          </div>

        </div>

      </section> */}

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0057D9]">
                Explore
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#061F63] sm:text-4xl">
                Learn by Category
              </h2>

              <p className="mt-2 text-gray-600">
                Choose a technology and start learning.
              </p>
            </div>

            <Link
              to="/"
              className="flex items-center gap-1 font-semibold text-[#0057D9] hover:text-[#061F63]"
            >
              View All
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Category grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  to="/"
                  key={category.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#b9d7ff] hover:shadow-xl hover:shadow-[#0057D9]/10"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0057D9] transition group-hover:bg-[#0057D9] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <ChevronRight
                      size={20}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#0057D9]"
                    />

                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#061F63]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <p className="mt-5 text-xs font-bold text-[#0057D9]">
                    {category.resources}
                  </p>

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES
      ===================================================== */}

      {/* <section className="bg-[#f7fbff] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0057D9]">
                Professional Learning
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#061F63] sm:text-4xl">
                Popular Courses
              </h2>

              <p className="mt-2 text-gray-600">
                Learn practical skills through structured courses.
              </p>
            </div>

            <Link
              to="/courses"
              className="flex items-center gap-1 font-semibold text-[#0057D9] hover:text-[#061F63]"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            {popularCourses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >

                
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#061F63] via-[#0057D9] to-[#008CFF]">

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                  <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10" />

                  <PlayCircle
                    size={65}
                    strokeWidth={1.5}
                    className="relative text-white"
                  />

                </div>

                <div className="p-6">

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0057D9]">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.lessons}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-[#061F63]">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {course.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                    <span className="text-xl font-black text-[#061F63]">
                      {course.price}
                    </span>

                    <Link
                      to="/courses"
                      className="flex items-center gap-1 rounded-lg bg-[#0057D9] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#061F63]"
                    >
                      View Course
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section> */}

      {/* =====================================================
          WHY CODEINTERVIEW360
      ===================================================== */}

      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0057D9]">
                Why TechInterview
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#061F63] sm:text-4xl">
                Learn skills that help you build your career.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                TechInterview brings learning, coding practice, interview
                preparation and career-focused resources together in one
                platform.
              </p>

              <div className="mt-7 space-y-4">

                {learningPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-[#0057D9]"
                    />

                    <span className="font-medium text-gray-700">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#061F63] px-6 py-3 font-semibold text-white transition hover:bg-[#0057D9]"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Right */}
            <div className="relative">

              <div className="rounded-3xl bg-linear-to-br from-[#061F63] via-[#0057D9] to-[#008CFF] p-8 shadow-2xl shadow-[#0057D9]/20 sm:p-10">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                    <Code2 size={30} />

                    <h3 className="mt-5 text-xl font-bold">
                      Learn
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Learn modern technologies through structured tutorials
                      and courses.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                    <Trophy size={30} />

                    <h3 className="mt-5 text-xl font-bold">
                      Practice
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Solve coding problems and improve your technical skills.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                    <Briefcase size={30} />

                    <h3 className="mt-5 text-xl font-bold">
                      Prepare
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Prepare for technical interviews and real-world jobs.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                    <GraduationCap size={30} />

                    <h3 className="mt-5 text-xl font-bold">
                      Grow
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Build a strong foundation for your technology career.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO LEARNING
      ===================================================== */}

      <section className="bg-[#f7fbff] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-[#d8e9ff] bg-white p-8 shadow-sm sm:p-12">

            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-semibold text-[#0057D9]">
                  <PlayCircle size={17} />
                  Video Learning
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#061F63] sm:text-4xl">
                  Learn through practical video courses.
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Follow structured lessons, watch practical demonstrations
                  and learn step-by-step from beginner concepts to advanced
                  topics.
                </p>

                <Link
                  to="/"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#0057D9] hover:text-[#061F63]"
                >
                  Browse Courses
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="flex aspect-video items-center justify-center rounded-2xl bg-linear-to-br from-[#061F63] via-[#0057D9] to-[#008CFF]">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
                  <PlayCircle
                    size={42}
                    className="text-[#0057D9]"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      {/* <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-gradient-to-r from-[#061F63] via-[#0057D9] to-[#008CFF] px-6 py-14 text-white shadow-2xl shadow-[#0057D9]/20 sm:px-10">

            <Sparkles
              size={30}
              className="mx-auto"
            />

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Start your learning journey today.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Explore tutorials, master new technologies, practice coding
              problems and prepare yourself for your next career opportunity.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="rounded-xl bg-white px-7 py-3 font-bold text-[#061F63] transition hover:bg-blue-50"
              >
                Explore Courses
              </Link>

              <Link
                to="/tutorials"
                className="rounded-xl border border-white/40 px-7 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Browse Tutorials
              </Link>

            </div>

          </div>
        </div>
      </section> */}

      {/* =====================================================
          COMPANY
      ===================================================== */}

      {/* <section className="border-t border-gray-200 bg-gray-50 py-10">

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm text-gray-500">
            CodeInterview360 is a technology learning platform by
          </p>

          <p className="mt-1 text-lg font-bold text-[#061F63]">
            Silan Software Pvt. Ltd.
          </p>

        </div>

      </section> */}

    </main>
  );
};

export default Home;