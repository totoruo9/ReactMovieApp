import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Detail from "Routes/Detail";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";
import Infomation from "Routes/Detail/information";
import Videos from "Routes/Detail/Videos";

const RootRouter = () => (
    <Router>
        <>
            <Header />
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/movie/:id/infomation" component={Infomation} />
                <Route path="/movie/:id/teaser-trailer" component={Videos} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/show/:id/infomation" component={Infomation} />
                <Route path="/show/:id/teaser-trailer" component={Videos} />

        </>
    </Router>
)

export default RootRouter;