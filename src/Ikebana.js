import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function IkebanaShow(){
    return(
        <div><p>Successed!</p></div>
    )
}

function Ikebana(){
    return(
        <Router>
            <div>
                <div>
                    <p><Link to='IkebanaShow'>Ikebana Musium
Landing Page</Link></p>
                </div>
                <div>
                    <Route path='/IkebanaShow' exact component={IkebanaShow} />
                </div>
            </div>
        </Router>
    )
}

export default Ikebana;