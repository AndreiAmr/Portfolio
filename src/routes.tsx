import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";

const Routes = () => {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Portifolio}/>
        </Switch>
    )
};

export default Routes;