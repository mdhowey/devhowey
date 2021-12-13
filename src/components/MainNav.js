import "./MainNav.scss";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header-inner">
                <div id="main__nav__wrapper" className="nav-wrapper">
                    <nav id="main__navigation" dataContnetField="navigation">
                        <div className="nav-item">
                            <a href="/#about-section">about</a>
                        </div>
                        <div className="nav-item">
                            <a href="/#projects-section">projects</a>
                        </div>
                        <div className="nav-item">
                            <a href="/#resume-section">resume</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
