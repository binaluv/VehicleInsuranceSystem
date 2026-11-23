import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  Clock,
  Send,
  RefreshCw,
  CheckCircle2,
  Copy,
  Check,
  Shield,
  MessageSquare,
} from "lucide-react";

export default function ContactUs() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const subjectParam = searchParams.get("subject") || "";
    setForm((prev) => ({
      ...prev,
      subject: prev.subject || subjectParam,
    }));
  }, [searchParams]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setTicketId("TKT-" + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
      setSubmitting(false);
      toast.success("Your inquiry has been received! Our support team will reach out shortly.");
    }, 600);
  };

  const handleCopyTicket = () => {
    if (!ticketId) return;
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    toast.success("Ticket ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white py-16 sm:py-20 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            Customer Support & Claims Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6">
            We're Here When You Need Us
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about an existing policy, filing an accident claim, or exploring vehicle coverage plans? Reach out to our 24/7 dedicated underwriting team.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Contact Information Cards */}
          <div className="space-y-5">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">24/7 Roadside & Claims Hotline</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct emergency line for urgent incident reports.</p>
                <a href="tel:+251910611602" className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2 block hover:underline">
                  +2519-1061-1602
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Underwriting & Policy Support</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">General inquiries and certificate requests.</p>
                <a href="mailto:habtemariamhailu81@gmail.com" className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2 block hover:underline break-all">
                  habtemariamhailu81@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-800/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Operating Hours</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Claims Dispatch: <strong className="text-slate-900 dark:text-white">24/7 / 365 Days</strong></p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Policy Underwriting: Mon - Fri, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-blue-50/70 dark:bg-blue-950/30 p-5 rounded-3xl border border-blue-200/80 dark:border-blue-800/50 flex items-center gap-3.5">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                All claims and policy inquiries are recorded with verified digital audit timestamps for immediate response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-7 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Send Us an Inquiry</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">Our licensed insurance specialists typically respond in less than two hours.</p>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-3xl p-8 sm:p-10 text-center text-emerald-900 dark:text-emerald-100">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl text-emerald-950 dark:text-emerald-100">Inquiry Logged Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your support inquiry has been submitted and queued for our claims and underwriting team.
                </p>

                {ticketId && (
                  <div className="my-6 inline-flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Reference Ticket:
                    </span>
                    <span className="font-mono font-bold text-base text-slate-900 dark:text-white">
                      {ticketId}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyTicket}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition cursor-pointer"
                      title="Copy Reference Ticket"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setTicketId("");
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-600/20 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      disabled={submitting}
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 transition disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      disabled={submitting}
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 transition disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      disabled={submitting}
                      placeholder="+251 9XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 transition disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Department
                    </label>
                    <input
                      type="text"
                      disabled={submitting}
                      placeholder="e.g. Question regarding Comprehensive Coverage"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 transition disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    disabled={submitting}
                    rows={4}
                    placeholder="Describe how we can assist you..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 transition resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg shadow-blue-600/25 transition cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}