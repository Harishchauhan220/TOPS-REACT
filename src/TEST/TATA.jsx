import React, { useState } from 'react'
import { Button, Table } from "reactstrap";

export default function TATAMOTORS() {

    let [name, setName] = useState("");
    let [data, setData] = useState([]);
    let [action,setAction] = useState(true);
    let [index,setIndex] = useState("");


  
    function CARNAME(e) {
        setName(e?.target?.value)
    }

  
    function CARDATA() {
        let x = [...data, name];
        setData(x);
        setName("");

    }

    

   
  
    function deleteHendler(index) {
        const conf = confirm("You want to delete this...????")

        if(conf){
            data.splice(index, 1);
            setData([...data]);
        }

         
    }

    function updateDATA(params) {
        setAction(true);
        setData(()=>{
            data.splice(index,1,name)
            return[...data]
        })
        setName("")
    }

    function updateHendler(i) {
        setName(data[i]);
        setAction(false)
        setIndex(i);
        
    }


    return (

        <>
            {/* <h1>TATA-MOTORS</h1> */}
            <h1>{name}</h1>
            <label htmlFor="">CAR-Name :</label>
            <input type="text" value={name} onChange={(e) => CARNAME(e)} />

            {
                action ?  <Button color="danger" outline onClick={() => CARDATA()}>
                Click Now
                </Button> :
                <Button color="danger" outline onClick={() => updateDATA()}>
                Update
                </Button>
            }

           

           

           

            <Table striped>
                <thead>
                    <tr>
                        <th>
                            SR.NO
                        </th>
                        <th>
                          CAR-NAME
                        </th>
                       
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((e, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">
                                    {i + 1}
                                </th>
                                <td>
                                    {e}
                                </td>
                                {/* <td>
                                    {e}
                                </td>
                                <td>
                                    {e}
                                </td> */}
                                <td>
                                    <Button color="danger" outline onClick={() => deleteHendler(i)}>
                                        Delete
                                    </Button>
                                    <Button color="danger" outline onClick={() => updateHendler(i)}>
                                        Update
                                    </Button>

                                </td>
                            </tr>
                        )
                    })

                    }

                </tbody>
            </Table>
        </>
    )
}