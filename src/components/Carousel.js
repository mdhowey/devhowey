import { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ imgs }) => {

    const [current, setCurrent] = useState(0);
    const length = imgs.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section aria-label="project-photos">
            <div className="carousel">
                <button className="carousel-btn prev" onClick={prev}>&#8592;</button>
                <button className="carousel-btn next" onClick={next}>&#8594;</button>
                {imgs.map((img, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={img.src} alt={img.alt} className='image' />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Carousel
