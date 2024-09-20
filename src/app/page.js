import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Signup from "./components/Overview/Signup";
import Explore from "./components/Explore/Explore";
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Signup/>
        <Explore/>

    </div>
  );
}
