import {useContext} from "react";
import BooksContext from "../context/BooksContext";

// Custom Hook
function useBooksContext() {
    return useContext(BooksContext)
}

export default useBooksContext;
