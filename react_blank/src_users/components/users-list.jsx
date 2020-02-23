import React, {Component} from "react"
import PropTypes from "prop-types"
import axios from "axios"

export default class UserList extends Component{
    static PropTypes = {
        searchName: PropTypes.string.isRequired
    }

    state = {
        users: null,
        error: null,
        initView: true,
        loading: false
    }

    componentWillReceiveProps(nextProps) {
        const searchName = nextProps.searchName;
        const url = `https://api.github.com/search/users?q=${searchName}`;

        this.setState({
            initView: false,
            loading: true
        })

        axios.get(url)
            .then(response => {
                const result = response.data;
                const users = result.items.map(item => ({
                    name: item.login,
                    avatarUrl: item.avatar_url,
                    htmlUrl: item.html_url
                }))
                this.setState({
                    users: users,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                })
            })
    }

    render() {
        const {initView, loading, error, users} = this.state
        if (initView) {
            return (
                <h2>请输入关键字搜索</h2>
            )
        } else if (loading) {
            return (
                <h2>正在加载。。。</h2>
            )
        } else if (error) {
            return (
                <h2>{error}</h2>
            )
        } else {
            return (
                <div className="row">
                    {
                        users.map((user,index) =>
                            <div className="card">
                                <a href={user.htmlUrl} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>)
                    }

                </div>
            );
        }
    }
}