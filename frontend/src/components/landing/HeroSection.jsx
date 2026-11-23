import React from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors">
      <div className="container px-4 py-16 md:py-24 mx-auto md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-cyan-900 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/60 rounded-full shadow-xs">
              <Shield className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Trusted by 10,000+ drivers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Protect your vehicle with confidence
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Comprehensive insurance solutions designed to keep you covered on
              every journey. Calculate your instant quote in minutes.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/get-quote">
                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-orange-500/25 transition cursor-pointer flex items-center gap-2">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/plans">
                <button className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold px-6 py-3 rounded-xl transition cursor-pointer">
                  View Plans
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs"
                  >
                    {["JD", "SM", "RK", "AL"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 dark:text-white font-bold">4.9/5</strong>
                <span className="text-slate-500 dark:text-slate-400"> based on 2,000+ reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
                alt="Car Insurance"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 dark:border-slate-700/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 bg-cyan-600 dark:bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      Premium Coverage
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Full protection for your vehicle with comprehensive coverage options
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background glows */}
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;