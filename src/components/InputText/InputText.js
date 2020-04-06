import React, { useState } from 'react'
import './style.css'

const style = {
    margin: "10px"
}
const styleDeleteButton = {
    cursor: "pointer"
}


const InputText = (props) => {
    // const [stateTask, setStateTask] = useState({})
    return (
        <div id="inputContainer">
            <form id="formSubmit">
                <input className="inputs" onChange={props.onTitle} style={style} id="titleInput" value={props.valueTitle} placeholder="Type a new task to do" ></input>
                <textarea className="inputs" onChange={props.onDescription} style={style} value={props.valueDescription} placeholder="description"></textarea>

                <button type="submit" style={styleDeleteButton} onClick={props.action}>Add new task</button>
            </form>
        </div >
    )
}

export default InputText