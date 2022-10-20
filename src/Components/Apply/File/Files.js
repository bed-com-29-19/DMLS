import React, { useState }from 'react';
import "./Files.css"
import {BsFillFileEarmarkPlusFill} from "react-icons/bs";
import file from "../../../Components/simple.pdf";
import FileList from "./FileList";
import axios from 'axios';

import LoanNav from "../LoanNav/LoanNav";
// import Logo from "../../images/logo.jpg";

const Files = ({files, setFiles, removeFile}) => {
  const [msg, setMsg] = useState(false);

  const uploadedHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    file.isUploading = true;

    setFiles([...files, file])

    const formData = new FormData();
    formData.append("file",file);


    //call an api
    fetch("https://dmls-online.herokuapp.com/api/form/upload" ,{
      method:"POST",
      body:formData,
    })
    .then((res) => {
      file.isUploading = false;
      setFiles([...files, file])
      setMsg(true);
    })
    .catch((err) => {
      removeFile(file.name)
    })
  };

  return (
    <main>
    <LoanNav/>

    {/* <img alt="logo" src={Logo}></img> */}
      <div className="uploader">

        <div className='file-info'>
          <h4>To finalize filling your form, Please click the download
           button below to download  a Min form.</h4>
           
          <div className="downloader" >
          <a href={file} download={file}>       
            <button type="submit">Download Form</button>
          </a>
          </div>

           <h4>You can submit the filled form by clicking the Upload button. Please
           make sure the file being uploaded is in one of the format specified.</h4>

           <h4 className="h4">NOTE: BEFORE YOU SUBMIT YOUR FILE RENAME YOUR FILE IN THIS FORMAT : firstName_middleName_lastName_df</h4>

        </div>
        <div className="file-card">
        <form type="form" className="file-inputs" >
          <input type="file" className="inp" onChange={uploadedHandler}/>
          <button>
            <i>
             <BsFillFileEarmarkPlusFill className="icn"/>
            </i>
            Upload
          </button>
        </form>
        
        <p className="main">Recommended File Formats</p>
        <p className="info">PDF, JPG, PNG</p>
        </div>

        <FileList files={files} removeFile={removeFile}/>

        {msg ? (
          <div className="ui"> SAVED SUCCESSFULLY!</div>
      ) : (<div className="ui"> WAITING TO UPLOAD FILE...</div>)}
      </div>

    </main>
  )
}

export default Files