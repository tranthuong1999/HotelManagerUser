import React, { Component } from 'react';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import history from '../components/history';
import Contact from '../components/Contact';
import DetailRoom from '../components/DetailRoom';
import Login from '../components/Login';
import News from '../components/News';
import Register from '../components/Register';
import Rooms from '../components/Rooms';
import Home from './../components/Home';
class ControlURL extends Component {
    render() {
        return (
            <Switch >
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/our-rooms">
                    <Rooms />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/detail">
                    <DetailRoom />
                </Route>

            </Switch>
        );
    }
}

export default ControlURL;
