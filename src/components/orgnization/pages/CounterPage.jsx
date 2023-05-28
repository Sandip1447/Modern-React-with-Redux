import Button from "../elements/Button";
import {useReducer} from "react";
import Panel from "../elements/Panel";
import {produce} from "immer";

/**
 * The counter page component is working just fine, but we're going to refactor it with the use reducer
 * hook so we can better understand how this hook works.
 * Let me first give you a couple of notes around use reducer itself.
 * First, use reducer is an alternative to use state.
 * They are both hooks that are meant to produce state.
 * They are both used to change states and whenever that state changes, the component is going to automatically
 * re render.
 * So we can think of use reducer as an alternative.
 * Usually inside of a single component, we're going to use either you state or use reducer.
 * It's not super common that we're going to use both inside of one single component.
 * The big difference between these two hooks is how we, the developers, implement the state updating
 * */


const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE_COUNT = 'add-value-count';

const reducer = (state, action) => {

    /* switch (action.type) {
     case "COMPLETE":
       return state.map((todo) => {
         if (todo.id === action.id) {
           return { ...todo, complete: !todo.complete };
         } else {
           return todo;
         }
       });
     default:
       return state;
   }*/

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1
            return
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return
        case CHANGE_VALUE:
            state.valueToAdd = action.payload
            return
        case ADD_VALUE_COUNT:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return
        default:
            return
    }
}

function CounterPage({initialCount}) {

    // added immer to update state
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })
    console.log(state)

    /**
     * So whenever we call dispatch, we need to pass along some information into the reducer to tell the reducer
     * how the state should be updated.
     * We need to tell the reducer if it should update the count property or if it should update value to add
     * */
    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });

    };
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: CHANGE_VALUE,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault() // when you used form
        dispatch({
            type: ADD_VALUE_COUNT,
        })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage