import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./LoanNav.css";


function LoanNav() {
const navigate0 = useNavigate();
const navigate1 = useNavigate();
const navigate2 = useNavigate();
const navigate3 = useNavigate();
const navigate4 = useNavigate();
const navigate5 = useNavigate();


function existed() {
  navigate5("/SignUp");
  window.location.reload();

}
  return (
    <main>
       
        <nav>
            <ul className="navli">
              <li className='list-item' onClick={() => {navigate0("/ApplyHome")}}>APPLY HOME</li>
              <li className='list-item' onClick={() => {navigate1("/Applicant")}}>START</li>
              <li className='list-item' onClick={() => {navigate2("/Address")}}>ADDRESSES</li>
              <li className='list-item' onClick={() => {navigate3("/Loan")}}>LOAN DETAILS</li>
              <li className='list-item' onClick={() => {navigate4("/Form")}}>Min-FORM UPLOAD</li>
              <li className='list-item' onClick={() => {existed()}}>OUT</li>
            </ul>
        </nav>     

    </main>

  )
}

export default LoanNav

