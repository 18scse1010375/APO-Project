import axios from 'axios';

import React, { Component, useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons'

import base_url from 'api-integration/Path';
import { values } from 'mobx';
import { Container } from 'reactstrap';

const Geeks = () => {

    const [File, setFile] = useState("")


    const props = {
        beforeUpload: File => {
            const isJpgOrPng = File.type === 'image/jpeg' || File.type === 'image/png' || File.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            const isLt2M = File.size / 1024 / 1024 < 25;
            if (!isLt2M) {
                message.error('Image must smaller than 25MB!');
            }
            return isJpgOrPng && isLt2M ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
            console.log("Test are:", info.fileList);
        },
    };


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

                (Response)=>{console.log(Response.data) ; document.getElementById("respond1").innerHTML=Response.data     },
                (error) => console.log(error)
            )

        }
        else {
            document.getElementById("respond").innerHTML="Please upload Png file here!!!"
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
        <div className='text-center' style={{ marginTop: '200px' }}>
            <h1>
                GeeksforGeeks
            </h1>
            <h3>
                File Upload using React!
            </h3>
            <div>

                <input type="file" onChange={(event) => onFileChange(event)} />
                <br/>


                <button className='btn btn-primary my-3' onClick={onFileUpload}>
                    Upload On Server!
                </button>
            </div>

           
           <Container className='my-3 text-warning' style={{textColor:'white'}}>
                <p>  <span  id="respond1"></span>   </p>
                </Container>

  
            

            

            <div className='bg-success my-3 p-3 '>
                {fileData()}
            </div>
        </div>
    );
}


export default Geeks;
