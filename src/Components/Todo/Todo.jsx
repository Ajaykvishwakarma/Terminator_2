import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItems } from './TodoItems';
import { Button, ButtonGroup } from '@chakra-ui/react'  


export const Todo = () => {

    const [ todos, setTodos] = useState([])
    const addTodos = (data) => {
        setTodos([...todos, data])
    }
    // console.log(todos)

    const deleteItem = (a) => {
        const data = todos.filter((e, index) => {
            return (
                index !== a
            )
        })
        setTodos(data)
    }

    return(
        <div  >
            <TodoInput addTodo={addTodos}/>
            {todos.map((e, index) => (
                <div key={index} style={{border: "1px solid red" , width:"40%", margin:"auto", padding:"5px"}}>
                <TodoItems value={e} />
                <Button onClick={() => {deleteItem(index)}}>Delete</Button>
                </div>
            ))}
            

        </div>
    )
}