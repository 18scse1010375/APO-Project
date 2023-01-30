import axios from 'axios';
import React, { Component, useState } from 'react';
import base_url from 'api-integration/Path';
import { values } from 'mobx';
import { Container } from 'reactstrap';
import MakeHeader from './MakeHeader';
import { toast, ToastContainer } from 'react-toastify';

const BulkEmail = () => {

    const [File, setFile] = useState("")


    

    const onFileChange = event => {
        setFile(event.target.files[0])
    };


    const onFileUpload = () => {

        if (File) {
            const formData = new FormData();
            formData.append("file111",File);

            

            let connection = {
                method: "POST",
                url: `${base_url}/upload`,
                params: formData ,
             headers: { 'Content-Type': 'multipart/form-data' }
            }
            console.log("Your Updated Form-data=", formData)
            // try {
            //     axios(connection).then((Response) => console.log("Respond from Server", Response.data), (error) => console.log(error))
            // } catch (error) {
            //     console.log(error)
            // }
              
            axios.post(`${base_url}/upload`,formData).then(

                (Response)=>{console.log(Response.data) ; document.getElementById("respond1").innerHTML=Response.data ;  Response.data[0]=='S' ?  toast.error("Uploading Fail!!!")  : toast.success("Uploading Success!!!")     },
                (error) => {console.log(error); toast.error("something went wrong!!!") }  
            )

        }
        else {
            toast.warning("Please Upload Excel File First")
            document.getElementById("respond1").innerHTML="Please upload  Excel file first!!!"
        }

    };

    const fileData = () => {

        if (File) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {File.name}</p>

                    <p>File Type: {File.type}</p>

                    <p>
                        Last Modified:{" "}
                        {File.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
        <>

        <MakeHeader/>
        <div className='text-center' style={{ marginTop: '200px' }}>

          
            
          
            <div>

                <input type="file" onChange={(event) => onFileChange(event)} />
                <br/>


                <button className='btn btn-primary my-3' onClick={onFileUpload}>
                    Upload On Server!
                </button>
            </div>

           
           <Container className='my-3 text-warning' style={{textColor:'white'}}>
            <ToastContainer position='bottom-center'/>
                <p>  <span  id="respond1"></span>   </p>
                </Container>

  
            

            

            <div className='bg-success my-3 p-3 '>
                {fileData()}
            </div>
        </div>
        </>
    );
}


export default BulkEmail;
