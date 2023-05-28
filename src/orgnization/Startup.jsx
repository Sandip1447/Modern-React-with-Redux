import {NavigationProvider} from "./context/NavigationContext";
import StartupIndex from "./pages/StartupIndex";

function Startup() {
    return (
        <NavigationProvider>
            <StartupIndex/>
        </NavigationProvider>
    )
}

export default Startup;
