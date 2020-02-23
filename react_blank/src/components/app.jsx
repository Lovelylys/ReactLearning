import React, {Component} from "react"
import Search from "./search";
import UserList from "./users-list";

export default class App extends Component{
    render() {
        return (
            <div className="container">
                <Search />
                <UserList />
            </div>
        );
    }
}