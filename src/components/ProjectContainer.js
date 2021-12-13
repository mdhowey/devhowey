import Carousel from "./Carousel";
import { FinCapImgs, GotchiBuddyImgs, pikChuImgs, SeagullImgs } from "../stores/ProjectImgs";
import { ProjectData } from "../stores/ProjectData";
import "./ProjectContainer.scss";

export const ProjectContainer = () => {
    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <div id="project-container">
                <div class="project">
                    <div class="thumb"><Carousel imgs={FinCapImgs} /></div>
                    <article>
                        <a href="https://github.com/mdhowey/fincap" class="card" target={"blank"}>
                            <h3>{ProjectData[0].title}</h3>
                        </a>
                        <span>{ProjectData[0].tech}</span>
                        <p>{ProjectData[0].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={SeagullImgs} /></div>
                    <article>
                        <a href="https://github.com/mdhowey/seagull" class="card" target={"blank"}>
                            <h3>{ProjectData[1].title}</h3>
                        </a>
                        <span>{ProjectData[1].tech}</span>
                        <p>{ProjectData[1].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={pikChuImgs} /></div>
                    <article>
                        <a href="https://github.com/mdhowey/pikchu" class="card" target={"blank"}>
                            <h3>{ProjectData[2].title}</h3>
                        </a>
                        <span>{ProjectData[2].tech}</span>
                        <p>{ProjectData[2].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={GotchiBuddyImgs} /></div>
                    <article>
                        <a href="https://github.com/mdhowey/gotchi-buddy" class="card" target={"blank"}>
                            <h3>{ProjectData[3].title}</h3>
                        </a>
                        <span>{ProjectData[3].tech}</span>
                        <p>{ProjectData[3].description}</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
