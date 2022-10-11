import s from "./SearchResult.module.scss";
import { PreviewBooks } from "../PreviewBooks/PreviewBooks";
import classNames from "classnames";


export const SearchResult = () => {
    return (
        <div className={classNames(s["home-container"], "container")}>
            <PreviewBooks />
        </div>
    );
};