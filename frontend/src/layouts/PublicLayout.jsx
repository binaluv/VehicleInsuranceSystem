import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
