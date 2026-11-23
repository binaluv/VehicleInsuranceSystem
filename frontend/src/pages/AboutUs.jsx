import { Link } from "react-router-dom";
import { Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white py-20 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            Our Mission & Commitment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Pioneering Transparent Vehicle Protection
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            VIMS Insurance combines state-of-the-art telematics with automated risk adjudication to provide fair, instant, and reliable coverage for modern drivers and commercial fleets.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-600">99.2%</div>
            <p className="text-xs md:text-sm font-semibold text-slate-600 mt-1">Claim Payout Rate</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-600">&lt; 24h</div>
            <p className="text-xs md:text-sm font-semibold text-slate-600 mt-1">Settlement Turnaround</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-600">25,000+</div>
            <p className="text-xs md:text-sm font-semibold text-slate-600 mt-1">Vehicles Insured</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-600">4.9 / 5</div>
            <p className="text-xs md:text-sm font-semibold text-slate-600 mt-1">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Built on Integrity & Speed</h2>
          <p className="text-sm text-slate-600 mt-2">Why thousands of vehicle owners trust VIMS for peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Hidden Conditions</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every policy document, deductible schedule, and settlement calculation is explained clearly without obscure legal jargon.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Adjudication</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our instant settlement dispatch tools allow repair authorizations to be approved directly with registered mechanics without delay.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Human Claims Counsel</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When an accident occurs, you are immediately assigned a dedicated claims specialist to guide you through recovery and repair.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-blue-600 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20">
          <div>
            <h3 className="text-2xl font-black">Experience the VIMS Difference</h3>
            <p className="text-blue-100 text-sm mt-1">Sign up today and get your vehicle covered in under five minutes.</p>
          </div>
          <Link
            to="/get-quote"
            className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-md shrink-0"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
