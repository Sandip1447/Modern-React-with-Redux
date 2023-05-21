import {useEffect} from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import useBooksContext from "./hooks/UseBooksContext";

/**
 * How to handle Forms
 * */
function Book() {

    const {fetchBooks} = useBooksContext();

    // Render the books at initial level
    useEffect(() => {
        // handle ESLint warning issue with fix bug use useCallback hook
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div>
            <BookList/>

            <BookCreate/>

        </div>
    )
}


export default Book;