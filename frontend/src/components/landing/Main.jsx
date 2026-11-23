import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Car,
  FileCheck,
  Headset,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import HeroSection from "./HeroSection";
import TestimonialCard from "./TestimonialCard";
import InsurancePlanCard from "./InsurancePlanCard";

const Main = () => {
  return (
    <>
      <main className="flex-1 bg-white dark:bg-slate-950 transition-colors">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950/70 border-y border-slate-200/60 dark:border-slate-800/80 transition-colors" id="features">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/50">
                Core Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                Why Choose VIMS
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                We provide intelligent, high-speed vehicle protection with automated claims adjudication and transparent coverage.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Shield}
                title="Comprehensive Coverage"
                description="Get complete protection for collision, weather, theft, and third-party liabilities with zero hidden deductions."
              />
              <FeatureCard
                icon={FileCheck}
                title="Easy Claims Process"
                description="File and track claims in minutes with real-time adjudication, live document verification, and digital payouts."
              />
              <FeatureCard
                icon={Car}
                title="Multi-Vehicle Fleet Discounts"
                description="Save up to 15% when insuring multiple vehicles under one unified customer account."
              />
              <FeatureCard
                icon={Headset}
                title="24/7 Dedicated Support"
                description="Our emergency roadside and claims team is always on standby to assist you at every mile."
              />
              <FeatureCard
                icon={CheckCircle}
                title="Fast Instant Approval"
                description="Calculate an accurate quote and download your verified state insurance card within 60 seconds."
              />
              <FeatureCard
                icon={Shield}
                title="Tailored Coverage Tiers"
                description="Select the exact deductible, liability ceiling, and optional add-ons that fit your driving profile."
              />
            </div>
          </div>
        </section>

        {/* Insurance Plans */}
        <section className="py-20 bg-white dark:bg-slate-950 transition-colors" id="plans">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/50">
                Pricing & Packages
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                Our Insurance Plans
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-base md:text-lg">
                Choose the right level of coverage tailored for your vehicle and daily drive.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 items-stretch max-w-6xl mx-auto">
              <InsurancePlanCard
                title="Basic"
                price="$59"
                period="monthly"
                description="Essential third-party protection for budget-conscious drivers."
                features={[
                  "Third-party bodily injury liability",
                  "Property damage protection ($25,000)",
                  "Basic emergency roadside jumpstart",
                  "Instant digital proof of insurance",
                ]}
                buttonText="Get Started"
              />
              <InsurancePlanCard
                title="Standard"
                price="$89"
                period="monthly"
                popular={true}
                description="Our most popular comprehensive choice for everyday personal vehicles."
                features={[
                  "Everything in Basic included",
                  "Full collision damage ($500 deductible)",
                  "Theft, fire & weather hazard protection",
                  "Enhanced roadside towing up to 50 miles",
                  "Fast-track 24-hour claim adjudication",
                ]}
                buttonText="Get Started"
              />
              <InsurancePlanCard
                title="Comprehensive"
                price="$139"
                period="monthly"
                description="Ultimate bumper-to-bumper protection for luxury and new vehicles."
                features={[
                  "Everything in Standard included",
                  "Zero-deductible glass & windshield repair",
                  "Rental vehicle reimbursement ($50/day)",
                  "New vehicle replacement guarantee",
                  "24/7 VIP priority claims concierge",
                ]}
                buttonText="Get Started"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/plans"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800/60 px-6 py-3 rounded-xl transition shadow-sm"
              >
                <span>View Full Plan Comparison, Deductibles & FAQs</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors" id="testimonials">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/50">
                Verified Feedback
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                What Our Customers Say
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-base md:text-lg">
                Trusted by thousands of drivers across Ethiopia and internationally.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              <TestimonialCard
                name="Sarah Johnson"
                title="Toyota RAV4 Owner"
                testimonial="Filing a claim was incredibly simple. Their online system made the entire approval smooth, transparent, and settled in 48 hours."
                rating={5}
              />
              <TestimonialCard
                name="Michael Chen"
                title="Honda CR-V Owner"
                testimonial="The customer service at VIMS is exceptional. They helped me find the perfect coverage tier and bundle discounts for my family cars."
                rating={5}
              />
              <TestimonialCard
                name="Habtemariam Tadesse"
                title="Ford F-150 Fleet Owner"
                testimonial="After comparing multiple insurance systems, VIMS offered the best transparent rates and immediate automated digital certificate downloads."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Call to Action & Quick Quote */}
        <section className="py-20 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors" id="cta">
          <div className="container px-4 mx-auto md:px-6">
            <div className="md:flex md:items-center md:justify-between gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <span className="inline-block px-3.5 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  Fast & Transparent Protection
                </span>
                <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
                  Ready to safeguard your vehicle?
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
                  Get a personalized, transparent insurance estimate in minutes. No hidden fees, instant policy documentation, and dedicated 24/7 claims support.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                    ✓ Instant Digital Policy
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold">
                    ✓ 98.4% Claim Approval
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold">
                    ✓ SSL 256-Bit Encrypted
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-5/12">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors">
                  <div className="mb-5">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                      Online Calculator
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Get a Quick Quote
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Enter your details below to calculate your estimated annual premium:
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const model = form.model?.value || "";
                      const email = form.email?.value || "";
                      window.location.href = `/get-quote?model=${encodeURIComponent(model)}&email=${encodeURIComponent(email)}`;
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Vehicle Make & Model
                      </label>
                      <input
                        name="model"
                        type="text"
                        placeholder="e.g. Toyota RAV4, Ford F-150"
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition cursor-pointer"
                    >
                      <span>Calculate Instant Quote</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                      🔒 No credit card required. Free, no-obligation estimate.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;