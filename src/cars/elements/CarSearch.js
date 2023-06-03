import {useDispatch,useSelector} from "react-redux";
import { changeSearchTerm} from "../store/CarStore"
function CarSearch() {

const  dispatch =useDispatch()

    // Get the value
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })

    const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value))
    }

    return <div>
        <h1>My Cars</h1>

        <div>
            <label>Search Car</label>
            <input
                className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Car name"
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />

        </div>
    </div>
}

export default CarSearch