import {useEffect, useRef, useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false)

    /**
     * We're going to use a new hook provided to us by React.
     * Remember, hooks are functions that allow us to introduce some kind of new functionality to a component.
     * The hook we're going to use in this case is called use ref.
     * Use ref is pretty simple in nature.
     * It allows a component to get a reference to a DOM element that it creates.
     * So it's going to perfectly solve what we need to do right now.
     * It's going to allow each of our different dropdown components that we might eventually display to get
     * a reference to the actual HTML element that it is displaying on the screen.
    * */
    const divEl = useRef()


    /**
     * So quick reminder first on Use effect.
     * Use Effect allows us to run little snippets of code at very specific points in time.
     * Whenever we call these effect, we're going to pass in a function to it.
     * And that function is what is going to be called.
     * We are always guaranteed that our function is going to be called the first time our component renders.
     * Then our function might be called a second, third, fourth and fifth time, possibly, depending upon
     * what the second argument to the use effect function is.
     * In our case, we want to make sure that whenever our dropdown is first rendered to the screen, we start
     * */
    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current){
                return;
            }
           if (!divEl.current.contains(event.target)){
               setIsOpen(false)
           }
        }
        document.addEventListener('click',handler,true)
        return ()=>{
            document.removeEventListener('click',handler)
        }
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false)
        //WHAT VALUE USER CLICK
        onChange(option)
       // console.log(option)
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)}
                    key={option.value}>{option.label}</div>
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>
                {value?.label || 'Select Option'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
        </div>
    )

}

export default Dropdown;