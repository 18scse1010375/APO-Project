import { useState } from "react"
import { ExcelRenderer, OutTable } from 'react-excel-renderer'
import MakeHeader from "./MakeHeader"
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const TestingExcel1 = () => {

    const props = {
        beforeUpload: file => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type=== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 25;
            if (!isLt2M) {
                message.error('Image must smaller than 25MB!');
            }
            return isJpgOrPng && isLt2M ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
            console.log("Test are:", info.fileList);
        },
    };


    const [rows, setRows] = useState("")
    const [cols, setCols] = useState("")

    const fileHandler = (fileObj) => {

        ExcelRenderer(fileObj, (err, resp) => {


            if (err) {
                console.log(err);
            }

            else {
                setRows(resp.rows)
                setCols(resp.cols)

                console.log(`Rows are : ${resp.rows} `)
                console.log(`Rows are : ${resp.cols} `)



            }
        }

        )
    }


    return (
        <div className="App">




            <header className="App-header">
                <Upload {...props}>

                    {/* <input className="form-group "  type="file" onChange={ (e)=>fileHandler(e.target.files[0])  } style={{ "padding": "94px" }}  ></input> */}
                    <Button onChange={(e) => console.log("files are :", e.target.files[0])} icon={<UploadOutlined />}>Upload png only</Button>


                </Upload>

                {/* <div >

                    {rows && <OutTable style={{ paddingLeft: '200px', color: 'purple' }} data={rows} columns={cols} ></OutTable>}

                </div> */}

            </header>

        </div>

    )
}

export default TestingExcel1