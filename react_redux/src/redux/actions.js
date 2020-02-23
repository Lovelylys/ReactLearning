import {COMMENT_ADD, COMMENT_DEL, COMMENT_REC} from "./action-types"

export const handleAdd = (comment) => ({type:COMMENT_ADD, data: comment})
export const deleteComment = (index) => ({type:COMMENT_DEL, data: index})
const receiveComments = (comment) => ({type: COMMENT_REC, data: comment})

export const initComment = () => {
    return dispatch => {
        setTimeout(() => {
            const initComments = [
                {userName: 'Tom', content: 'react很简单'},
                {userName: 'Jack', content: 'react你猜'}
            ]
            dispatch(receiveComments(initComments));
        }, 1000)
    }
}