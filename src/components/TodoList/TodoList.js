import React from 'react'
import './style.css'

const styleButton = {
    float: "right",
    cursor: "pointer"
}

const TodoList = (props) => {
    return (
        <ul>
            {props.listOfItens.map(item => {
                return (
                    <li key={item.id}>{item.title} - {item.description}
                        <button value={item.id} onClick={props.onClickDeleteItemBtnHandler} style={styleButton} className="deleteButton">Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;