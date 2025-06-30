import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Statistics from "@/components/Statistics/Statistics";
const SharedLayout = () => {
    return ( 
        <div>
            <Hero/>
            <Statistics/>
            <About/>
        </div>
     );
}
 
export default SharedLayout;