import "./About.scss";

const About = () => {
    return (
        <section id="about-section" className="about-section">
            <h2 className="about-title">brief bio</h2>
            <p className="about-information">
                Originally from Perham, Minnesota, Howey grew up in a small town made famous by potato chips and dog food. Here he devloped a love for music and spent most of his young life bothering the neighbors with his <a id="drums" href="https://www.youtube.com/watch?v=nCB2uoAOpBQ" target={"blank"}>drums</a>. He studied jazz for a time in university and worked every concievable job in restaurants to put some money in his pocket while studying music. From dishwasher to cook, server to bartender, and beverage director to assitant general manager, he had had enough of restaurants. Always having a love for language, he has spent the last 5 years in Mexico City working as both an English teacher and content writer while studying Spanish. 
            </p>
            <br/>
            <p className="about-information">
                Life has been good for Howey, but he is looking for more. When the pandemic rocked the world in 2020, he realized it was time for a change and enrolled in university yet again this time to study computer science. Currently studying and having now completed a 450+ hour imersive bootcamp, Howey is building websites and web-based applications for his clients. He would love to talk to you about your current web needs and work on a solution for you. 
            </p>
        </section>
    )
}

export default About
