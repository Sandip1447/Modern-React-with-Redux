import BookShow from "./BookShow";
import useBooksContext from "./hooks/UseBooksContext";

function BookList() {

    // this is a custom hook we are make
    const {books} = useBooksContext();

    const renderedBooks = books.map((book, i) => {
        return <BookShow key={i} book={book}/>
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList