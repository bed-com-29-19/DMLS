import React, { useState} from 'react';
import "./Loan.css";
import LoanNav from "../LoanNav/LoanNav";


function Loan() {
    const data = [{id: 1, name:"Dmls GP loans"},
            {id:2, name:"Dmls farmers onight loans"},
            {id:3, name:"Dmls capital startup loans"},
            {id:4, name:"Dmls coorpolate loans"}]

    const[loanName, setLoanName] = useState("");
    const[loanId, setLoanId] = useState("");
    const[loanAmount, setLoanAmount] = useState("");
    const[loanPeriod, setLoanPeriod] = useState("");
    const[interest, setInterest] = useState("");
    const[amountToPayInInstallment, setAmountToPayInInstallment] = useState("");
    const[totalRepaymentAmount, setTotalRepaymentAmount] = useState("");
    const[dateGranted, setDateGranted] = useState("");
    const[dateEnd, setDateEnd] = useState("");
    const[collateral1, setCollateral1] = useState("");
    const[collateral2, setCollateral2] = useState("");

    const [errors, setFormErros] = useState({});

    const [msg, setMsg] = useState(false);


    const onChangeComboBox = (e) => {
        const selectedName = e.target.value;
        setLoanName(selectedName);
        console.log(selectedName);
    };
    

    function sendLoanDetails() {
        

        let loanData = {loanName,loanId, loanAmount, loanPeriod, interest,
            amountToPayInInstallment, totalRepaymentAmount, dateGranted,
            dateEnd, collateral1, collateral2};

            setFormErros(validate(loanData));

         // calling the loan Api
         fetch("https://dmls-online.herokuapp.com/api/loan/add", {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify(loanData)
        }).then((res) => {
            console.warn("response", res);
            setMsg(true);
        })
    }

    // validation
    const validate = (values) => {
        const formErrors = {};

        if (!values.loanName.trim()) {
            formErrors.loanName = "loan category is required"
        }

        if (!values.loanId.trim()) {
            formErrors.loanId = "loanId  is required"
        }

        if (!values.loanPeriod.trim()) {
            formErrors.loanPeriod = "loan period  is required"
        }

        if (!values.interest.trim()) {
            formErrors.interest = "Interest  is required"
        }

        if (!values.collateral1.trim()) {
            formErrors.collateral1 = "collateral information is required"
        } 

        if (!values.collateral2.trim()) {
            formErrors.collateral2 = "collateral information is required"
        }

              
        return formErrors;
    }
    


  return (
    <main id="loan">
    <LoanNav/>

        <div className="loan-container">

        <h2>LOAN DETAILS</h2>
        <form className="loan-details">
        <small>In the loan id field paste your national Id</small>
            <p>
            <label for='loanId' className='label'>Loan Id &nbsp;&nbsp;</label>
            <input
            required
                type="text"
                value = {loanId}
                onChange = {(e) => {setLoanId(e.target.value)}}
                >
            </input>
            <j>{errors.loanId && <small>{errors.loanId}</small>}</j>

            </p>    
            
            <p>
            <label for='loanName' className='label'>Loan Name &nbsp;&nbsp;</label>
            <select onChange={(e) => {onChangeComboBox(e)}}>
            required
                {data.map((d) => 
                    <option key={d.id} value={d.name}>{d.name}</option>  
                )}
            </select>
            <j>{errors.loanName && <small>{errors.loanName}</small>}</j>
            </p>    

            <p>
            <label for='loanAmount' className='label'>Amount Of Loan &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {loanAmount}
                onChange = {(e) => {setLoanAmount(e.target.value)}}
                >
            </input>
            </p> 

            <p>
            <label for='loanPeriod' className='label'>Loan Period &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {loanPeriod}
                onChange = {(e) => {setLoanPeriod(e.target.value)}}
                >
            </input>
            <j>{errors.loanPeriod && <small>{errors.loanPeriod}</small>}</j>

            </p>

            <p>
            <label for='interest' className='label'>Interest &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {interest}
                onChange = {(e) => {setInterest(e.target.value)}}
                >
            </input>
            <j>{errors.interest && <small>{errors.interest}</small>}</j>
            </p>

            <p className="p1">
            <label for='amountToPayInInstallment' className='label'>Amount To Pay In Installment &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {amountToPayInInstallment}
                onChange = {(e) => {setAmountToPayInInstallment(e.target.value)}}
                >
            </input>
            </p>

            <p>
            <label for='totalRepaymentAmount' className='label'>Total Repayment Amount &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {totalRepaymentAmount}
                onChange = {(e) => {setTotalRepaymentAmount(e.target.value)}}
                >
            </input>
            </p>

                <p>
                <label for='dateGranted' className='label'>Date Granted &nbsp;&nbsp;</label>
                <input
                    type="text"
                    value = {dateGranted}
                    onChange = {(e) => {setDateGranted(e.target.value)}}
                    >
                </input>
                </p>

                <p>
                <label for='dateEnd' className='label'>Date End &nbsp;&nbsp;</label>
                <input
                    type="text"
                    value = {dateEnd}
                    onChange = {(e) => {setDateEnd(e.target.value)}}
                    >
                </input>
                </p>
         

            <p className="p1">
            <label for='collateral1' className='label'>Collateral 1 if not paid &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {collateral1}
                required
                onChange = {(e) => {setCollateral1(e.target.value)}}
                >
            </input>
            <j>{errors.collateral1 && <small>{errors.collateral1}</small>}</j>

            </p>

            <p>
            <label for='collateral2' className='label'>Collateral 2 if not paid &nbsp;&nbsp;</label>
            <input
                type="text"
                value = {collateral2}
                required
                onChange = {(e) => {setCollateral2(e.target.value)}}
                >
            </input>
            <j>{errors.collateral2 && <small>{errors.collateral2}</small>}</j>

            </p>
        </form>

        <buttons className="address-buttons">
                    <button type="button" onClick={sendLoanDetails}>SAVE</button>
                </buttons>
        </div>

        {msg ? (
            <div className="ui"> SAVED SUCCESSFULLY!</div>
        ) : ("")}
        

        <LoanNav/>
    </main>
  )
}

export default Loan