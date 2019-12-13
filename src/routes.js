import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const PrivateRoute = ({ component, Component, ...props}) => {
    
    const isUserAuthenticated = () => Boolean(localStorage.getItem('TOKEN'))

    if (isUserAuthenticated()){
        return <Component {...props}/>
    } else{
        return <Redirect to="/login" /> 
    }
    
}
const Roteamento = () => {
    return(
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route component={ NotFoundPage }/>
        </Switch>
    )
}

/*class PrivateRoute extends React.Component{

    estaAutenticado = () =>{
        if(localStorage.getItem('TOKEN')){
            return true
        }
        return false
    }
    
    render(){
        
        const { component: Component, ...props } = this.props
    
        if(this.estaAutenticado()){
            return <Component {...props} />
        }
        else{
            return <Redirect to="/login" />
        }
}

class Roteamento extends React.Component{        
        return (
            <Switch>
                <PrivateRoute path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
            </Switch>
        )
    }
}*/

export default Roteamento;