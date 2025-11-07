import Hero from "./components/Hero";
import Features from "./components/Features";
import AuthGate from "./components/AuthGate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Hero />
      <Features />
      <AuthGate />
      <Footer />
    </div>
  );
}

export default App;
