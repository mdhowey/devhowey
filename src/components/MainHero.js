import MainBtns from "./MainBtns";
import MainNav from "./MainNav";
import MainTagline from "./MainTagline";
import './MainHero.scss';

const Hero = () => {
    return (
        <section id="main-hero-container">
            <MainNav/>
            <MainTagline />
            <MainBtns />
        </section>
    )
}

export default Hero;
