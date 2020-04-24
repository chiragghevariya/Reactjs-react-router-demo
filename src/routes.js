import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./page/Home";
import PageNotFound from "./page/PageNotFound";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";

const createRoutes = () => (
    
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route component={PageNotFound} />
        </Switch>
    
    
);

export default createRoutes;
