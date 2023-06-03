import Button from "../../orgnization/elements/Button";
import {useDispatch, useSelector} from "react-redux";
import {removeCar} from "../store/CarStore"

function CarList() {

    const dispatch = useDispatch()

    const {cars, name} = useSelector(({
                                          form,
                                          cars: {
                                              data, searchTerm
                                          }
                                      }) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))

        return {
            cars: filteredCars,
            name: form.name
        }
    })

    const handleCarRemove = (car) => {
        console.log('car', car)
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <li key={car.id} >
                <p className={`${bold && 'font-medium'}`}>{car.name} - ${car.cost} {bold}</p>
                <Button
                    onClick={() => handleCarRemove(car)}
                    danger
                >
                    X
                </Button>
            </li>
        );
    });

    return <div>{renderedCars}</div>
}

export default CarList