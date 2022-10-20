import React from 'react';
import {BsFillFileEarmarkPlusFill} from "react-icons/bs";
import {ImSpinner6} from "react-icons/im";
import {FiTrash2} from "react-icons/fi";
import "./FileItem.css";


const FileItem = ({file, deleteFile}) => {
  return (
    <li className="listed-item" key={file.name}>
    <BsFillFileEarmarkPlusFill className="icn"/>
    <p>{file.name}</p>
     
    <div className="actions">
        {file.isUploading && 
            <ImSpinner6 className="fa-spin"/>
        }
        
        {
            !file.isUploading && 
             <FiTrash2 className="last"
                onClick={() => deleteFile(file.name)}
            />

        }
    </div>
    </li>
  ) 
}

export default FileItem