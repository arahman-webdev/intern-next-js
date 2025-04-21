

import './globals.css'
import Hero from "@/Components/Hero";

import About from "@/Components/About";
import Services from "@/Components/Services";
import Team from "@/Components/Team";
import { Clients } from "@/Components/Clients";
import Progressbar from '@/SharedComponents/Progressbar';


export default function Home() {




  return (
    <div>
      <Progressbar />
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
