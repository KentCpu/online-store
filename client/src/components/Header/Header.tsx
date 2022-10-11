import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksActionTypes } from "../../types/book";
import { BOOKS_ROUTE } from "../../utils/constants/url";
import SearchPanel from "../SearchPanel/SearchPanel";
import { Logo } from "../ui/Logo/Logo";
import s from "./Header.module.scss";
import Menu from "./Menu";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const searchBooks = (title: string) => {
        if (location.pathname !== BOOKS_ROUTE) {
            dispatch({ type: BooksActionTypes.SET_BOOKS, payload: [] });
        }
        navigate({ pathname: BOOKS_ROUTE, search: `?title=${title}` });
    }


    return (
        <header className={s["header"]}>
            <div className="container">
                <div className={s["header__wrapper"]}>
                    <Logo />
                    <div className={s["search"]}>
                        <SearchPanel onSubmit={searchBooks} />
                    </div>
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;