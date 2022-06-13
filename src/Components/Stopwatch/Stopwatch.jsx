import { useEffect, useRef, useState } from "react"
import { Button } from '@chakra-ui/react'  

export const StopWatch = () => {

    const [counter, setCounter] = useState(0)
    const ref = useRef(null)
    useEffect(() => {
        StartTimer()
    }, [])

    const StartTimer = () => {
        ref.current = setInterval(()=> {
            setCounter((value) => value + 1)
        }, 1000)
    }


    return(
        <div>
            <h3>Couner : {counter}</h3>
            <Button style={{marginLeft:"10px"}} onClick={StartTimer}>Start</Button>
            <Button style={{marginLeft:"10px"}} onClick={() => {
                clearInterval(ref.current)
            }}>Stop</Button>
            <Button style={{marginLeft:"10px"}}  onClick={() => {
                clearInterval(ref.current)
                setCounter(0)
            }}>Reset</Button>


        </div>
    )

}