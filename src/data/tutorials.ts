import type { Tutorial } from "../types";

export const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "HTML Tutorial",
    slug: "html",
    category: "Web Development",
    description:
      "Learn HTML from beginner to advanced with simple explanations and examples.",
    topics: [
      "HTML Introduction",
      "HTML Elements",
      "HTML Attributes",
      "HTML Headings",
      "HTML Paragraphs",
      "HTML Links",
      "HTML Images",
      "HTML Tables",
      "HTML Forms",
    ],
  },

  {
    id: 2,
    title: "CSS Tutorial",
    slug: "css",
    category: "Web Development",
    description:
      "Learn CSS and create beautiful responsive websites.",
    topics: [
      "CSS Introduction",
      "CSS Syntax",
      "CSS Selectors",
      "CSS Colors",
      "CSS Fonts",
      "CSS Box Model",
      "CSS Flexbox",
      "CSS Grid",
      "CSS Animations",
    ],
  },

  {
    id: 3,
    title: "JavaScript Tutorial",
    slug: "javascript",
    category: "Programming",
    description:
      "Learn JavaScript from basics to advanced programming concepts.",
    topics: [
      "JavaScript Introduction",
      "Variables",
      "Data Types",
      "Operators",
      "Functions",
      "Arrays",
      "Objects",
      "DOM",
      "Events",
      "Promises",
      "Async Await",
    ],
  },

  {
    id: 4,
    title: "React Tutorial",
    slug: "react",
    category: "Frontend",
    description:
      "Learn React and build modern frontend applications.",
    topics: [
      "React Introduction",
      "Components",
      "JSX",
      "Props",
      "State",
      "Events",
      "Hooks",
      "useEffect",
      "Context API",
      "React Router",
    ],
  },

  {
    id: 5,
    title: "Java Tutorial",
    slug: "java",
    category: "Programming",
    description:
      "Learn Java programming from fundamentals to advanced concepts.",
    topics: [
      "Java Introduction",
      "Variables",
      "Data Types",
      "Operators",
      "Conditions",
      "Loops",
      "Methods",
      "Classes",
      "Objects",
      "Inheritance",
      "Polymorphism",
      "Exception Handling",
      "Collections",
    ],
  },

  {
    id: 6,
    title: "Python Tutorial",
    slug: "python",
    category: "Programming",
    description:
      "Learn Python programming with practical examples.",
    topics: [
      "Python Introduction",
      "Variables",
      "Data Types",
      "Operators",
      "Conditions",
      "Loops",
      "Functions",
      "Lists",
      "Tuples",
      "Dictionaries",
      "Classes",
      "Modules",
    ],
  },
];