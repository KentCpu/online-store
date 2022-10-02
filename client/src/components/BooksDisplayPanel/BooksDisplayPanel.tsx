import React, {memo} from 'react';
import {faList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTableCells} from "@fortawesome/free-solid-svg-icons/faTableCells";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RootState} from "../../store";
import s from "./BooksDisplayPanel.module.scss";
import useActions from "../../hooks/useActions";
import classNames from "classnames";
import {BooksViewType} from "../../types/booksView";


const BooksDisplayPanel = () => {
    const currentViewType = useTypedSelector((state: RootState) => state.booksView.viewType);
    const {setTableView, setRowView} = useActions();

    return (
        <div className={s["icons"]}>
            <FontAwesomeIcon
                icon={faTableCells}
                className={classNames(
                    s["icon"],
                    currentViewType == BooksViewType.TABLE_VIEW && s["icon_active"]
                )}
                onClick={setTableView}  />
            <FontAwesomeIcon
                icon={faList}
                className={classNames(
                    s["icon"],
                    currentViewType == BooksViewType.ROW_VIEW && s["icon_active"]
                )}
                onClick={setRowView}
            />
        </div>
    );
};

export default memo(BooksDisplayPanel);