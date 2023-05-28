import Route from "../elements/Route";
import AccordionPage from "./AccordionPage";
import DropdownPage from "./DropdownPage";
import SideBar from "../elements/SideBar";
import ButtonPage from "./ButtonPage";
import ModalPage from "./ModalPage";
import TablePage from "./TablePage";
import CounterPage from "./CounterPage";

function StartupIndex() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar/>
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>

                <Route path="/buttons">
                    <ButtonPage/>
                </Route>

                <Route path="/modal">
                    <ModalPage/>
                </Route>

                <Route path="/table">
                    <TablePage/>
                </Route>

                <Route path="/counter">
                    <CounterPage initialCount={10}/>
                </Route>

                <Route path="/">
                    <DropdownPage/>
                </Route>

            </div>
        </div>
    )
}

export default StartupIndex