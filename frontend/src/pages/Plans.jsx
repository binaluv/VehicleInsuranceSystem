import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  ShieldCheck,
  Check,
  Minus,
  Sparkles,
  Car,
  Wrench,
  ArrowRight,
  HelpCircle,
  Award,
  ChevronDown,
} from "lucide-react";

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "annual"
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      id: "basic",
      name: "Basic Liability",
      tierParam: "Basic",
      tagline: "Essential Protection",
      popular: false,
      description:
        "Meets state legal requirements with dependable third-party coverage and essential emergency assistance.",
      priceMonthly: 59,
      priceAnnualPerMonth: 50,
      annualTotal: 600,
      features: [
        { label: "Third-party bodily injury liability ($50,000 / $100,000)", included: true },
        { label: "Third-party property damage ($25,000)", included: true },
        { label: "24/7 Basic roadside assistance (jumpstart, lockout)", included: true },
        { label: "Instant digital proof of insurance card", included: true },
        { label: "Standard claims turnaround (3-5 business days)", included: true },
        { label: "Collision & vehicle damage repair", included: false },
        { label: "Theft, storm, fire & vandalism protection", included: false },
        { label: "Zero-deductible windshield & glass repair", included: false },
        { label: "Rental vehicle reimbursement", included: false },
      ],
      buttonLabel: "Select Basic Plan",
      cardBorder: "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700",
      badgeColor: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    },
    {
      id: "standard",
      name: "Standard Protection",
      tierParam: "Standard",
      tagline: "Most Popular & Balanced",
      popular: true,
      description:
        "Our most chosen plan for daily drivers. Covers vehicle repair, theft, and accidental collision damage.",
      priceMonthly: 89,
      priceAnnualPerMonth: 75,
      annualTotal: 900,
      features: [
        { label: "Everything in Basic Plan included", included: true },
        { label: "Full Collision coverage ($500 standard deductible)", included: true },
        { label: "Vehicle theft, fire, hail & storm protection", included: true },
        { label: "Uninsured & underinsured motorist coverage ($100,000)", included: true },
        { label: "Enhanced roadside towing up to 50 miles", included: true },
        { label: "Fast-track claims processing (24-48 hours)", included: true },
        { label: "Personal accident injury protection (PIP)", included: true },
        { label: "Zero-deductible windshield & glass repair", included: false },
        { label: "Rental vehicle reimbursement", included: false },
      ],
      buttonLabel: "Select Standard Plan",
      cardBorder: "border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20",
      badgeColor: "bg-blue-600 text-white",
    },
    {
      id: "comprehensive",
      name: "Comprehensive Gold",
      tierParam: "Comprehensive",
      tagline: "Maximum Coverage",
      popular: false,
      description:
        "Premium bumper-to-bumper protection with rental car replacement, zero glass deductibles, and VIP claims handling.",
      priceMonthly: 139,
      priceAnnualPerMonth: 118,
      annualTotal: 1416,
      features: [
        { label: "Everything in Standard Plan included", included: true },
        { label: "Zero-deductible windshield & glass repair", included: true },
        { label: "Rental vehicle reimbursement ($50/day up to 30 days)", included: true },
        { label: "New vehicle replacement guarantee (up to 2 model years)", included: true },
        { label: "Flood, severe weather, animal collision & riot", included: true },
        { label: "VIP 24/7 priority claims adjuster with same-day approvals", included: true },
        { label: "Unlimited distance towing & emergency assistance", included: true },
        { label: "Personal belongings & pet travel coverage ($1,000)", included: true },
        { label: "OEM parts replacement guarantee", included: true },
      ],
      buttonLabel: "Select Comprehensive",
      cardBorder: "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700",
      badgeColor: "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60",
    },
  ];

  const comparisonRows = [
    { feature: "Bodily Injury Liability", basic: "$50k / $100k", standard: "$100k / $300k", comprehensive: "$250k / $500k" },
    { feature: "Property Damage Liability", basic: "$25,000", standard: "$50,000", comprehensive: "$100,000" },
    { feature: "Collision Damage Coverage", basic: false, standard: "Yes ($500 Ded)", comprehensive: "Yes ($250 Ded)" },
    { feature: "Theft, Fire & Weather Protection", basic: false, standard: "Yes", comprehensive: "Yes" },
    { feature: "Uninsured Motorist Protection", basic: false, standard: "Yes ($100k)", comprehensive: "Yes ($250k)" },
    { feature: "Roadside Assistance & Towing", basic: "10 Miles", standard: "50 Miles", comprehensive: "Unlimited" },
    { feature: "Windshield & Glass Replacement", basic: false, standard: false, comprehensive: "Zero Deductible" },
    { feature: "Rental Car Reimbursement", basic: false, standard: false, comprehensive: "$50 / day (30 days)" },
    { feature: "New Car Replacement Guarantee", basic: false, standard: false, comprehensive: "Yes (2 Years)" },
    { feature: "Digital Proof of Insurance", basic: "Instant", standard: "Instant", comprehensive: "Instant" },
    { feature: "Claims Adjudication SLA", basic: "3-5 Days", standard: "24-48 Hours", comprehensive: "Same Day VIP" },
  ];

  const faqs = [
    {
      q: "Can I switch or upgrade my plan later?",
      a: "Yes! You can upgrade your coverage level at any time from your customer dashboard with zero penalty fees. Rate adjustments are prorated instantly.",
    },
    {
      q: "When does my coverage become active?",
      a: "Coverage is active immediately upon purchase and verification. You receive your digital insurance verification card and certificate within seconds.",
    },
    {
      q: "Can I customize my deductible amount?",
      a: "Yes. When calculating your quote, you can customize your deductible from $250 up to $1,000 to lower your monthly premium.",
    },
    {
      q: "How do I file a claim if an accident occurs?",
      a: "You can file a claim 24/7 directly through your online customer dashboard, upload incident photos, track review status live, and communicate with your adjuster.",
    },
    {
      q: "Are multiple vehicles eligible for bundle discounts?",
      a: "Yes! Adding two or more vehicles under your account automatically qualifies you for our 15% Multi-Vehicle Fleet Discount.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-indigo-50/40 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Official VIMS Coverage Tiers</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto">
            Vehicle Insurance Plans Built for Every Driver
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From essential legal liability to complete bumper-to-bumper comprehensive protection,
            choose the plan that fits your vehicle and lifestyle.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-slate-200/90 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-300 dark:border-slate-700/80 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan Cards Grid */}
      <section className="py-12 md:py-16 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnualPerMonth;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl bg-white dark:bg-slate-900 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 border shadow-sm dark:shadow-none ${plan.cardBorder}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-blue-600/30 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${plan.badgeColor}`}>
                        {plan.tagline}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                          / month
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        {billingCycle === "annual"
                          ? `Billed annually at $${plan.annualTotal}/year`
                          : "Billed monthly. Cancel or adjust anytime."}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs">
                          {feat.included ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                              <Minus className="w-2.5 h-2.5 stroke-[2]" />
                            </div>
                          )}
                          <span
                            className={
                              feat.included
                                ? "text-slate-700 dark:text-slate-200 font-medium"
                                : "text-slate-400 dark:text-slate-500 line-through"
                            }
                          >
                            {feat.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={`/get-quote?plan=${encodeURIComponent(plan.tierParam)}`}
                      className="block w-full"
                    >
                      <button
                        className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                          plan.popular
                            ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg shadow-blue-600/25"
                            : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700"
                        }`}
                      >
                        <span>{plan.buttonLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Detailed Plan Feature Comparison
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Side-by-side breakdown of limits, deductibles, and benefits across all three coverage tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                  <th className="py-4 px-6 font-bold">Coverage Benefit</th>
                  <th className="py-4 px-6 font-bold text-center">Basic</th>
                  <th className="py-4 px-6 font-bold text-center bg-blue-600 text-white">
                    Standard (Popular)
                  </th>
                  <th className="py-4 px-6 font-bold text-center">Comprehensive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-white dark:bg-slate-900"
                        : "bg-slate-50/70 dark:bg-slate-900/50"
                    }
                  >
                    <td className="py-3.5 px-6 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{row.feature}</span>
                    </td>
                    <td className="py-3.5 px-6 text-center text-slate-600 dark:text-slate-300 font-medium">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-center text-blue-900 dark:text-blue-300 font-bold bg-blue-50/60 dark:bg-blue-950/30">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.standard
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-center text-slate-700 dark:text-slate-300 font-medium">
                      {typeof row.comprehensive === "boolean" ? (
                        row.comprehensive ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.comprehensive
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plan Advisory Help Cards */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Which Plan Fits Your Situation?
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Recommended coverage profiles based on your vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Older or High-Mileage Vehicles
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  If your vehicle is over 10 years old and fully paid off, the Basic Plan gives you legal compliance and reliable roadside support without paying for costly collision repairs.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Best match:</span>
                <span className="text-blue-600 dark:text-blue-400">Basic Liability ($59/mo)</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-blue-200 dark:border-blue-900/60 ring-1 ring-blue-500/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Daily Commuters & Financed Cars
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Lenders require collision and theft protection. The Standard Plan meets all bank requirements and protects your investment against accidents and unexpected road hazards.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Best match:</span>
                <span className="text-blue-600 dark:text-blue-400">Standard Protection ($89/mo)</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  New Cars, Leased & Luxury Models
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  New and premium vehicles require full protection including glass replacement, new vehicle replacement value, and replacement rental cars while in repair.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Best match:</span>
                <span className="text-blue-600 dark:text-blue-400">Comprehensive ($139/mo)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Insurance Plan FAQs
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Everything you need to know about our coverage
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-slate-700 transition bg-slate-50/50 dark:bg-slate-900/60"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm text-slate-900 dark:text-white cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white py-16 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Ready to Protect Your Vehicle Today?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-xl mx-auto leading-relaxed">
            Get an instant custom quote in less than 2 minutes and drive with complete confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/get-quote">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md shadow-blue-600/20 transition cursor-pointer">
                Get an Instant Quote
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition cursor-pointer">
                Talk to an Advisor
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}