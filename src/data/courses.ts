import type { Course } from "../types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Java Full Stack Development",
    slug: "java-full-stack-development",
    category: "Development",
    level: "Beginner to Advanced",
    duration: "120 Hours",
    lessons: 85,
    rating: 4.8,
    students: 1250,
    price: 9999,
    originalPrice: 14999,
    description:
      "Master Java, Spring Boot, React, MySQL, REST APIs and full-stack application development.",
    featured: true,
  },

  {
    id: 2,
    title: "Generative AI & Agentic AI",
    slug: "generative-ai-agentic-ai",
    category: "Artificial Intelligence",
    level: "Intermediate",
    duration: "90 Hours",
    lessons: 64,
    rating: 4.9,
    students: 850,
    price: 12999,
    originalPrice: 17999,
    description:
      "Learn Generative AI, LLMs, AI agents, LangChain and modern AI application development.",
    featured: true,
  },

  {
    id: 3,
    title: "Data Science & Analytics",
    slug: "data-science-analytics",
    category: "Data Science",
    level: "Beginner to Advanced",
    duration: "100 Hours",
    lessons: 72,
    rating: 4.7,
    students: 920,
    price: 8999,
    originalPrice: 13999,
    description:
      "Learn Python, NumPy, Pandas, visualization, statistics and data analytics.",
    featured: true,
  },

  {
    id: 4,
    title: "AI & Machine Learning with Python",
    slug: "ai-machine-learning-python",
    category: "Machine Learning",
    level: "Intermediate",
    duration: "110 Hours",
    lessons: 78,
    rating: 4.8,
    students: 760,
    price: 10999,
    originalPrice: 15999,
    description:
      "Build machine learning models using Python, Scikit-learn, TensorFlow and Keras.",
  },

  {
    id: 5,
    title: "Frontend Development with React",
    slug: "frontend-react",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "70 Hours",
    lessons: 55,
    rating: 4.8,
    students: 1100,
    price: 6999,
    originalPrice: 9999,
    description:
      "Learn HTML, CSS, JavaScript, React and modern frontend development.",
  },

  {
    id: 6,
    title: "Complete JavaScript Course",
    slug: "complete-javascript",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "60 Hours",
    lessons: 48,
    rating: 4.7,
    students: 1450,
    price: 5999,
    originalPrice: 8999,
    description:
      "Learn JavaScript from fundamentals to advanced concepts with practical projects.",
  },
];