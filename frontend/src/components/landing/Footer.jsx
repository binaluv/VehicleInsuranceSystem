import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-sm">
                V
              </div>
              <span className="font-black text-lg text-slate-900 dark:text-white">VIMS</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Automated vehicle insurance protection, instant claims adjudication, and digital underwriting for modern drivers.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  View Insurance Plans
                </Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Insurance Plans
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/plans" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Basic Liability Coverage
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Standard Protection
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Comprehensive Gold
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Security & Compliance
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              All transactions and settlement payouts are governed by licensed statutory automotive insurance standards.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>🔒 256-Bit SSL Encrypted</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} VIMS Insurance System. All rights reserved.</p>
          <p>Protected by 256-bit SSL encryption & automated fraud validation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;