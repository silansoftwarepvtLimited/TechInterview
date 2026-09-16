// import {
//   Camera,
//   Globe,
//   MessageCircle,
//   Play,
// } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#D8E9FF] bg-[#F7FBFF] text-gray-700">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* =========================================
            BRAND
        ========================================= */}

        <div>
      <Link
    to="/"
    className="block h-12 w-52.5 overflow-hidden"
  >
    <img
      src="/logo_text.png"
      alt="TechInterview360"
      className="h-full w-full object-cover object-left"
    />
  </Link>

  {/* Content directly under logo */}
  <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
    Learn programming, development, data science,
    artificial intelligence and modern technologies
    with structured learning resources, courses and
    interview preparation.
  </p>


          {/* Social Icons */}
{/* 
          <div className="mt-6 flex items-center gap-3">

            <a
              href="#"
              aria-label="Website"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#0057D9] transition duration-200 hover:bg-[#0057D9] hover:text-white"
            >
              <Globe size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#0057D9] transition duration-200 hover:bg-[#0057D9] hover:text-white"
            >
              <Camera size={18} />
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#0057D9] transition duration-200 hover:bg-[#0057D9] hover:text-white"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#0057D9] transition duration-200 hover:bg-[#0057D9] hover:text-white"
            >
              <Play size={18} />
            </a>

          </div> */}
        </div>

        {/* =========================================
            LEARN
        ========================================= */}

        <div>
          <h3 className="mb-5 text-base font-bold text-[#061F63]">
            Learn
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            {/* <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Courses
            </Link>

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Tutorials
            </Link> */}

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Practice
            </Link>

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Data Structures & Algorithms
            </Link>

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Interview Preparation
            </Link>

          </div>
        </div>

        {/* =========================================
            POPULAR TOPICS
        ========================================= */}

        <div>
          <h3 className="mb-5 text-base font-bold text-[#061F63]">
            Popular Topics
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Java
            </Link>

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Python
            </Link>

            {/* <Link
              to="/javascript"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              JavaScript
            </Link> */}

            {/* <Link
              to="/react"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              React
            </Link> */}

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Data Science
            </Link>

          </div>
        </div>

        {/* =========================================
            COMPANY
        ========================================= */}

        <div>
          <h3 className="mb-5 text-base font-bold text-[#061F63]">
            Company
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <Link
              to="/about"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              About Us
            </Link>

            <Link
              to="/"
              className="text-gray-600 transition-colors hover:text-[#0057D9]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          NEWSLETTER / CTA
      ========================================= */}

      {/* <div className="border-t border-[#D8E9FF]">

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#EAF4FF] px-6 py-6 sm:flex-row">

            <div>
              <h3 className="font-bold text-[#061F63]">
                Ready to start learning?
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Explore our courses, tutorials and interview preparation resources.
              </p>
            </div>

            <Link
              to="/courses"
              className="shrink-0 rounded-lg bg-[#0057D9] px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#061F63]"
            >
              Explore Courses
            </Link>

          </div>

        </div>
      </div> */}

      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}

      <div className="border-t border-[#D8E9FF]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <p className="text-sm text-gray-500">
            © 2026 TechInterview. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">

            <Link
              to="/"
              className="text-gray-500 transition-colors hover:text-[#0057D9]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="text-gray-500 transition-colors hover:text-[#0057D9]"
            >
              Terms & Conditions
            </Link>

            <span className="hidden text-gray-300 sm:block">
              |
            </span>

            {/* <p className="text-gray-500">
              A product of{" "}
              <span className="font-semibold text-[#061F63]">
                Silan Software Pvt. Ltd.
              </span>
            </p> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;