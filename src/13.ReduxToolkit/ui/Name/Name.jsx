import React, { useState } from 'react'
import NameInput from './NameInput'
import NameDisplay from './NameDisplay'

export default function Name () {
  let[inputData, setInputData] = useState("");
  let[index,setIndex] = useState(null);
  return (
    <>
    <div>

    <h1>index {index} input data is {inputData} </h1>
    <NameInput inputData={inputData} index={index} setInputData={setInputData}  setIndex={setIndex} />
    <NameDisplay setIndex={setIndex} setInputData={setInputData} />
    </div>
    </>
  )
}