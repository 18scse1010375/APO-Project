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
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator'
import MakeHeader from "./MakeHeader";
import { Container, Button, Form, TextField, FormGroup, Label, Input } from 'reactstrap';
import { Provider } from "mobx-react";
import Info from '@spectrum-icons/workflow/Info';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import base_url from "api-integration/Path";
import 'react-toastify/dist/ReactToastify.css';


const FetchDataFromServer = () => {

  console.log("Your Server is loading")
  let status2 = document.getElementById("status1");
  axios.get(`${base_url}/courses`).then(

    (Response) => { console.log(Response.status); status2.innerHTML = Response.status; console.log(Response.data); Response.status == 200 ? toast.success("courses are Loading....") : toast.error("ohh...") },
    (error) => {
      toast.error("Something Went Wrong!!");
      console.log(error.status);
      status2.innerHTML = error;
    }
  )





}

const DeleteDataFromServer = () => {
  let status2 = document.getElementById("status1");
  console.log("Delete function is calling")
  const id = prompt("Enter id that you want to delete")
  axios.delete(`${base_url}/courses/${id}`).then(
    (Response) => { console.log("Deletion Successful"); toast.success("Course has been Deleted!!"); status2.innerHTML = Response.status },
    (error) => { console.log(error); toast.error("Something Went Wrong!!"); status2.innerHTML = error }
  )

}

const GetSpecificCourse = () => {
  let status2 = document.getElementById("status1");
  console.log("Your Specific Function is calling...")
  const id = prompt("Enter Course id that you want to access")
  axios.get(`${base_url}/courses/${id}`).then(
    (Response) => { console.log("Your Specific Course:", Response.data); toast.success("Your Specific Course is loading.."); status2.innerHTML = Response.status },
    (error) => { console.log(error); toast.error("Something went wrong!!!"); status2.innerHTML = error }


  )
}


const sendDataToServer = (email) => {
  const status2=document.getElementById("status1")
 console.log("Your Send Data To Server function is loading.....")
 console.log("Email is :" , email)

 var formData = new FormData();
  formData.append('email' , email )

  axios.post( `${base_url}/sendEmail`, formData    ).then(

    (Response) => { console.log(Response.data); toast.success("Email has been adding to the server...") ; status2.innerHTML=Response.status  },
    (error) => { console.log(error); toast.error("Something Went Wrong!! ") ; status2.innerHTML=error    }
  )

}


const MakeLabel = () => {

  const [emailError, setEmailError] = useState('')

  const [email,setEmail]=useState('')


  const validateEmail = (e) => {
   const email=e.target.value
   const printEmail=document.getElementById("email-id")
    
    var btn = document.getElementById("submit")
    var mess = document.getElementById("detail")



    if (validator.isEmail(email) && email.charAt(email.length - 1) == 'm') {
      setEmailError('Valid Email')
       sendDataToServer(email);
      

      btn.disabled = "";
      mess.style.color = "green"
      

      printEmail.innerHTML=email




    } else {
      setEmailError('Enter valid Email!')
      btn.disabled = "disabled"
      mess.style.color = "red"
      printEmail.innerHTML=""

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


         
          <Tooltip data-testid="tooltip" title="Please Enter Email to remove from Suppression">
            <IconButton>
              <div style={{ width: '28px', display: 'inline-block', color: 'green',marginTop:'1px' }}>
                <Info />
              </div>

            </IconButton>
          </Tooltip>

          





    
          
            <div className="my-4 mx-1" style={{ display: 'inline-block', width: '450px',marginTop:'300px' }}>

              <Input onChange={(e) => setEmail(e.target.value)    }
                id="exampleEmail"
                data-testid="input-box"
                placeholder="Enter Email"
                type="email"
                value={email} />
                


             
            </div>


            <Container className="text-center mt-1">
              <button data-testid="submit" onClick={()=>sendDataToServer(email)}   type="submit" className="btn btn-primary"  id="submit" >Submit</button>
              <button onClick={FetchDataFromServer} className="btn btn-primary mx-2 " id="fetch" >Fetch Data from Server</button>
              <button onClick={DeleteDataFromServer} className="btn btn-danger mx-2 " id="delete" >Delete Data from Server</button>
              <button onClick={GetSpecificCourse} className="btn btn-info mx-2 my-3 " id="delete" >Get Specific Course</button>
             
              <ToastContainer position="bottom-center" />
            </Container>
          






        </Container>

        <br />
        <br />


        <span className="my-4 " id="detail" style={{
          fontWeight: 'bold',
          marginLeft: '320px',

          color: 'red',

        }}>{emailError} </span>


       <h4> HTTP Status:<span className="my-4 " id="status1" style={{
          fontWeight: 'bold',
          

          color: 'green',

        }} />   </h4> 

  <br/>
  <br/>
  <br/>
  <hr/>

<h3>Your Valid Input Email: <span className="my-4 " id="email-id" style={{
          fontWeight: 'bold',
         

          marginTop:'200px' ,

          color: 'purple',

        }} />  </h3>





      </div>

    </>
  );

}

export default MakeLabel

