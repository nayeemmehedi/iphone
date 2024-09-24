import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <HighLights />
    </main>
  );
}
