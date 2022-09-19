import React from 'react';
import Title from "../ui/Title/Title";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/constants/url";
import s from "./NotFound.module.scss";
import Button from "../ui/Button/Button";


const NotFound = () => {
    const navigate = useNavigate();

    const backMainPage = () => {
        navigate(HOME_ROUTE);
    }

    return (
        <section className={s.section}>
            <div className={s.container}>
                <Title>404. Page not found</Title>
                <p className={s.desc}>The address may be incorrect or the page has been moved.</p>
                <Button className={s.btn} onClick={backMainPage}>Go back to the main page</Button>
            </div>
        </section>
    );
};

export default NotFound;