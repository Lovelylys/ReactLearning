import React, {Component} from "react"
import logo from "../logo.svg"

export default class App extends Component{
    render() {
        return (
            <div className="pix juzhong">
                <img className="logo " src={logo} alt="log"/>
                <h2 className="title">hello react</h2>
            </div>
        );
    }
}