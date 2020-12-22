import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Popular from '../../pages/Popular';
import Battle from '../../pages/Battle';

// 内容部分
class Content extends React.Component{
    render(){
        
        return(
          <div>
            <Switch>
              <Route exact path="/">
                <Redirect from="/" to="/Popular" />
              </Route>
              <Route path="/Popular">
                <Popular />
              </Route>
              <Route path="/Battle">
                <Battle />
              </Route>
            </Switch>
          </div>
        )
    }
}

export default Content;
