import React, {Component} from "react"
import {NavLink,Route,Switch} from "react-router-dom"
import News from "./news"
import Message from "./messages"

export default class Home extends Component{
    render() {
        return (
            <div>
                <h2>Home Route Component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to="/home/news">news</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/messages">messages</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                   <Switch>
                       <Route path="/home/news" component={News}></Route>
                       <Route path="/home/messages" component={Message}></Route>
                   </Switch>
                </div>
            </div>
        );
    }
}