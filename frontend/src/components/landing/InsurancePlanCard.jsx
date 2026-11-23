import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const InsurancePlanCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        popular
          ? "bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 scale-105 md:scale-108 z-10"
          : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/5 hover:border-slate-300 dark:hover:border-slate-700"
      }`}
    >
      {popular && (
        <div className="bg-blue-600 dark:bg-blue-600 py-1.5 text-center text-white text-xs font-black uppercase tracking-wider shadow-sm">
          ★ Most Popular Choice
        </div>
      )}

      <div className={`p-6 sm:p-7 flex-1 flex flex-col justify-between ${popular ? "pt-5" : ""}`}>
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {title}
            </h3>
            {popular && (
              <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                Recommended
              </span>
            )}
          </div>

          <div className="flex items-baseline mb-3">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {price}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1.5">
              /{period}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium leading-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Link to={`/get-quote?plan=${encodeURIComponent(title)}`} className="block w-full mt-4">
          <button
            className={`w-full py-3 px-4 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
              popular
                ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700"
            }`}
          >
            <span>{buttonText || "Get Started"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InsurancePlanCard;