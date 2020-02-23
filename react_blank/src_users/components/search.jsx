import React, {Component} from "react"
import PropTypes from "prop-types"

export default class Search extends Component{
    static PropTypes = {
        setSearchName: PropTypes.func.isRequired
    }

    searchName = () => {
        const searchName = this.input.value;
        if (searchName) {
            this.props.setSearchName(searchName);
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