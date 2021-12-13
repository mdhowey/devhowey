import Carousel from "./Carousel";
import { FinCapImgs, GotchiBuddyImgs, pikChuImgs, WayfarerImgs } from "../stores/ProjectImgs";
import { ProjectData } from "../stores/ProjectData";
import { FaGithubSquare } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';
import "./ProjectContainer.scss";

export const ProjectContainer = () => {
    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <div id="project-container">
                <div class="project">
                    <div class="thumb"><Carousel imgs={FinCapImgs} /></div>
                    <article>
                        <h3>{ProjectData[0].title}</h3>
                        <div className="icon-container">
                            {/* <a className="isDisabled" href="https://mdhowey.github.io/fincap/" target={"blank"}><FaGithubSquare /></a> */}
                            <a href="https://github.com/mdhowey/fincap" target={"blank"}><FaGithubSquare /></a>
                        </div>
                        <span>{ProjectData[0].tech}</span>
                        <p>{ProjectData[0].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={WayfarerImgs} /></div>
                    <article>
                        <h3>{ProjectData[1].title}</h3>
                        <div className="icon-container">
                            <a href="https://wayfarer-team-1.herokuapp.com/" target={"blank"}><GrHeroku /></a>
                            <a href="https://github.com/mdhowey/wayfarer" target={"blank"}><FaGithubSquare /></a>
                        </div>
                        <span>{ProjectData[1].tech}</span>
                        <p>{ProjectData[1].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={pikChuImgs} /></div>
                    <article>
                        <h3>{ProjectData[2].title}</h3>
                        <div className="icon-container">
                            {/* <a className="isDisabled" href="https://mdhowey.github.io/pikchu/" target={"blank"}><FaGithubSquare /></a> */}
                            <a href="https://github.com/mdhowey/pikchu" target={"blank"}><FaGithubSquare /></a>
                        </div>
                        <span>{ProjectData[2].tech}</span>
                        <p>{ProjectData[2].description}</p>
                    </article>
                </div>
                <div class="project">
                    <div class="thumb"><Carousel imgs={GotchiBuddyImgs} /></div>
                    <article>
                        <h3>{ProjectData[3].title}</h3>
                        <div className="icon-container">
                            <a href="https://mdhowey.github.io/gotchi-buddy/" target={"blank"}><FiGithub /></a>
                            <a href="https://github.com/mdhowey/gotchi-buddy" target={"blank"}><FaGithubSquare /></a>
                        </div>
                        <span>{ProjectData[3].tech}</span>
                        <p>{ProjectData[3].description}</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
