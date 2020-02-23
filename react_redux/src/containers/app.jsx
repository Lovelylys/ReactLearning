import React,{Component} from "react"
import ComponentAdd from "../components/component-add/component-add";
import ComponentList from "../components/component-list/component-list";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {handleAdd, deleteComment, initComment} from "../redux/actions"

class App extends Component{
    static PropTypes = {
        comments: PropTypes.array.isRequired,
        handleAdd: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        initComment: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.initComment()
    }

    render() {
        const {comments, handleAdd, deleteComment} = this.props;

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
                    <ComponentAdd handleAdd={handleAdd}/>
                    <ComponentList comments={comments} deleteComment={deleteComment}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({comments: state}),
    {handleAdd, deleteComment, initComment}
)(App)