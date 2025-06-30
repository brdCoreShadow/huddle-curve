import About from "@/components/About/About";
import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero/Hero";
import Statistics from "@/components/Statistics/Statistics";
const SharedLayout = () => {
    return ( 
        <div>
            <Hero/>
            <Statistics/>
            <About/>
            <GetStarted/>
        </div>
     );
}
 
export default SharedLayout;