import React,{Component} from "react"
import ComponentAdd from "../component-add/component-add";
import ComponentList from "../component-list/component-list";

export default class App extends Component{
    state = {
        comments: [
            {userName: 'Tom', content: 'react很简单'},
            {userName: 'Jack', content: 'react你猜'}
        ]
    }

    handleAdd = (comment) => {
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }

    deleteComment = (index) => {
        let {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    render() {
        const {comments} = this.state;

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <ComponentAdd handleAdd={this.handleAdd}/>
                    <ComponentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }
}