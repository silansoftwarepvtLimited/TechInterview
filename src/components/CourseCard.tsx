import {
  Clock,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../types";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#D7E6FA] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#8EC5FF] hover:shadow-xl">

      {/* Course Header */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[#061F63] via-[#0057D9] to-[#008CFF]">

        {/* Background Decoration */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/10" />

        {/* Course Initial */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-5xl font-black text-white shadow-lg backdrop-blur-sm">
          {course.title.charAt(0)}
        </div>

        {/* Featured */}
        {course.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0057D9] shadow-sm">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="text-xs font-bold uppercase tracking-wider text-[#0057D9]">
          {course.category}
        </span>

        {/* Title */}
        <Link to={`/courses/${course.slug}`}>
          <h3 className="mt-2 line-clamp-2 text-lg font-bold text-[#061F63] transition-colors duration-200 group-hover:text-[#0057D9]">
            {course.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {course.description}
        </p>

        {/* Course Information */}
        <div className="mt-5 grid grid-cols-3 gap-2">

          <div className="flex items-center gap-1.5 rounded-lg bg-[#F4F8FF] px-2.5 py-2 text-xs text-gray-600">
            <Clock
              size={14}
              className="shrink-0 text-[#0057D9]"
            />
            <span className="truncate">
              {course.duration}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-[#F4F8FF] px-2.5 py-2 text-xs text-gray-600">
            <BookOpen
              size={14}
              className="shrink-0 text-[#0057D9]"
            />
            <span className="truncate">
              {course.lessons}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-[#F4F8FF] px-2.5 py-2 text-xs text-gray-600">
            <Users
              size={14}
              className="shrink-0 text-[#0057D9]"
            />
            <span className="truncate">
              {course.students}
            </span>
          </div>

        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm font-bold text-[#061F63]">
              {course.rating}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            Course Rating
          </span>

        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-[#E5EEF9] pt-4">

          {/* Price */}
          <div>
            <span className="text-xl font-black text-[#061F63]">
              ₹{course.price.toLocaleString("en-IN")}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{course.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          {/* View Button */}
          <Link
            to={`/courses/${course.slug}`}
            className="rounded-xl bg-[#0057D9] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#061F63] hover:shadow-md"
          >
            View
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;