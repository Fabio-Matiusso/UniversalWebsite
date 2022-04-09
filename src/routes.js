import { BrowserRouter, Switch, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Moon from "./components/planets_destination/Moon";
import Mars from "./components/planets_destination/Mars";
import Titan from "./components/planets_destination/Titan";
import Europa from "./components/planets_destination/Europa";

import Home from "./pages/Home";

export default function Routerr() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/destination" component={Destination} />
                <Route exact path = "/moon" component={Moon}/>
                <Route exact path = "/europa" component={Europa}/>
                <Route exact path = "/mars" component={Mars}/>
                <Route exact path = "/titan" component={Titan}/>
                {/* <Route exact path="/technology" component={Tecnology} /> */}
                {/* <Route exact path="/crew" component={Crew} /> */}
            </Switch>
        </BrowserRouter>
    )
}