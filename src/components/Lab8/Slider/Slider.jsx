import React, { useEffect, useState, createContext, useRef } from "react";
import Slide from "./Slide";

import "./Slider.scss"
import { Controls } from "./Controls";

export const SliderContext = createContext();

const Slider = ({ slides }) => {
    const [items, setItems] = useState(slides);
    const [currentSlide, setCurrent] = useState(0);
    const slideListRef = useRef(null)

    const changeSlide = (direction = 1) => {
        let destSlide = (currentSlide + direction + items.length) % items.length

        goToSlide(destSlide)
    };

    const goToSlide = (destSlide) => {
        let shift

        (window.innerWidth <= 900) ? shift = `${- (destSlide) * 100}%` : shift = `calc(${-destSlide * 80}% + ${5 * destSlide}rem )`
        slideListRef.current.style.marginLeft = shift

        setCurrent(destSlide)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, currentSlide]);

    return (
        <div className="my-carousel glass-card mt-5">

            <SliderContext.Provider
                value={{
                    changeSlide,
                    goToSlide,
                    slidesCount: items.length,
                    slideNumber: currentSlide,
                }}>
                <div className="slide-list" ref={slideListRef}>

                    {items.map((item, index) => (
                        <Slide key={index} data={item} />
                    ))}
                </div>
                <Controls />
            </SliderContext.Provider>
        </div>
    );
}


export default Slider;