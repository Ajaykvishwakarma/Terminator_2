import { useState, useEffect } from "react"
import axios from 'axios';

export const Grocery = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [text1, setText1] = useState("")
    const [page, setPage] = useState(1)

    const getData = () => {
        axios.get(`http://localhost:8080/glocery?_limit=3&_page=${page}`)
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    },[page])

    // console.log(data)

    const handlePage =(value)=>{
        setPage(page+value)

    }


    return (
        <div>
            <h3>Gro-ce-ry</h3>
            <label>Name: </label>
            <input type="text" onChange={(e) => {setText(e.target.value)}}/>
            <label>Age: </label>
            <input type="number" onChange={(e) => {setText1(e.target.value)}}/>
            <button
            onClick={() => {
                fetch('http://localhost:8080/glocery', {
                    method: "POST",
                    body: JSON.stringify({name: text, age: text1 }),
                    headers:{
                        "content-type" : "application/json"
                    }
                }).then(()=> {
                    getData()
                })
            }}
            >Add</button><br></br>
            {data?.map((e) => (
                <div key={e.id}>
                    <p>Name: {e.name}, Age: {e.age}</p>
                   
                </div>
            ))}

            {page == 1 ? "" : <button onClick={() => {handlePage(-1)}}>Prev</button>}
            <button onClick={() => {handlePage(1)}}>Next</button>

        </div>
    )

}