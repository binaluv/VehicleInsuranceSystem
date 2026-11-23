import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Main from "./components/landing/Main";
import Plans from "./pages/Plans";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages with Navigation, Hero, Plans and Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        {/* Redirect any other route back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
