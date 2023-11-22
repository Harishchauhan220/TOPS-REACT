import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeName } from '../../Redux/features/NameList/Name';

export default function NameDisplay(props) {
  let[dataArr, setDataArr] = useState([]);

  const data = useSelector ((state)=>{
    return state.NAME.nameArr;
  })

  useEffect(()=>{
    setDataArr(data);
  },[data]);

  const dispatch = useDispatch();

  const deleteHandler = (index)=>{
    dispatch(removeName(index))
  }

  const updateHandler = (i,e)=>{
    props.setIndex(i);
    props.setInputData(e);
  }
  return (
    <>
     <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                 <Button onClick={()=>deleteHandler(i)}>delete</Button>
                 <Button onClick={()=>updateHandler(i,e)}>update</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  
    </>
  )
}