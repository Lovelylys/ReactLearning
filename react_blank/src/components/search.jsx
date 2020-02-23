import React, {Component} from "react"
import PropTypes from "prop-types"
import PubSub from "pubsub-js"

export default class Search extends Component{
    searchName = () => {
        const searchName = this.input.value;
        if (searchName) {
            debugger;
            PubSub.publish("searchUserName", searchName);
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input}/>
                    <button onClick={this.searchName}>Search</button>
                </div>
            </section>
        );
    }
}