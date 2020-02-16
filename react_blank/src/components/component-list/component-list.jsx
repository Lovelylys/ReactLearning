import React, {Component} from "react"
import "./component-list.css"
import PropTypes from "prop-types"
import ComponentItem from "../component-item/component-item";

export default class ComponentList extends Component{
    static PropTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    render() {
        const {comments} = this.props;
        const {deleteComment} = this.props;
        const display = comments.length <= 0 ? 'block':'none';

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index) => <ComponentItem comment={comment} index={index} key={index} deleteComment={deleteComment}/>)
                    }
                </ul>
            </div>
        );
    }
}