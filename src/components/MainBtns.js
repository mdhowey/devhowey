import "./MainBtns.scss";

const MainBtns = () => {
    return (
        <div className="row">
            <div className="btn-container">
                <div className="btn-wrapper">
                    <a href="https://medium.com/@dev.howey" target={"blank"} className="main-hero-btn-primary">
                        BLOG
                    </a>
                </div>
            </div>
            <div className="btn-container">
                <div className="btn-wrapper">
                    <a href="mailto:dev.howey@gmail.com" target={"blank"} className="main-hero-btn-secondary">
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainBtns;
