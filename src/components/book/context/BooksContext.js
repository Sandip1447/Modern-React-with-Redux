import {createContext, useCallback, useState} from "react";
import axios from "axios";
import {v4 as uuid} from "uuid";

const BooksContext = createContext();

/**
 * Custom Provider Component that we make.
 * Tell the Provider what data to share
 * */
function Provider({children}) {

    const [books, setBooks] = useState([]);

    // Object we want to share with all our components

    /**
     * If second argument is an empty array,
     * useCallback gives you back the original
     * fetchBooks from first render
     * */
    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data)
    },[]);

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updateBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updateBooks)
    }

    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }
            return book;
        })
        setBooks(updateBooks)
    }

    const createBook = async (title) => {

        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)

        const response = await axios.post("http://localhost:3001/books", {
            id: small_id,
            title: title
        })

        const updateBooks = [
            response.data
            , ...books
        ]
        console.log('createBook:', updateBooks)
        setBooks(updateBooks)
    }

    /**
     *
     * @param valueToShare - Object we want to share with all our components
     *
     * */
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;
