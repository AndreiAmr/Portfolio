import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

const Routes = () => {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Portifolio}/>
            <Route path="/ProjectDetail/:index" exact component={ProjectDetail}/>
            <Route path="/Contact" exact component={Contact}/>
        </Switch>
    )
};

export default Routes;