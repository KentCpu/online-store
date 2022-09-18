import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import ClipLoader from "react-spinners/ClipLoader";
import s from "./GlobalLoader.module.scss";

export const GlobalLoader = () => {


    return (

        <div className={s["loader-wrapper"]}>
            <ClipLoader size={70}/>
        </div>


    );
};

