import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import Contact from "./Contact.js"

class Client extends React.Component {
    render(){
        return(
            <Router>
                <Link to="/contact">Contact</Link>
                <Switch>
                    <Route exact path="/contact" component={Contact} />
                </Switch> 
            </Router> 
        )
    }
}

export default Client
   