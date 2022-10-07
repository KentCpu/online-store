import {FC} from 'react';
import Book from "./PreviewBook";
import s from "./PreviewBook.module.scss";
import {getInfoPreviewBook} from "../../../utils/helpers";
import Title from "../../ui/Title/Title";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {RootState} from "../../../store";
import ScrollLoader from "../../ScrollLoader/ScrollLoader";
import useActions from "../../../hooks/useActions";
import BooksDisplayPanel from "../../BooksDisplayPanel/BooksDisplayPanel";
import classNames from "classnames";
import {BooksViewType} from "../../../types/booksView";
import ScrollTop from "../../ScrollTop/ScrollTop";


const PreviewBooks: FC = () => {
    const title = useTypedSelector((state: RootState) => state.books.title);
    const books = useTypedSelector((state: RootState) => state.books.books);
    const viewType = useTypedSelector((state: RootState) => state.booksView.viewType);
    const {loadScrollBooks} = useActions();
    const Books = books?.map(book => getInfoPreviewBook(book));
 
    const loadScrollBooksWrapper = async () => {
        await loadScrollBooks(title, Books?.length);
    }

    
    return (
        <>
            <div className={s["books-view"]}>
                <BooksDisplayPanel/>
            </div>
            {
                Books ?
                    <>  
                        <div className={
                            classNames(
                                s["book-container"],
                                viewType === BooksViewType.ROW_VIEW && s["book-container_row"])}>
                            {
                                Books.map((book, index) => {
                                    return <Book
                                        id={book.id}
                                        key={index}
                                        title={book.title}
                                        authors={book.authors}
                                        price={book.price}
                                        isAvailable={book.isAvailable}
                                        imageLink={book.imageLink}
                                        description={book.description}
                                    />
                                })
                            }
                        </div>
                        {
                            books.length > 0
                            &&
                            <div className={s["scroll-loader"]}>
                                <ScrollLoader downloadData={loadScrollBooksWrapper}/>
                            </div>
                        }
                        <ScrollTop/>
                    </>
                    :
                    <Title headingLevels={"h2"}>We didn't find anything on your request!</Title>
            }
        </>
    );
};

export default PreviewBooks;