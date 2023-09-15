import React, { useRef } from "react";
import { Button } from "reactstrap";

export default function UseRefCom() {
  let headRef = useRef(null);
  let inputRef= useRef(null);

  function fun() {
    inputRef.current.focus();
    headRef.current.textContent = "JAY SIYA RAM...!"
    console.log("------>");
  }

  return (
    <div>
      <h1 ref={headRef}>RAM RAM....!</h1>
      <input ref={inputRef} type="text" />


      <Button color="danger" outline onClick={() => fun()}>
        Click Now
      </Button>
    </div>
  );
}