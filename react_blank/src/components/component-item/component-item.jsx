import React, {Component} from "react"
import PropTypes from "prop-types"

export default class ComponentItem extends Component{
    static PropTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    handleDelete = () => {
        const {index} = this.props;
        this.props.deleteComment(index);
    }

    render() {
        const {comment} = this.props;

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span>{comment.userName}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}