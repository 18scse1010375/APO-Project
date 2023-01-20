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
import Info from '@spectrum-icons/workflow/Info';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


const MakeLabel = () => {

  const [emailError, setEmailError] = useState('')


  const validateEmail = (e) => {
    var email = e.target.value
    var btn = document.getElementById("submit")
    var mess = document.getElementById("detail")



    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
      btn.disabled = "";
      mess.style.color = "green"



    } else {
      setEmailError('Enter valid Email!')
      btn.disabled = "disabled"
      mess.style.color = "red"

    }

  }

  return (
    <>

      <MakeHeader />
      <div style={{
        margin: 'auto',
        marginLeft: '300px',
      }}>


        <Container className="mt-4 mx-5" style={{ width: '600px', display: 'inline-block' }}>

          <Tooltip title="Please Enter Email to remove from Suppression">
            <IconButton>
              <div style={{ width: '28px', display: 'inline-block', color: 'green' }}>
                <Info />
              </div>

            </IconButton>
          </Tooltip>





          {/* <div style={{width:'28px',display:'inline-block'}}>
        <Info/>
        </div> */}
          <div className="my-4 mx-1" style={{ display: 'inline-block', width: '450px' }}>
            <Input onChange={(e) => validateEmail(e)}
              id="exampleEmail"
              placeholder="Enter Email"
              type="email"


            />
          </div>


          <Container className="text-center mt-1">
            <button className="btn btn-primary " disabled="disabled" id="submit" >Submit</button>
          </Container>




        </Container>

        <br />
        <br/>

        <span className="my-4 " id="detail" style={{
          fontWeight: 'bold',
          marginLeft: '320px',

          color: 'red',

        }}>{emailError} </span>

      </div>

    </>
  );

}

export default MakeLabel

