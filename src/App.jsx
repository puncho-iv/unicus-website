import { About } from "./components/pages/about";
import { Contact } from "./components/pages/contact";
import { Hero } from "./components/pages/hero";
import { Services } from "./components/pages/services";
import { Solutions } from "./components/pages/solutions";
import { TrustStrip } from "./components/pages/trust-strip";


export default function App() {
  return (
    <main className="min-h-screen bg-[#014751] font-sans text-white antialiased">
      <div className="px-2 pt-2 sm:px-4 sm:pt-4">
      <Hero />
      </div>
      <TrustStrip />
      <About />
      <Services />
      <Solutions />
      <Contact />
    </main>
  );
}
