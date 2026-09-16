import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Main navigation active style
  const mainNavClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "font-semibold text-[#0057D9]"
        : "text-gray-700 hover:text-[#0057D9]"
    }`;

  // Secondary navigation active style
  // const secondaryNavClass = ({ isActive }: { isActive: boolean }) =>
  //   `relative shrink-0 px-4 py-2.5 text-sm transition-colors duration-200 ${
  //     isActive
  //       ? "font-semibold text-[#0057D9] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#0057D9]"
  //       : "font-medium text-gray-600 hover:text-[#0057D9]"
  //   }`;

  // Mobile navigation active style
  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-3 transition-colors duration-200 ${
      isActive
        ? "bg-[#EAF4FF] font-semibold text-[#0057D9]"
        : "text-gray-700 hover:bg-[#F4F8FF] hover:text-[#0057D9]"
    }`;

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 w-full border-b border-[#D8E9FF] bg-white">
        <div className="mx-auto flex h-16 w-full max-w-360 items-center px-4 sm:px-6 lg:px-8">

          {/* =================================================
              SILANTECH LOGO
          ================================================= */}

          <Link
            to="/"
            className="flex shrink-0 items-center gap-2"
          >
            {/* <img
              src="/favicon.png"
              alt="SilanTech Logo"
              className="h-10 w-10 object-contain"
            /> */}

            <img
              src="/logo_text.png"
              alt="SilanTech"
              className="h-56 w-52 object-contain mt-2"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="ml-8 hidden items-center gap-7 lg:flex">

            <NavLink
              to="/about"
              className={mainNavClass}
            >
              About
            </NavLink>

            <NavLink
              to="/"
              className={mainNavClass}
            >
              Courses
            </NavLink>

            <NavLink
              to="/"
              className={mainNavClass}
            >
              Tutorials
            </NavLink>

            <NavLink
              to="/"
              className={mainNavClass}
            >
              Interview
            </NavLink>

          </nav>

          {/* =================================================
              DESKTOP SEARCH
          ================================================= */}

          <div className="ml-8 hidden min-w-0 flex-1 md:block">

            <div className="mx-auto flex max-w-115 items-center rounded-xl border border-[#C9DFFF] bg-[#F8FBFF] transition-all duration-200 focus-within:border-[#0057D9] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#EAF4FF]">

              <Search
                size={19}
                className="ml-3 shrink-0 text-[#0057D9]"
              />

              <input
                type="text"
                placeholder="Search courses, tutorials..."
                className="min-w-0 w-full bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

            </div>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-[#061F63]
              transition
              hover:bg-[#EAF4FF]
              hover:text-[#0057D9]
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileMenu && (
          <div className="border-t border-[#D8E9FF] bg-white md:hidden">

            <div className="space-y-1 px-4 py-4">

              {/* Mobile Search */}

              <div className="mb-4 flex items-center rounded-xl border border-[#C9DFFF] bg-[#F8FBFF] focus-within:border-[#0057D9]">

                <Search
                  size={18}
                  className="ml-3 shrink-0 text-[#0057D9]"
                />

                <input
                  type="text"
                  placeholder="Search courses, tutorials..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400"
                />

              </div>

              {/* Home */}

              <NavLink
                to="/"
                end
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Home
              </NavLink>

              {/* About */}

              <NavLink
                to="/about"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                About
              </NavLink>

              {/* Courses */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Courses
              </NavLink>

              {/* Tutorials */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Tutorials
              </NavLink>

              {/* Interview */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Interview
              </NavLink>

              {/* DSA */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                DSA
              </NavLink>

              {/* Programming */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Programming
              </NavLink>

              {/* Jobs */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={mobileNavClass}
              >
                Jobs & Career
              </NavLink>

            </div>

          </div>
        )}

      </header>

      {/* =====================================================
          SECONDARY NAVIGATION
      ===================================================== */}

      {/* <div className="hidden w-full border-b border-[#D8E9FF] bg-white md:block">

        <div className="mx-auto flex w-full max-w-[1440px] items-center overflow-x-auto px-4 sm:px-6 lg:px-8">

          

          <NavLink
            to="/"
            className={secondaryNavClass}
          >
            Java
          </NavLink>

       

          <NavLink
            to="/"
            className={secondaryNavClass}
          >
            DSA
          </NavLink>

    
          <NavLink
            to="/"
            className={secondaryNavClass}
          >
            Python
          </NavLink>

          <NavLink
            to="/ai"
            className={secondaryNavClass}
          >
            AI
          </NavLink>

         <NavLink
            to="/javascript"
            className={secondaryNavClass}
          >
            JavaScript
          </NavLink>

         

          <NavLink
            to="/react"
            className={secondaryNavClass}
          >
            React
          </NavLink>

        </div>

      </div> */}
    </>
  );
};

export default Navbar;