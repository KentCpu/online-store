import React, {FC, SyntheticEvent, useState} from 'react';
import TextField from "../ui/TextField/TextField";
import s from "./SearchPanel.module.scss";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface SearchPanel {
    label?: string;
    placeholder?: string;
    onSubmit: (e: SyntheticEvent, name: string) => void;
}

const SearchPanel: FC<SearchPanel> = ({onSubmit}) => {
    const [value, setValue] = useState<string>("");

    const iconSearch = (
        <span  onClick={(e) => onSubmit(e, value)} className={s["icon-search"]}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </span>
    );

    return (
        <form onSubmit={(e) => onSubmit(e, value)} className={s["search-panel"]}>
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

export default SearchPanel;