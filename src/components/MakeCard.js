/* eslint-disable no-undef */
import React from "react";
import Email from '@spectrum-icons/workflow/Email';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MakeCardStyle from "./MakeCardStyle.css"
import { Card, CardBody, CardImg, CardText, CardTitle, ListGroup } from "reactstrap";
import MakeHeader from "./MakeHeader";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import { ListGroupItem } from "reactstrap";



const MakeCard = () => {
    return (
        <div>
            <MakeHeader />
            <Card className="text-center main-card-1" data-testid="card1" >
                <CardBody>
                    <div data-testid="Email-Icon" className="text-center mx-4 my-2 email-icon" >
                        <Email />
                    </div>
                    {/* <CardTitle> <h4 data-testid="email" className="email-text"><Link data-testid="email-link" to="/email-suppresion">Email-Suppression</Link></h4>  </CardTitle> */}
                    {/* <CardTitle> <Link to="/email-suppresion"><button  type='button'  className="btn  btn-info">Email-Suppression</button></Link>    </CardTitle> */}
                    <CardTitle>


                        <ListGroup>
                            <Link id="email-link" data-testid="email-link" className="list-group-item-action " tag="a" to="/email-suppresion"  style={{ textDecoration: 'none' }}>Email-Suppression </Link>

                        </ListGroup>




                    </CardTitle>
                    <hr />

                    <CardText>Search/View/Create a content from a content source or a content template </CardText>
                </CardBody>
            </Card>

            <Card className="main-card-2" data-testid="card2">
                <CardBody className="card-body-2">
                    <CardImg data-testid="bulk-email-icon" className="text-center mx-4 bulk-image" src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_EmailGear_18_N.svg"></CardImg>
                    {/* <CardTitle><h4 className="bulk-text">   <Link data-testid="bulk-email-link" to="/bulk-email-sent">Bulk-Email-Sent</Link>   </h4></CardTitle> */}
                    <CardTitle>
                    <ListGroup>
                            <Link data-testid="bulk-email-link"    id="bulk-text"  className="list-group-item-action" tag="a" to="/bulk-email-sent"  style={{ textDecoration: 'none' }}>Bulk-Email-Sent </Link>

                        </ListGroup>
                        </CardTitle>
                    
                    
                    <hr />
                    <CardText className="text-center">Search/View/Create a content from a content source or a content template </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default MakeCard; 
