import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'
import Hero from "@/Components/Hero";
import { Divide } from "lucide-react";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Team from "@/Components/Team";
import { Clients } from "@/Components/Clients";

export default function Home() {
  return (
    <div>
      <div className='bg-black text-slate-50 '>
        <Hero />
      </div>
      <div>
        <About />
        <Services />
        <Team />
        <Clients />
      </div>
    </div>
  );
}
