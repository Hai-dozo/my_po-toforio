import React from 'react';
import {  
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function ClassicShow(){
    return(
        <div><p>Succeeded!</p></div>
    )
}

function Classic(){
    return(
        <Router>
            <div>
                <div>
                    <p><Link to='/ClassicShow'>Classic Style Home Page</Link></p>
                </div>
                <div>
                    <Route path='/ClassicShow' exact component={ClassicShow} />
                </div>
            </div>
        </Router>
    )
}

export default Classic;