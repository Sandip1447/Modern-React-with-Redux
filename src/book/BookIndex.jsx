import {Provider} from "./context/BooksContext";
import Book from "./Book";


/**
 * useContext()
 *
 * Component given to us when
 * we created the Context
 * <BooksContext.Provider value={Any}/>
 *
 * */
function BookIndex() {
    return (
        <Provider>
            <Book/>
        </Provider>
    )
}

export default BookIndex;


/**
* Application State vs Component State
*
* Application - used by many different components
* Component - used by few Component
*
* */