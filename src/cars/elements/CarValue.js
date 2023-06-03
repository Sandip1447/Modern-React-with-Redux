import {useDispatch, useSelector} from "react-redux";

function CarValue() {

    const dispatch = useDispatch()

    const totalCost = useSelector(({
                                       cars: {
                                           data, searchTerm
                                       }
                                   }) => {
        return data
            .filter((car) => car.name.toLowerCase()
                .includes(searchTerm.toLowerCase()))
            .reduce((acc, car) => acc + car.cost, 0)


    })


    return <div>
        Total cost - ${totalCost}

        <div className="flex flex-row">
            <div className="basis-1/4 md:basis-1/3">01</div>
            <div className="basis-1/3 md:basis-1/3">02</div>
            <div className="basis-1/2 md:basis-1/3">03</div>
        </div>
    </div>
}

export default CarValue