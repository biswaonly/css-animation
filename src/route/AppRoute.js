import React from "react";
import { Switch, Route } from "react-router-dom";

import Box from "../components/Box/Box";
import Home from "../components/Home/Home";
import Sun from "../components/Sun/Sun";
import Moon from "../components/Moon/Moon";
import Rain from "../components/Rain/Rain";
import Holi from "../components/Holi/Holi";
import Wheel3d from "../components/Wheel3d/Wheel3d";
import CallButton from "../components/CallButton/CallButton";
import Sea from "../components/Sea/Sea";

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/one" component={Box} />
    <Route exact path="/two" component={Sun} />
    <Route exact path="/three" component={Moon} />
    <Route exact path="/four" component={Rain} />
    <Route exact path="/five" component={Holi} />
    <Route exact path="/six" component={Wheel3d} />
    <Route exact path="/seven" component={CallButton} />
    <Route exact path="/eight" component={Sea} />
  </Switch>
);

export default AppRoute;
