import { Routes, Route } from "react-router-dom";

import MainLayout from "../assets/layouts/MainLayout";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Tutorials from "../pages/Tutorials";
import TutorialDetails from "../pages/TutorialDetails";
import Practice from "../pages/Practice";
import About from "../pages/About";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        {/* <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:slug"
          element={<CourseDetails />}
        />

        <Route
          path="/tutorials"
          element={<Tutorials />}
        />

        <Route
          path="/tutorials/:slug"
          element={<TutorialDetails />}
        />

        <Route
          path="/practice"
          element={<Practice />}
        /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;