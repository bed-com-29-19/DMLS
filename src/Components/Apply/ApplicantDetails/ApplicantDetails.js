import React, { useState }from 'react';
import "./AppllicantDetails.css";
import LoanNav from "../LoanNav/LoanNav";


function ApplicantDetails() {

    const [fullName, setFullName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [gender, setGender] = useState("");
    const [nationalId, setNationalId] = useState("");
    const [cellPhone, setCellPhone] = useState("");
    const [telPhone, setTelPhone] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");

    const [errors, setFormErros] = useState({});

    const [msg, setMsg] = useState(false);

    function sendPersonalDetails() {
        
        let data1 = {fullName, middleName, otherNames, gender, nationalId, cellPhone, telPhone, email, reason};

        setFormErros(validate(data1));


        // calling the api 
        fetch("https://dmls-online.herokuapp.com/api/applicant/add", {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify(data1)
        }).then((res) => {
            console.warn("response", res);
            setMsg(true);

        }).catch((err) => {
            console.warn(err);
          })
        }

    // validation
    const validate = (values) => {
        const formErrors = {};

        if (!values.nationalId.trim()) {
            formErrors.nationalId = "National ID  is required"
        }

        if (!values.cellPhone.trim()) {
            formErrors.cellPhone = "Phone number is required"
        }

        if (!values.email.trim()) {
            formErrors.email = "Email  is required"
        }

        if (!values.middleName.trim()) {
            formErrors.middleName = "Middle Name is required"
        } 

        if (!values.reason.trim()) {
            formErrors.reason = "Please provide some information "
        }

              
        return formErrors;
    }
    return (
    <main id="personal">
    <LoanNav/>

        <div className="applicant-details-container">
        
        <div className="form-container">
            <form className="details-form">
                <div className="personal-details">
                <h2>Personal Details</h2>

                    <p>
                    <label for='fullName' className='label'>Full Name&emsp; &nbsp;&nbsp;</label>
                    <input
                        type="text"
                        value = {fullName}
                        onChange = {(e) => {setFullName(e.target.value)}}
                        >
                    </input>
                    
                    </p>

                    <p>
                    <label for='middleName' className='label'>Middle Name  </label>
                    <input
                        type="text"
                        value = {middleName}
                        onChange = {(e) => {setMiddleName(e.target.value)}}
                        >
                    </input>
                    <j>{errors.middleName && <small>{errors.middleName}</small>}</j>
                    </p>

                    <p>
                    <label for='otherNames' className='label'>Other Names  </label>
                    <input
                        type="text"
                        value = {otherNames}
                        required
                        onChange = {(e) => {setOtherNames(e.target.value)}}
                        >
                    </input>
                    </p>

                    <p>
                    <label for='gender' className='label'>Gender&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        value = {gender}
                        onChange = {(e) => {setGender(e.target.value)}}
                        >
                    </input>
                    </p>

                    <p>
                    <label for='nationalId' className='label'>National ID&emsp;&nbsp;</label>
                    <input
                        type="text"
                        required
                        value = {nationalId}
                        onChange = {(e) => {setNationalId(e.target.value)}}
                        >
                    </input><br/>

                    <small>Please highlight and copy the National Id provided as it will be used in the upcoming sections!</small>
                    <j>{errors.nationalId && <small>{errors.nationalId}</small>}</j>

                    </p>
                </div>

                <div className="contact-details">
                <h2>Contact Details</h2>
                    <p>
                    <label for='cellPhone' className='label'>CellPhone&emsp;&emsp; </label>
                    <input
                        type="text"
                        required
                        value = {cellPhone}
                        onChange = {(e) => {setCellPhone(e.target.value)}}
                        >
                    </input>
                    <j>{errors.cellPhone && <small>{errors.cellPhone}</small>}</j>

                    </p>

                    <p>
                    <label for='telPhone' className='label'>TelPhone&emsp;&emsp;&nbsp;  </label>
                    <input
                        type="text"
                        value = {telPhone}
                        onChange = {(e) => {setTelPhone(e.target.value)}}
                        >
                    </input>
                    </p>

                    <p>
                    <label for='email' className='label'>Email Address </label>
                    <input
                        type="email"
                        required
                        value = {email}
                        onChange = {(e) => {setEmail(e.target.value)}}
                        >
                    </input>
                    <j>{errors.email && <small>{errors.email}</small>}</j>

                    </p>
                </div>

               <div className="reason">
               <h3>Please Provide full details in the box below pertaining your loan application and reasons
                why you want to get a loan  :</h3>
                    <p>
                    <textarea
                        type="text"
                        value = {reason}
                        placeholder='provide infomation....'
                        onChange = {(e) => {setReason(e.target.value)}}
                        >
                    </textarea>
                    <j>{errors.reason && <small>{errors.reason}</small>}</j>

                    </p>
               </div>
            </form>

            <g>
                <buttons className="address-buttons">
                    <button type='submit' onClick={sendPersonalDetails}>SAVE</button>
                </buttons>
            </g>

            {msg ? (
                <div className="ui"> SAVED SUCCESSFULLY!</div>
            ) : ("")}

        </div>
        
        </div>
        <a href="#personal" className="up">Go up!</a>
        <LoanNav/>
    </main>
  )
}

export default ApplicantDetails;