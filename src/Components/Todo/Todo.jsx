import { TodoInput } from  "./TodoInput";
import { useState } from "react";
import { TodoItem } from "./TodoItems";
export const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodos = (data) => {
        setTodos([...todos, data])
    }
     return ( 
         <div>
             <TodoInput addTodo={addTodos}/>
             {todos.map((e) => (
                 <TodoItem todo={e}/>
             ))}
         </div>
     )
}