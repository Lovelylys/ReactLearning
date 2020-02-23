import React, {Component} from "react"
import {NavLink, Route} from "react-router-dom"
import MessageDetail from "./messageDetail";

export default class Message extends Component{
    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 6, title: 'Message006'},
            ];
            this.setState({
                messages: data
            });
        }, 1000)
    }

    handleDetail = (id) => {
        this.props.history.push(`/home/messages/messageDetail/${id}`);
    }

    handleReplace = (id) => {
        this.props.history.replace(`/home/messages/messageDetail/${id}`);
    }

    handleForward = () => {
        this.props.history.goForward()
    }

    handleBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m,index) => (
                            <li key={index}>
                                <NavLink to={`/home/messages/messageDetail/${m.id}`}>{m.title}</NavLink>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => this.handleDetail(m.id)}>push查看详情</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => this.handleReplace(m.id)}>replace查看详情</button>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <button onClick={this.handleForward}>前进</button>
                    <button onClick={this.handleBack}>后退</button>
                </div>
                <hr/>
                <Route path='/home/messages/messageDetail/:id' component={MessageDetail}></Route>
            </div>
        );
    }
}