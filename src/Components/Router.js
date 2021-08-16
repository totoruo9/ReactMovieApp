import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Detail from "../Routes/Detail";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)
    

