import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 function ChinaGlaze() {
     return(
     <div><p>Succeeded!</p></div>
     )
 }

  function China() {
      return(
          <Router>
              <div>
                  <p><Link to='/ChinaGlaze'>China glaze Landing Page</Link></p>
              </div>
              <div>
                  <Route path='/ChinaGlaze' exact component={ChinaGlaze} />
              </div>
          </Router>
      )
  }

  export default China;