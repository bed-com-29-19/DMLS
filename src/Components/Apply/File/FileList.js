import axios from 'axios';
import React from 'react'
import FileItem from "./FileItem";

const FileList = ({files, removeFile}) => {
    const deleteFileHandler = (n_ame) => {
        console.log(n_ame);
        
        fetch("https://dmls-online.herokuapp.com/api/form/delete/",{
        method:"DELETE"
        }).then((_res) => {removeFile(n_ame)})
        .catch((err) => {removeFile(n_ame)})
    }
  return (
    <ul className="file-list">
        {
            files && 
            files.map(f => <FileItem
                key={f.name}
                file = {f} 
                deleteFile= {deleteFileHandler}
            />)
        }
    </ul>
  )
}

export default FileList