import React, { useState, useEffect} from 'react';
import "./SingIn.css";
import {useNavigate} from 'react-router-dom';


export default function SingIn({authenticate}) {
    const navigate = useNavigate();

    const initialValues = {
        usernameOrEmail: '',
        password: ''
   }


    function goToApply() {  
        authenticate();
        navigate("/ApplyHome")
        setIsSubmited(true);
    }


    let usernameOrEmail = "";
    let password= "";

    const [formValues, setFormValues] = useState(initialValues); 
    const [errors, setFormErros] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        setFormErros(validate(formValues));
        signingIn();
    };

    function signingIn() {

        password = formValues.password;
        usernameOrEmail = formValues.usernameOrEmail;


       if(password.length > 5) {
        let dataSingIn = { usernameOrEmail, password};
        
        // calling the api 
        fetch("https://auth-dmls.herokuapp.com/api/auth/signin", {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify(dataSingIn)
        }).then((res) => {
            if (res.status !== 401) {
                console.warn("response", res);
                setIsSubmited(true);
                goToApply();
            }

            else {
                setIsSubmited(false);
            }            
        }).catch((err) => {
            console.warn(err);
          })
        }
       }

        useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmited) {
                console.log(formValues);
    
            }
        }, [errors]);

        const validate = (values) => {
            const formErrors = {};
        
            if (!values.usernameOrEmail.trim()) {
                formErrors.usernameOrEmail = "email is required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.usernameOrEmail)) {
                formErrors.usernameOrEmail = 'email address is not valid'
            }
    
            if (!values.password.trim()) {
                formErrors.password = "password is required"
            } else if (values.password.length < 6) {
                formErrors.password = "password needs to be 6 charecters or more"
            }
           
            return formErrors;
        }

  return (
    <div className="main-container">
        <div className="content"> 
            <form className="signin" onSubmit={handleSubmit}>             

                <div className="first1">
                    <input
                        type="email"  placeholder='Your Email...' name='usernameOrEmail'
                        value = {formValues.usernameOrEmail}
                        onChange={handleChange}
                     />
                     <j>{errors.usernameOrEmail && <small>{errors.usernameOrEmail}</small>}</j>
                </div>

                <div className="first1">
                    <input 
                        type="password"  placeholder='Type In Your Password...' name='password' 
                        value = {formValues.password}
                        onChange={handleChange}
                    />
                    <j>{errors.password && <small>{errors.password}</small>}</j>
                </div>

                <div className="created">
                    <button>Sing In</button>
                </div>
            </form>

            <small>You do not have an account? <span onClick={() => {navigate("/SignUp")}}>sing up</span></small>
        </div>
    </div>
  )
}
