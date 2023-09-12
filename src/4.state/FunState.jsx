import React ,{useState}from 'react'
import { Button } from 'reactstrap'

export default function FunState() {
    let [count,setCount] = useState(0)
    let x = 10;
    function inc() {
        // x++;
        // console.log("inc : x =",x);
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={() => inc()} color="danger" outline>
                Increment
            </Button>
        </div>
    )
}
