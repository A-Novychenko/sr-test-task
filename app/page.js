import {About} from "@/components/sections/About/About";
import {Cases} from "@/components/sections/Cases/Cases";
import {Contact} from "@/components/sections/Contact/Contact";
import {Electricity} from "@/components/sections/Electricity/Electricity";
import {FAQ} from "@/components/sections/FAQ/FAQ";
import {Main} from "@/components/sections/Main/Main";

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
    </main>
  );
}
