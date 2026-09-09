import {
  BookOpen,
  Code2,
  Brain,
  Video,
  Trophy,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Programming & Development",
      description:
        "Learn Java, Python, JavaScript, React, and other industry-relevant technologies.",
    },
    {
      icon: Brain,
      title: "Data Structures & Algorithms",
      description:
        "Build strong problem-solving skills with DSA concepts, coding problems, and practical exercises.",
    },
    {
      icon: BookOpen,
      title: "Online Courses",
      description:
        "Follow structured courses designed for beginners, students, and professionals.",
    },
    {
      icon: Video,
      title: "Video-Based Learning",
      description:
        "Learn through structured lessons, practical demonstrations, and course videos.",
    },
    {
      icon: Trophy,
      title: "Interview Preparation",
      description:
        "Prepare for technical interviews with interview questions, assessments, and practice.",
    },
    {
      icon: Briefcase,
      title: "Career Preparation",
      description:
        "Develop the practical skills and confidence needed to become industry-ready.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-semibold text-[#0057D9]">
            About
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#061F63] sm:text-4xl lg:text-5xl">
            Learn. Practice.{" "}
            <span className="text-[#0057D9]">
              Get Interview Ready.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            CodeInterview360 is a technology learning and interview
            preparation platform designed to help students, developers,
            freshers, and professionals build practical skills and become
            industry-ready.
          </p>
        </div>

        {/* Company Information */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#061F63] sm:text-3xl">
              Your complete technology learning platform
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              CodeInterview360 brings programming tutorials, online courses,
              coding practice, interview preparation, assessments, and
              career-focused learning resources together in one platform.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our goal is to bridge the gap between academic knowledge and
              real-world industry requirements through practical and
              structured learning.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">
              {[
                "Practical and career-focused learning",
                "Structured technical courses and tutorials",
                "Coding and interview preparation",
                "Industry-relevant technologies and skills",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#0057D9]"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Owned By */}
            <div className="mt-8 rounded-xl border border-[#D8E9FF] bg-[#EAF4FF] p-5">
              <p className="text-sm font-medium text-gray-500">
                A platform by
              </p>

              <p className="mt-1 text-lg font-bold text-[#061F63]">
                Silan Software Pvt. Ltd.
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                TechInterView is owned and operated by Silan Software Pvt.
                Ltd., providing technology education and career-focused
                learning solutions.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-2xl border border-[#D8E9FF] bg-[#F7FBFF] p-6 shadow-sm sm:p-8">

              <div className="grid grid-cols-2 gap-4">

                {/* Coding */}
                <div className="rounded-xl border border-[#E5F0FF] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <Code2
                    size={28}
                    className="text-[#0057D9]"
                  />

                  <h4 className="mt-4 font-bold text-[#061F63]">
                    Coding
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Practice real programming problems.
                  </p>
                </div>

                {/* Courses */}
                <div className="rounded-xl border border-[#E5F0FF] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <Video
                    size={28}
                    className="text-[#0057D9]"
                  />

                  <h4 className="mt-4 font-bold text-[#061F63]">
                    Courses
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Learn through structured courses.
                  </p>
                </div>

                {/* Skills */}
                <div className="rounded-xl border border-[#E5F0FF] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <Brain
                    size={28}
                    className="text-[#0057D9]"
                  />

                  <h4 className="mt-4 font-bold text-[#061F63]">
                    Skills
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Build industry-ready skills.
                  </p>
                </div>

                {/* Interviews */}
                <div className="rounded-xl border border-[#E5F0FF] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <Trophy
                    size={28}
                    className="text-[#0057D9]"
                  />

                  <h4 className="mt-4 font-bold text-[#061F63]">
                    Interviews
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Prepare for technical interviews.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#061F63] sm:text-3xl">
              Everything you need to grow
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Learn technologies, practice your skills, and prepare for your
              next career opportunity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[#D8E9FF] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#8EC5FF] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF4FF]">
                    <Icon
                      size={24}
                      className="text-[#0057D9]"
                    />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#061F63]">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;