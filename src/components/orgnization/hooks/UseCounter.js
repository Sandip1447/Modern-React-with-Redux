/*
* Custom Hook
* */
import {useEffect, useState} from "react";

function useCounter(initialCount) {

    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }
// step 5. return an object that contains the variables that the component
    return {
        count,
        increment
    }

}


export default useCounter