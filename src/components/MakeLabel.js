// import React from "react";
// import { Input, Form, FormGroup, Label, Container, Button } from 'reactstrap';
// import MakeHeader from "./MakeHeader";
// // import axios from "axios";
// // import base_url from "../api-integration/Path";
// import { useState } from 'react'

// // function getDataFromServer () {


// //   console.log('Your Server is loading')
// //   console.log("url=", `${base_url}/courses`)
// //   axios.get(`${base_url}/courses`).then(
// //     (Response) => { console.log(Response.data); Response.data.map((p) => console.log(p)) },
// //     (error) => console.log(error)

// //   )
// //   return Response.data



// // }

// // const deleteDataFromServer = () => {
// //   const id = prompt("Enter id")

// //   const options = {
// //     method: 'DELETE',
// //     url: `${base_url}/courses/${id}`,
// //     // params: {id:id}
// //   };
// //   console.log("Delete Function is Loading......")
// //   console.log("URL=", options.url);

// //   axios.request(options).then(

// //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //     (Response) => console.log("Deletion Successful"),
// //     (error) => console.log(error)
// //   )
// // }

// // const getSpecificCourse=()=>{
// //   console.log("You are ready for getting the specific course");
// //   const id=prompt("Enter Course id that you want to access ");
// //   axios.get(`${base_url}/courses/${id}`).then(
// //     (Response)=>console.log(Response.data),
// //     (error)=>console.log(error)
// //     )
// //   return Response.data;
// // }

// // const sendDataTOServer=(title,desc)=>{
// //   console.log("Your server is ready to upload the course");
// //   console.log("Title=",title);
// //   console.log("Desc=",desc);




// //   const id=Math.trunc(Math.random()*1000);
// //   const course={id:id,title :title ,description :desc}
// //   axios.post(`${base_url}/courses` ,  course ).then(
// //     (Response)=>console.log(Response.data),
// //     (error)=>console.log(error)
// //   )

// //   }


// const MakeLabel = () => {
//   const [title,setTitle]=useState("")
//   const [desc,setDesc]=useState("")

//   const submit=(e)=>{
//     e.preventDefault();
//     console.log("Your form is submitting");
//     // sendDataTOServer(title,desc)
//     setTitle("")
//     setDesc("")
//   }


//   return (
//     <div>
//       <MakeHeader />
//       <Container className="mt-4" style={{ width: '550px' }}>

// <Form onSubmit={submit}>
//   <FormGroup>
//     <Label for="email">
//        Enter Email Address
//     </Label>
//     <Input
//       id="exampleName"
//       placeholder="Enter Email"
//       type="text" value={title}  onChange={ (e)=>setTitle(e.target.value) }
//     />



//             <Container className="mt-4 ">
//               <Button type="button" color="primary">Submit</Button>
//               

//             </Container>

//           </FormGroup>

//         </Form>



//       </Container>
//     </div>
//   )
// }

// export default MakeLabel; 

import React, { useState } from "react";
import validator from 'validator'
import MakeHeader from "./MakeHeader";
import { Container, Button, Form, TextField, FormGroup, Label, Input } from 'reactstrap';
import { Provider } from "mobx-react";


const MakeLabel = () => {
  const [emailError, setEmailError] = useState('')


  const validateEmail = (e) => {
    var email = e.target.value
    var btn = document.getElementById("submit")


    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
      btn.disabled = ""
    } else {
      setEmailError('Enter valid Email!')
      btn.disabled = "disabled"
    }

  }





  return (
    <>

      <MakeHeader />
      <div style={{
        margin: 'auto',
        marginLeft: '300px',
      }}>


        <div className="my-3">


          
              
                
              <label htmlFor="email">
                Enter Email Address
              </label> <br/>
              <input onChange={(e) => validateEmail(e)}
                id="exampleName"
                placeholder="Enter Email"
                type="email"
              />
              
             
              <Container className="text-center">
                <button id="submit" disabled="disabled" type="submit" className="btn btn-primary my-3">Submit</button>
              </Container>
            





        </div>

        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>

      </div>

    </>
  );

}

export default MakeLabel

