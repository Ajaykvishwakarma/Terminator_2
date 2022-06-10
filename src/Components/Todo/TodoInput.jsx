import { useState } from "react"

export const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState("");
    return (

        <div style={{border: "1px solid green" , width:"40%", margin:"auto", padding:"30px"}}>
            <label>Input Task : </label>
            <input type="text" onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={() => {addTodo(text)}}>Submit</button>

        </div>
    )
}