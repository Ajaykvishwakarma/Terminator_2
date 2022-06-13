import { useState, useEffect } from "react"
import axios from 'axios';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'  
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
            <div style={{width: "40%" ,margin:"auto"}}>
            <h3>Gro-ce-ry</h3>
            <label>Name: </label>
            
            <Input placeholder='Name'  onChange={(e) => {setText(e.target.value)}}/>
            <label>Age: </label>
            <Input placeholder='Age'  onChange={(e) => {setText1(e.target.value)}}/>
            </div><br></br>
            <Button colorScheme='blue' onClick={() => {
                fetch('http://localhost:8080/glocery', {
                    method: "POST",
                    body: JSON.stringify({name: text, age: text1 }),
                    headers:{
                        "content-type" : "application/json"  
                    }
                }).then(()=> {
                    getData()
                })
            }}>Add</Button><br></br><br></br>
           
            {data?.map((e) => (
                <div key={e.id}>
                    <p>Name: {e.name}, Age: {e.age}</p>
                   
                </div>
            ))}

            {page == 1 ? "" : <Button onClick={() => {handlePage(-1)}}>Prev</Button>}
             <Button onClick={() => {handlePage(1)}}>Next</Button>

        </div>
    )

}