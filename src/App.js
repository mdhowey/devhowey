import { useEffect, useState } from "react";
import MainHero from "./components/MainHero";
import "./App.scss";
import AboutContainer from "./components/AboutContainer";
import Cactus from "./components/Cactus";
import { ProjectContainer } from "./components/ProjectContainer";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <div className="App">
            <MainHero />
            <AboutContainer />
            <Cactus />
            <ProjectContainer />
            <Resume />
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )}
        </div>
    );
}

export default App;
