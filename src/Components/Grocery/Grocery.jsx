import { useState } from "react"


export const Grocery = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [page, setPage] = useState(1)



    return (
        <div>
            <h3>Gro-ce-ry</h3>
            <label>Name: </label>
            <input type="text" />
            <label>Age: </label>
            <input type="number" />
            <button>Add</button>

        </div>
    )

}