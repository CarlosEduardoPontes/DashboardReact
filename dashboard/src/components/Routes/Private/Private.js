import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { Component } from "react";

import StoreContext from "../../Store/Context";

const RoutesPrivate = ({ component: Component, ...rest}) =>{
    const { session } = useContext(StoreContext);
    return(
        <Route
        {...rest}
        render={() => session ? <Component {...rest} />: <Redirect to='/login' />}
        ></Route>
    );
}

export default RoutesPrivate;