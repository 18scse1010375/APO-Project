import React, { useEffect } from "react";
import { Input, Form, FormGroup, Label, Container, Button } from 'reactstrap';
import { useState } from 'react'


const Sample = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [formError,setFormError]=useState({})
    const [isSubmit,setIsSubmit]=useState(false)
  
    const submit=(e)=>{
      e.preventDefault();
      console.log("Your form is submitting");
       setTitle("")
      setDesc("")
        setFormError(validate(title,desc))
          setIsSubmit(true)
      
    }

    useEffect( ()=>{
        console.error(formError)
        if(Object.keys(formError).length==0 && isSubmit){
            console.log(title,desc)

        }
     } , formError  )



    const validate=(title,desc)=>{
        const errors={}
         if(!title)
         {
            errors.title="Title is required!!"
         }
         if(!desc)
         {
            errors.desc="Description is required!!"
         }
       return errors;

    }
   
  
  
    return (
      <div>
        
        <Container className="mt-4" style={{ width: '550px' }}>
  
         <Form>  
            <FormGroup>
              <Label for="exampleName">
                Course Title
              </Label>
              <Input
             
                id="exampleName"
                placeholder="Enter Course Title"
                type="text" value={title}  onChange={ (e)=>setTitle(e.target.value) }
              />
                 <p style={{color:'red'}}>{formError.title}</p>
  
              <Label for="exampleEmail" className="my-2">
                Course Desciption
              </Label>
              <Input
                id="exampleEmail"
                placeholder="Enter Course Description"
               
                type="text" value={desc} onChange={ (e)=>setDesc(e.target.value) }

              />
              <p style={{color:'red'}}>{formError.desc}</p>
              
              <Container className="mt-4 ">
                <Button  type="submit" color="primary">Submit</Button>
                
  
              </Container>
  
            </FormGroup>
  
          </Form>
  
  
  
        </Container>
      </div>
    )
  }
  
  export default Sample; 
  