import React, {useState} from "react";

function SearchBar({onSubmit}) {

    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div>
            <form>
                <input value={term} onChange={handleChange}/>
                <button onClick={handleFormSubmit}>
                    Make an Request
                </button>
            </form>

        </div>
    )
}

export default SearchBar;