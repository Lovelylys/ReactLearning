import {COMMENT_DEL,COMMENT_ADD, COMMENT_REC} from "./action-types"

const initComments = []

export function comments(state = initComments, action) {
    switch (action.type) {
        case COMMENT_ADD:
            return [...state, action.data]
        case COMMENT_DEL:
            return state.filter((comment, index) => index !== action.data)
        case COMMENT_REC:
            return action.data;
        default:
            return state;
    }
}