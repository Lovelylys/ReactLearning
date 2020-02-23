import React, {Component} from "react"

const messageDetails = [
    {id: 1, title: 'Message001', content: '我爱你, 中国'},
    {id: 3, title: 'Message003', content: '我爱你, 老婆'},
    {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]

export default function MessageDetail(props) {
    const id = props.match.params.id;
    const m = messageDetails.find(md => md.id === id * 1);

    return (
        <ul>
            <li>ID: {m.id}</li>
            <li>title: {m.title}</li>
            <li>content: {m.content}</li>
        </ul>
        );
}