import React from "react";
import { Input, Form, FormGroup, Label, Container, Button } from 'reactstrap';
import MakeHeader from "./MakeHeader";
import axios from "axios";
import base_url from "../api-integration/Path";
import { useState } from 'react'

function getDataFromServer () {

  
  console.log('Your Server is loading')
  console.log("url=", `${base_url}/courses`)
  axios.get(`${base_url}/courses`).then(
    (Response) => { console.log(Response.data); Response.data.map((p) => console.log(p)) },
    (error) => console.log(error)

  )
  return Response.data
  
  

}

const deleteDataFromServer = () => {
  const id = prompt("Enter id")

  const options = {
    method: 'DELETE',
    url: `${base_url}/courses/${id}`,
    // params: {id:id}
  };
  console.log("Delete Function is Loading......")
  console.log("URL=", options.url);

  axios.request(options).then(

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (Response) => console.log("Deletion Successful"),
    (error) => console.log(error)
  )
}

const getSpecificCourse=()=>{
  console.log("You are ready for getting the specific course");
  const id=prompt("Enter Course id that you want to access ");
  axios.get(`${base_url}/courses/${id}`).then(
    (Response)=>console.log(Response.data),
    (error)=>console.log(error)
    )
  return Response.data;
}

const sendDataTOServer=(title,desc)=>{
  console.log("Your server is ready to upload the course");
  console.log("Title=",title);
  console.log("Desc=",desc);


  

  const id=Math.trunc(Math.random()*1000);
  const course={id:id,title :title ,description :desc}
  axios.post(`${base_url}/courses` ,  course ).then(
    (Response)=>console.log(Response.data),
    (error)=>console.log(error)
  )

  }


const MakeLabel = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")

  const submit=(e)=>{
    e.preventDefault();
    console.log("Your form is submitting");
     sendDataTOServer(title,desc)
    setTitle("")
    setDesc("")
  }


  return (
    <div>
      <MakeHeader />
      <Container className="mt-4" style={{ width: '550px' }}>

        <Form onSubmit={submit}>
          <FormGroup>
            <Label for="exampleName">
              Course Title
            </Label>
            <Input
              id="exampleName"
              placeholder="Enter Course Title"
              type="text" value={title}  onChange={ (e)=>setTitle(e.target.value) }
            />

            <Label for="exampleEmail" className="my-2">
              Course Desciption
            </Label>
            <Input 
              id="exampleEmail"
              placeholder="Enter Course Description"
              pattern="[A-Za-z]{3}"
              type="text" value={desc} onChange={ (e)=>setDesc(e.target.value) }
            />
            
            <Container className="mt-4 ">
              <Button onClick={getDataFromServer} type="button" color="primary">Fetch Data From Server</Button>
              <Button onClick={deleteDataFromServer} type="button" className="mx-3" color="danger">Delete Data From Server </Button>
              <Button type="button" onClick={getSpecificCourse} className="text-center my-4" color="primary">Get Specific Course </Button>
              <Button  className="text-center my-4 mx-4" color="primary" type="submit">Send Data To Server </Button>


            </Container>

          </FormGroup>

        </Form>



      </Container>
    </div>
  )
}

export default MakeLabel; 
