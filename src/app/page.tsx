import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Welcom from "./components/home/Welcom";
import Portfolio from "./components/portfolio/Portfolio";
import Values from "./components/values/Values";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Welcom />
      <About />
      <Portfolio />
      <Values />
      <Contact />
    </main>
  );
}
