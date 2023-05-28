import {useState} from "react";
import useBooksContext from "./hooks/UseBooksContext";

function BookCreate() {

    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title)
        setTitle('');
    }

    return (
        <div className="book-create">
            <h1>Add a new Book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button" type="submit">Create</button>
            </form>
        </div>
    )
}

export default BookCreate