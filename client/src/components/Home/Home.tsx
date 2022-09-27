import React from "react";
import s from "./Home.module.scss";
import BookList from "../Book/BookList";
import classNames from "classnames";



const Home = () => {

    return (
        <div className={classNames(s["home-container"], "container")}>
            <BookList/>
        </div>
    );
};

export default Home;