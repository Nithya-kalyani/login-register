import React  from 'react';

import {BrowserRouter,Route} from 'react-router-dom';
import Main from './App';
import Login from './Login'
import Register from './Register'
import Home from './Home'
import profile from "./profileapi";

const Routing = () => {
    return(
        <BrowserRouter>
           <Route exact path='/' component={Main}></Route>
           <Route  path='/login' component={Login}></Route>
           <Route  path='/register' component={Register}></Route>
           <Route  path='/home/:id' component={Home}></Route>
           <Route  path='/profile/:id' component={profile}></Route>
        </BrowserRouter>
    )
}
export default Routing