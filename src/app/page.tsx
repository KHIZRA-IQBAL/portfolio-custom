import Hero from "@/components/herosection/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div style={{background:"#242020", height:"100vh",  width:"100%"}}>
        <Navbar/>
        <Hero/>
    </div>
  );
}
