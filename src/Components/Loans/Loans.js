import React, { useState} from 'react';
import ApplicantDetails from '../Apply/ApplicantDetails/ApplicantDetails';
import Address from '../Apply/Address/Address';
import Loan from '../Apply/Loan/Loan';
import File from '../Apply/File/Files';
import ApplyHome from '../Apply/ApplyHome/ApplyHome';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Loans() {
  
    return (
    <div>
            <ApplyHome/>
            <ApplicantDetails/>
            <Loan/>
            <Address/>
            <File/>
    
    </div>
  )
}
