import React, { useState } from 'react'
import { Button, Table } from "reactstrap";

export default function InputCom() {

    let [name, setName] = useState("");
    let [data, setData] = useState([]);


    // to get data from input
    function getData(e) {
        // console.log("---->",e.target.value);
        setName(e?.target?.value)
    }

    // push a data to array on click a add button
    function addData(params) {
        // console.log("---->");
        let x = [...data, name];
        setData(x);
        setName("");

    }

    // delete data from array on button click
    function deleteHendler(index) {
        const conf = confirm("You want to delete this...????")

        if(conf){
            data.splice(index, 1);
            setData([...data]);
        }
     



        // with use of filter
        
        // let newData = data.filter((e, i) => {
        // return i !== index;
        // });
        // setData(newData);
    }

    return (

        <>
            <h1>{name}</h1>
            <label htmlFor="">Name :</label>
            <input type="text" value={name} onChange={(e) => getData(e)} />

            <Button color="danger" outline onClick={() => addData()}>
                Click Now
            </Button>

            {/* {
        data.map((e)=>{
            return <h1>{e}</h1>
        })
    } */}

            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">
                                    {i + 1}
                                </th>
                                <td>
                                    {e}
                                </td>
                                <td>
                                    {e}
                                </td>
                                <td>
                                    {e}
                                </td>
                                <td>
                                    <Button color="danger" outline onClick={() => deleteHendler(i)}>
                                        Delete
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
