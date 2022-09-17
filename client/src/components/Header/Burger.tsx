import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import s from "./Header.module.scss";


interface BurgerProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const Burger:React.FC<BurgerProps> = ({isOpen, setIsOpen}) => {
    const burgerBtn = useRef<HTMLDivElement>(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const clickOutsideBurger = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const parentBurger = burgerBtn?.current?.parentElement;
            const burgerBtnStyle = getComputedStyle(burgerBtn?.current!);
            if(burgerBtnStyle.display !== "none" && !parentBurger?.contains(target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", clickOutsideBurger);
        return () => {
            document.removeEventListener("click", clickOutsideBurger);
        };
    }, [setIsOpen]);

    return (
        <div ref={burgerBtn} onClick={toggle} className={s.burger}>
            {
                isOpen ?
                    <FontAwesomeIcon className={s["burger-"]} icon={faXmark}/>
                    :
                    <FontAwesomeIcon icon={faBars}/>
            }
        </div>
    );
};

export default Burger;