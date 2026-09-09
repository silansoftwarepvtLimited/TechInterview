import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tutorial } from "../types";

interface TutorialCardProps {
  tutorial: Tutorial;
}

const TutorialCard = ({
  tutorial,
}: TutorialCardProps) => {
  return (
    <Link
      to={`/tutorials/${tutorial.slug}`}
      className="
        group
        block
        rounded-2xl
        border
        border-[#D7E6FA]
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#8EC5FF]
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-[#EAF4FF]
          text-[#0057D9]
          transition-all
          duration-300
          group-hover:bg-[#0057D9]
          group-hover:text-white
        "
      >
        <BookOpen size={24} />
      </div>

      {/* Category */}
      <span className="text-xs font-bold uppercase tracking-wider text-[#0057D9]">
        {tutorial.category}
      </span>

      {/* Title */}
      <h3
        className="
          mt-2
          text-lg
          font-bold
          text-[#061F63]
          transition-colors
          duration-200
          group-hover:text-[#0057D9]
        "
      >
        {tutorial.title}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
        {tutorial.description}
      </p>

      {/* Start Learning */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-2
          text-sm
          font-bold
          text-[#0057D9]
        "
      >
        <span>Start Learning</span>

        <ArrowRight
          size={17}
          className="
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
};

export default TutorialCard;