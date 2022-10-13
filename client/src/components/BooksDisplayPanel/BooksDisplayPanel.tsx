import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons/faTableCells";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { memo } from 'react';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BooksViewType } from '../../types/book';
import s from "./BooksDisplayPanel.module.scss";


const BooksDisplayPanel = () => {
    const currentViewType = useTypedSelector(state => state.books?.viewType);
    const { setTableView, setRowView } = useActions();

    return (
        <div className={s["icons"]}>
            <FontAwesomeIcon
                icon={faTableCells}
                className={classNames(
                    s["icon"],
                    currentViewType === BooksViewType.TABLE_VIEW && s["icon_active"]
                )}
                onClick={setTableView} />
            <FontAwesomeIcon
                icon={faList}
                className={classNames(
                    s["icon"],
                    currentViewType === BooksViewType.ROW_VIEW && s["icon_active"]
                )}
                onClick={setRowView}
            />
        </div>
    );
};

export default memo(BooksDisplayPanel);