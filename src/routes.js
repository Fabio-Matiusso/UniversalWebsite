import { BrowserRouter, Switch, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Moon from "./components/planets_destination/Moon";
import Mars from "./components/planets_destination/Mars";
import Titan from "./components/planets_destination/Titan";
import Europa from "./components/planets_destination/Europa";
import Crew from "./pages/Crew";
import DouglasHurley from "./components/crewStructure/DouglasHurley";
import Mark from "./components/crewStructure/Mark";
import Victor from "./components/crewStructure/Victor";
import Anousheh from "./components/crewStructure/Anousheh";
import Home from "./pages/Home";
import Technology from "./components/technology/Technology";

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
                <Route exact path="/crew" component={Crew} />
                <Route exact path = "/douglas" component={DouglasHurley}/>
                <Route exact path = "/mark" component={Mark}/>
                <Route exact path = "/victor" component={Victor}/>
                <Route exact path = "/anousheh" component={Anousheh}/>
                <Route exact path="/technology" component={Technology} />
            </Switch>
        </BrowserRouter>
    )
}