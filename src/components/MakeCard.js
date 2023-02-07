import React from "react";
import Email from '@spectrum-icons/workflow/Email';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MakeCardStyle from "./MakeCardStyle.css"
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import MakeHeader from "./MakeHeader";

const MakeCard = () => {
    return (
        <div>
            <MakeHeader />
            <Card className="text-center main-card-1"  >
                <CardBody>
                    <div className="text-center mx-4 my-2 email-icon" >
                        <Email />
                    </div>
                    <CardTitle> <h4 data-testid="email" className="email-text">Email-Suppression</h4>  </CardTitle>
                    <hr />

                    <CardText>Search/View/Create a content from a content source or a content template </CardText>
                </CardBody>
            </Card>

            <Card className="main-card-2">
                <CardBody className="card-body-2">
                    <CardImg className="text-center mx-4 bulk-image" src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_EmailGear_18_N.svg"></CardImg>
                    <CardTitle><h4 className="bulk-text"> Bulk Emails </h4></CardTitle>
                    <hr />
                    <CardText className="text-center">Search/View/Create a content from a content source or a content template </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default MakeCard; 
