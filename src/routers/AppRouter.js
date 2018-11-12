import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from '../pages/App/index';
import Error404 from '../pages/Error404/index';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route component={Error404} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
    );
}
 
export default AppRouter;
