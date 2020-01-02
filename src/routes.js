import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Journal from './Components/Journal';
import SelectedDate from './Components/SelectedDate'

export default(
    <Switch>
        <Route exact path ='/' component = {Login}/>
        <Route path ='/home' component = {Home}/>
        <Route path ='/journal' component = {Journal}/>
        <Route path ='/profile' component = {Profile}/>
        <Route path ='/date' component = {SelectedDate}/>
    </Switch>
)