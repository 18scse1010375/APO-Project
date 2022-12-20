import React from "react";
import { Input, Form, FormGroup, Label, Container, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MakeHeader from "./MakeHeader";

const MakeLabel = () => {

  const f1 = () => toast.success("Successfully Added")

  return (
    <div>
      <MakeHeader />
      <Container className="mt-4" style={{ width: '550px' }}>

        <Form>
          <FormGroup>
            <Label for="exampleName">
              Name
            </Label>
            <Input
              id="exampleName"
              placeholder="Enter Name"
              type="text"
            />

            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              placeholder="Enter Email"
              type="email"
            />

            <Container className="text-center mt-4">
              <Button onClick={f1} color="primary">Submit</Button>
            </Container>

          </FormGroup>

        </Form>

        <ToastContainer />

      </Container>
    </div>
  )
}

export default MakeLabel; 
