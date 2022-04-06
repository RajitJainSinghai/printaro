import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Tshirts from './containers/Tshirts';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/tshirts'} component={Tshirts} />
            </Switch>
        </>
    );
};
export default Router;
