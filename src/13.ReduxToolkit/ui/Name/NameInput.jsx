import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addName, updateName } from '../../Redux/features/NameList/Name';

export default function NameInput(props) {
  let [inputName, setInputName] = useState("");

  const dispatch = useDispatch();

  const addNameHandler =()=>{
    dispatch(addName(inputName))
    setInputName("");
  }

  useEffect(()=>{
    setInputName(props.inputData);

  },[props.inputData,props.index])

  const updateNameHandler =()=>{
    dispatch(updateName({index: props.index, newData:inputName  }))
    setInputName("");
    props.setIndex(null);
    props.setInputData("");
    
  }
  return (
    <>
    <h1>ADD NAME</h1>
    <label htmlFor="">NAME</label>
    <input value={inputName} type="text" onChange={(e)=>setInputName(e?.target?.value)} />

{

    props?.index || props?.index === 0?
    (
      
      <Button onClick={updateNameHandler}>UPDATE</Button>
      )
      :
      (
        
        <Button onClick={addNameHandler} >SUBMIT</Button>
        )
}
    </>
  )
}