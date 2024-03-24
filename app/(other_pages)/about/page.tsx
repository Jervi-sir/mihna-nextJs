import { Section9 } from "@/app/components/Section9";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { ComingSoon } from "@/components/ComingSoon";

export default function About() {
  return (
    <>
      <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <ComingSoon />
      </div>
    </>
  )
}