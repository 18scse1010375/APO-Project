import React from "react";
import Email from '@spectrum-icons/workflow/Email';
import bulk from '@spectrum-icons/workflow/EmailGear'

import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import MakeHeader from "./MakeHeader";
const MakeCard=()=>{
    return(
        <div>
           
            <MakeHeader/>
        <Card className="text-center" style={{width:'200px',margin:'32px',display:"inline-block",height:'344px'}}>
            <CardBody>

                <div className="text-center mx-4 my-2" style={{fontSize:'25px' , width:'125px'   }}> 
                    
                    <Email/>  
                   
                </div>
               
                <CardTitle><h4 style={{paddingLeft:'20px',fontWeight:"lighter",fontSize:"17px",height:'40px',paddingTop:'5px'}}>Email-Suppression</h4></CardTitle>
                <hr/>
                
                <CardText>Search/View/Create a content from a content source or a content template </CardText>
            </CardBody>
        </Card>


<Card style={{marginTop:'34px',width:'200px',height:'343px',margin:'25px',display:"inline-block"}}>
<CardBody style={{marginTop:'8px'}}>
    <CardImg className="text-center mx-4 " style={{width:'125px',marginBottom:'15px'}} src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_EmailGear_18_N.svg"></CardImg>
    <CardTitle><h4 style={{paddingLeft:'35px',fontWeight:"lighter",fontSize:"17px",paddingBottom:'12px'}}>Bulk-Email-Sent</h4></CardTitle>
    <hr/>
    <CardText className="text-center">Search/View/Create a content from a content source or a content template </CardText>
</CardBody>
</Card>

</div>




    )
}
export default MakeCard; 
