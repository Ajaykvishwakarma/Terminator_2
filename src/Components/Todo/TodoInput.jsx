import { useState } from "react"
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'  
export const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState("");
    return (

        <div style={{border: "1px solid green" , width:"40%", margin:"auto", padding:"30px"}}>
            <label>Input Task : </label>
            
            <Input placeholder='Name'  onChange={(e) => {setText(e.target.value)}}/>
            <Button onClick={() => {addTodo(text)}}>Submit</Button>

        </div>
    )
}