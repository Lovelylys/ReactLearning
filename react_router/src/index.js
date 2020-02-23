// 三个组件，App外围组件，Home和About两个路由组件，App构建方式一样
//index中，需要将App包含在HashRouter中
// App返回的组件，直接使用路由的方式获取组件，navLink Switch router
import React from "react"
import {render} from "react-dom"
import {BrowserRouter, HashRouter} from "react-router-dom"
import App from "./components/app"
import "./index.css"

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ),
    document.getElementById("root")
);