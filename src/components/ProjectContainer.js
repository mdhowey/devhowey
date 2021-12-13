import Carousel from "./Carousel";
import { FinCapImgs, GotchiBuddyImgs, pikChuImgs } from "../stores/ProjectImgs";
import { ProjectData } from "../stores/ProjectData";
import "./ProjectContainer.scss";

export const ProjectContainer = () => {
    return (
        <div id="project-container">
            <h2>Projects</h2>
            <div class="project">
                <div class="thumb"><Carousel imgs={FinCapImgs} /></div>
                <article>
                    <a href="https://github.com/mdhowey" class="card" target={"blank"}>
                        <h3>{ProjectData[0].title}</h3>
                    </a>
                    <p>{ProjectData[0].description}</p>
                    <span>{ProjectData[0].tech}</span>
                </article>
            </div>
            <div class="project">
                <div class="thumb"><Carousel imgs={GotchiBuddyImgs}/></div>
                <article>
                    <a href="https://github.com/mdhowey" class="card" target={"blank"}>
                        <h3>{ProjectData[1].title}</h3>
                    </a>
                    <p>{ProjectData[1].description}</p>
                    <span>{ProjectData[1].tech}</span>
                </article>
            </div>
            <div class="project">
                <div class="thumb"><Carousel imgs={pikChuImgs}/></div>
                <article>
                    <a href="https://github.com/mdhowey" class="card" target={"blank"}>
                        <h3>{ProjectData[2].title}</h3>
                    </a>
                    <p>{ProjectData[2].description}</p>
                    <span>{ProjectData[2].tech}</span>
                </article>
            </div>
            <div class="project">
                <div class="thumb"><Carousel imgs={FinCapImgs}/></div>
                <article>
                    <a href="https://github.com/mdhowey" class="card" target={"blank"}>
                        <h3>{ProjectData[3].title}</h3>
                    </a>
                    <p>{ProjectData[3].description}</p>
                    <span>{ProjectData[3].tech}</span>
                </article>
            </div>
        </div>
    )
}
