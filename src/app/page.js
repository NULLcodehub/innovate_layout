
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Signup from "./components/Signup/Signup";
import Explore from "./components/Explore/Explore";
import Overview from "./components/Overview/Overview";
import OverviewMain from "./components/Overview/OverviewMain";

import EndSection from "./components/EndSection/EndSection";


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Signup/>
        <Explore/>
        {/* <Overview/> */}
        <OverviewMain/>
        <EndSection/>

    </div>
  );
}
