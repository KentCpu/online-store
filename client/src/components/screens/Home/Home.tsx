import React from "react";
import s from "./Home.module.scss";
import PreviewBooks from "../PreviewBooks/PreviewBooks";
import classNames from "classnames";



const Home = () => {

    return (
        <div className={classNames(s["home-container"], "container")}>
            <PreviewBooks/>
        </div>
    );
};

export default Home;