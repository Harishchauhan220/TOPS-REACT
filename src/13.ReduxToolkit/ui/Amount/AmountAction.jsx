

// import React from 'react'
// import { Button } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { decAmount } from '../../Redux/features/AmountSlice';

// export default function AmountAction() {

//   const dispatch = useDispatch();
//   return (
//     <>
//     <Button onClick={()=>dispatch(decAmount())} >DEC</Button>
//     </>
//   )
// }



import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { decAmount } from '../../Redux/features/AmountSlice'

export default function AmountAction() {
  const dispatch = useDispatch()
  return (
    <>
    <Button onClick={()=>dispatch(decAmount())}>DEC</Button>
    </>
  )
}

