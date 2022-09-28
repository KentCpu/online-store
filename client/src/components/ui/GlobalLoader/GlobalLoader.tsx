import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import s from "./GlobalLoader.module.scss";

export const GlobalLoader = () => {

    return (
        <div className={s["loader-wrapper"]}>
            <ClipLoader size={70}/>
        </div>
    );
};

