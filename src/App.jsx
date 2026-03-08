import { Suspense, lazy, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Loader from "./components/loader";
import Footer from "./components/Footer";

const HeroSection = lazy(() => import("./pages/HeroSection"));
const AboutSection = lazy(() => import("./pages/AboutSection"));
const ServicesSection = lazy(() => import("./pages/ServicesSection"));
const PortfolioSection = lazy(() => import("./pages/PortfolioSection"));
const ContactSection = lazy(() => import("./pages/ContactSection"));

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#101a2d",
            color: "#f4f7ff",
            border: "1px solid rgba(115, 224, 255, 0.28)",
          },
        }}
      />
      <div className="page-grid" />
      <div className="page-aurora page-aurora-one" />
      <div className="page-aurora page-aurora-two" />
      <div className="page-noise" />
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}

      {!showLoader && (
        <>
          <Navbar />
          <Suspense
            fallback={
              <div className="min-h-screen grid place-items-center text-slate-200">
                Loading sections...
              </div>
            }
          >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}
