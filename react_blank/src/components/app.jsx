import React, {Component} from "react"
import Search from "./search";
import UserList from "./users-list";

export default class App extends Component{
    state = {
        seachName: ''
    }

    setSearchName = (searchName) => {
        this.setState({searchName});
    }

    render() {
        const {searchName} = this.state;

        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <UserList searchName={searchName}/>
            </div>
        );
    }
}