import React from "react"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {comments} from "./reduces";
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(comments, composeWithDevTools(applyMiddleware(thunk)))

export default store;