import React from "react";
import s from "./Home.module.scss";
import PreviewBookList from "../PreviewBook/PreviewBookList";
import classNames from "classnames";



const Home = () => {

    return (
        <div className={classNames(s["home-container"], "container")}>
            <PreviewBookList/>
        </div>
    );
};

export default Home;