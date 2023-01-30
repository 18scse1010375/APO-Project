import React from "react";
import { ExcelRenderer, OutTable } from 'react-excel-renderer'

export class TestingExcel extends React.Component {

    state = { rows: "", cols: "" }



    fileHandler = (event) => {
        let fileObj = event.target.files[0];
        ExcelRenderer(fileObj, (err, resp) => {


            if (err) {
                console.log(err);
            }

            else {
                this.setState({ cols: resp.cols, rows: resp.rows });
                console.log(resp.cols)
                console.log(resp.rows)

            }
        }

        )
    }

    render() {

        return (

            <div className="App">

                <header className="App-header">


                    <input accept=".pdf" type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "94px" }}  ></input>

                    <div>
                 { this.state.rows &&  <OutTable data={this.state.rows} columns={this.state.cols} ></OutTable> }
                    </div>



                </header>




            </div>

        )
    }



}

export default TestingExcel;