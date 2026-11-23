import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, title, testimonial, rating }) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
    : "CU";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/5 p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-200 dark:text-slate-700"
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1.5">
            {rating}.0
          </span>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
          "{testimonial}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center font-black text-xs shadow-xs">
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
            {name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;