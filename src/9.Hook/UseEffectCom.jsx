import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

export default function UseEffectCom() {

    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);


    //call everytime  
    useEffect(() => {
        console.log("==useeffect without Depedency==>");
    })

    //call only first time not call on update of component
    useEffect(()=>{
        console.log("==useeffect with [] array==>");
    },[]);

    useEffect(()=>{
        console.log("==useeffect with depend on count==>");
    },[count])

    return (
        <>
            <h1>UseEffectCom</h1>

            <h1>count is : {count}</h1>
            <h1>count2 is : {count2}</h1>

            <Button color="danger" outline onClick={()=>setCount(++count)}>Increment</Button>

            <Button color="danger" outline onClick={()=>setCount2(++count)}>Increment</Button>

            
        </>

    )
}
