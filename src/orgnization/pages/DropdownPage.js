import Dropdown from "../elements/Dropdown";
import {useState} from "react";

function DropdownPage() {

    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ]

    return (
        <div>
            <label>Select a color</label>
            <div className="flex">
                <Dropdown options={options} value={selection} onChange={handleSelect}/>
            </div>
        </div>
    )
}

export default DropdownPage;