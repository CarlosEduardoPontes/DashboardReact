import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";

import StoreContext from "../../Store/Context";

const RoutesAluno = ({ component: Component, ...rest}) =>{
    const { session } = useContext(StoreContext);
    return(
        <Route
        {...rest}
        render={() => session !== null && session.categoria === 'ALUNO' ? <Component {...rest} />: <Redirect to='/' />}
        ></Route>
    );
}

export default RoutesAluno;