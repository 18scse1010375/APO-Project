import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import MakeHeader from "./MakeHeader";
const MakeCard=()=>{
    return(
        <div>
            <MakeHeader/>
        <Card style={{width:'200px',margin:'25px',display:"inline-block"}}>
            <CardBody>
                <CardImg height={91} src="https://cmconsole-dev-va7.stage.cloud.adobe.io/assets/icons/open-document2.svg"></CardImg>
                <CardTitle><h5 style={{paddingLeft:'20px',fontWeight:"lighter",fontSize:"17px",height:'40px',paddingTop:'5px'}}>Email-Suppression</h5></CardTitle>
                <hr/>
                <CardText>Search/View/Create a content from a content source or a content template </CardText>
            </CardBody>
        </Card>


<Card style={{marginTop:'20px',width:'200px',height:'290px',margin:'25px',display:"inline-block"}}>
<CardBody style={{marginTop:'16px'}}>
    <CardImg height={92} style={{paddingTop:'1px'}} src="https://cmconsole-dev-va7.stage.cloud.adobe.io/assets/icons/open-document2.svg"></CardImg>
    <CardTitle><h5 style={{paddingLeft:'35px',fontWeight:"lighter",fontSize:"17px",marginTop:'2px'}}>Bulk-Email-Sent</h5></CardTitle>
    <hr/>
    <CardText>Search/View/Create a content from a content source or a content template </CardText>
</CardBody>
</Card>

</div>




    )
}
export default MakeCard; 
