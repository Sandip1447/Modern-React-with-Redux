import {useDispatch, useSelector} from "react-redux";
import {addCar, changeCost, changeName} from "../store/CarStore"

import Button from "../../orgnization/elements/Button";

function CarForm() {

    // Insert or Update the value
    const dispatch = useDispatch()

    // Get the value
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    })

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCar({name, cost}))
    }

    return (

        <div>

            <h1>Add Car</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex">

                    <div>
                        <label>Car Name</label>
                        <input
                            className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Car name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />

                    </div>

                    <div>
                        <label>Car Cost</label>
                        <input
                            className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Car cost"
                            type="number"
                            value={cost || ''}
                            onChange={handleCostChange}/>
                    </div>

                    <div className="rounded-[12px]">
                        <Button>Submit</Button>
                    </div>

                </div>
            </form>

        </div>

    )
}

export default CarForm