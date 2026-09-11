import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Now } from "@/components/sections/Now";
import { Systems } from "@/components/sections/Systems";
import { Research } from "@/components/sections/Research";
import { Worlds } from "@/components/sections/Worlds";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Now />
      <Systems />
      <Research />
      <Worlds />
      <Contact />
    </>
  );
}
