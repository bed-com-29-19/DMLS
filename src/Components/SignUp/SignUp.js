import React, { useState, useEffect } from 'react';
import "./SignUp.css";
import { Navigate, useNavigate } from 'react-router-dom';


function SignUp() {
    let username = "";
    let name = "";
    let password = "";
    let email = "";

    const initialValues = {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        password: '',
        password2: ''
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setFormErros] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErros(validate(formValues));
        signingUp();

    };

    function signingUp() {
        username = formValues.firstName + "" + formValues.lastName;
        name = formValues.firstName + " " + formValues.lastName
        password = formValues.password2;
        email = formValues.email;

        let dataSingUp = { name, username, password, email };

        // calling the api 
        fetch("https://auth-dmls.herokuapp.com/api/auth/signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSingUp)
        }).then((res) => {
            console.warn("response", res);

            if (res.status === 200 || res.status === 201) {
                setIsSubmit(true);
            }

            else {
                setIsSubmit(false);
            }

        }).catch((err) => {
            console.warn(err);
        })
    }


    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(formValues);

        }
    }, [errors]);

    const validate = (values) => {
        const formErrors = {};

        if (!values.firstName.trim()) {
            formErrors.firstName = "first name is required"
        }

        if (!values.lastName.trim()) {
            formErrors.lastName = "last name is required"
        }

        if (!values.email.trim()) {
            formErrors.email = "email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            formErrors.email = 'email address is not valid'
        }

        if (!values.password.trim()) {
            formErrors.password = "password is required"
        } else if (values.password.length < 6) {
            formErrors.password = "password needs to be 6 charecters or more"
        }

        if (!values.password2.trim()) {
            formErrors.password2 = "password  is required"
        } else if (values.password2 !== values.password) {
            formErrors.password2 = "passwords do not match"
        }

        return formErrors;
    }



    const [goToSignIn, setGoToSignIn] = React.useState(false);

    if (goToSignIn) {
        return <Navigate to="/SingIn" />
    }
    return (
        <div className="main-container">
            <div className="header">CREATE  LOAN ACCOUNT </div>
            <div className="content">
                {Object.keys(errors).length === 0 && isSubmit ? (
                    <div className="ui">ACCOUNT CREATED!  Now signIn</div>
                ) : ("")}

                <form className="signup" onSubmit={handleSubmit}>
                    <div className="first2">
                        <div className="cover">
                            <input
                                type="text" placeholder='First Name'
                                name='firstName'
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            <j>{errors.firstName && <small>{errors.firstName}</small>}
                            </j>
                        </div>

                        <div className="cover">
                            <input
                                type="text" placeholder='Last Name'
                                name='lastName'
                                value={formValues.lastName}
                                onChange={handleChange}
                            />

                            <j>{errors.lastName && <small>{errors.lastName}</small>}
                            </j>
                        </div>
                    </div>

                    <div className="middle">
                        <input
                            type="email" placeholder='Valid Email Address...'
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <j>{errors.email && <small>{errors.email}</small>}</j>
                    </div>

                    <div className="first2">
                        <div className="cover">
                            <input
                                type="password"
                                placeholder='Create password..'
                                id="password"
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}

                            />
                            <j>{errors.password && <small>{errors.password}</small>}</j>

                        </div>

                        <div className="cover">
                            <input
                                type="password"
                                placeholder='Confirm password..'
                                id="password2"
                                name='password2'
                                value={formValues.password2}
                                onChange={handleChange}

                            />
                            <j>{errors.password2 && <small>{errors.password2}</small>}</j>

                        </div>

                    </div>

                    <div className="create">
                        <button>Sign Up</button>
                    </div>
                </form>
                <small>Already have an account? 
                    <span onClick={() => { setGoToSignIn(true) }}>Log in</span>
                </small>
            </div>
        </div>
    )
}


export default SignUp