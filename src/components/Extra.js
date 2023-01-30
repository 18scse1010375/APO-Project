import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Extra = () => {
const props = {
beforeUpload: file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
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
  console.log(info.fileList);
},
 };
return (
    <Upload {...props}>
       <Button onChange={(e)=>console.log("files are :" , e.target.files[0])} icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
     );
}

export default Extra