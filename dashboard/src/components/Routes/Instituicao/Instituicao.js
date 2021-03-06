import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import StoreContext from '../../store/Context';

const RoutesInstituicao = ({ component: Component, ...rest}) =>{
    const { session } = useContext(StoreContext);

    console.log(session);
    return(
        <Route
        {...rest}
        render={() => session !== null && session.categoria == 'INSTITUICAO' ? <Component {...rest} />: <Redirect to='/' />}
        ></Route>
    );
}

export default RoutesInstituicao;