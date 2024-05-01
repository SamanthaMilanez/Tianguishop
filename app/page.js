import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Whyus from "./_components/Whyus";
import Collection from "./_components/Collection";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Whyus/>
      <Collection/>
    </div>
    
  );


}
