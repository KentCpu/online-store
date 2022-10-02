import React, {useEffect, useState} from 'react';
import s from "./ScrollTop.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        document.addEventListener("scroll", handlerScroll);

        return () => {
            document.removeEventListener("scroll", handlerScroll);
        };
    }, []);


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {
                isVisible
                &&
                <div onClick={scrollUp} className={s["scroll-top"]}>
                    <FontAwesomeIcon className={s["scroll-icon"]} icon={faArrowUp}/>
                </div>
            }
        </>
    );
};

export default ScrollTop;