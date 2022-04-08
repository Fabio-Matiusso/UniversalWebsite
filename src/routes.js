import { BrowserRouter, Switch, Route } from "react-router-dom";
import Destination from "./pages/Destination";

import Home from "./pages/Home";

export default function Routerr() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/destination" component={Destination} />
                {/* <Route exact path="/technology" component={Tecnology} /> */}
                {/* <Route exact path="/crew" component={Crew} /> */}
            </Switch>
        </BrowserRouter>
    )
}