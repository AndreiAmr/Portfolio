import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import ProjectDetail from "./pages/ProjectDetail";

const Routes = () => {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Portifolio}/>
            <Route path="/ProjectDetail" exact component={ProjectDetail}/>
        </Switch>
    )
};

export default Routes;