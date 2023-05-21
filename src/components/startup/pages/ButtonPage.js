import Button from "../elements/Button";
import {SlEarphonesAlt, SlUserFollow} from "react-icons/sl";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary rounded className="m-1"><SlUserFollow/>Primary Button</Button>
            </div>

            <div>
                <Button secondary className="m-1"> <SlUserFollow/>Secondary</Button>
            </div>

            <div>
                <Button success outline rounded className="m-1"><SlUserFollow/>Success</Button>
            </div>

            <div>
                <Button warning className="m-1"><SlUserFollow/>Warning</Button>
            </div>

            <div>
                <Button danger className="m-1"><SlUserFollow/>Danger</Button>
            </div>
            <div>
                <Button primary rounded className="m-1"><SlEarphonesAlt/>Help Support</Button>
            </div>
        </div>
    )
}

export default ButtonPage;
