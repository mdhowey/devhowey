import MainHero from "./components/MainHero";
import "./App.scss";
import AboutContainer from "./components/AboutContainer";
import Cactus from "./components/Cactus";
import { ProjectContainer } from "./components/ProjectContainer";
import Resume from "./components/Resume";

function App() {
    return (
        <div className="App">
            <MainHero />
            <AboutContainer />
            <Cactus />
            <ProjectContainer />
            <Resume />
        </div>
    );
}

export default App;
