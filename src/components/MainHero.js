import MainBtns from "./MainBtns";
import MainNav from "./MainNav";
import MainTagline from "./MainTagline";
import './MainHero.scss';

const Hero = () => {
    return (
        <div id="main-hero-container">
            <MainNav />
            <MainTagline />
            <MainBtns />
        </div>
    )
}

export default Hero;
