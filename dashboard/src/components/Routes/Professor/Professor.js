import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";

import StoreContext from "../../Store/Context";

const RoutesProfessor = ({ component: Component, ...rest}) =>{
    const { session } = useContext(StoreContext);
    return(
        <Route
        {...rest}
        render={() => session !== null && session.categoria === 'PROFESSOR' ? <Component {...rest} />: <Redirect to='/' />}
        ></Route>
    );
}

export default RoutesProfessor;