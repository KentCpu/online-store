import React, {FC, memo, useState} from 'react';
import TextField from "../ui/TextField/TextField";
import s from "./SearchPanel.module.scss";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface SearchPanel {
    label?: string;
    placeholder?: string;
    onSubmit: any;
}

const SearchPanel: FC<SearchPanel> = ({onSubmit}) => {
    const [value, setValue] = useState<string>("");


    const iconSearch = (
        <span onClick={() => onSubmit(value)} className={s["icon-search"]}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </span>
    );

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(value);
        }} className={s["search-panel"]}>
            <TextField
                value={value}
                className={s["search-panel__input"]}
                placeholder="Search"
                onChange={(e) => setValue(e.target.value)}
                endIcon={iconSearch}
            />
        </form>
    );
};

export default memo(SearchPanel);