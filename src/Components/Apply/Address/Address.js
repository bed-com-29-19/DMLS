import React, { useState }from 'react';
import Permanent from "./Permanent";
import "./Address.css"
import LoanNav from "../LoanNav/LoanNav";
// import Logo from "../../images/logo.jpg";

function Address() {
    const [userAddressId,setUserAddressId] = useState("");
    const [traditionalAuthority, setTraditionalAuthority] = useState("");
    const [location, setLocation] = useState("");
    const [streetNo, setStreetNo] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [postalAddress, setPostalAddress] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [popularPlaceNearHome, setPopularPlaceNearHome] = useState("");

    const [errors, setFormErros] = useState({});


    const [msg, setMsg] = useState(false);

    function sendCurrentAddressdetails () {
        let currentAddressData = {userAddressId, traditionalAuthority,
            location, streetNo, houseNumber, postalAddress, familyName,
            districtName, popularPlaceNearHome};

            setFormErros(validate(currentAddressData));


        // calling the currentAddress Api
        fetch("https://dmls-online.herokuapp.com/api/currentAddress/add", {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify(currentAddressData)
        }).then((res) => {
            console.warn("response", res);
            setMsg(true);
        })
    }

    // validation
    const validate = (values) => {
        const formErrors = {};

        if (!values.userAddressId.trim()) {
            formErrors.userAddressId = "Please paste or type in your national Id"
        }

        if (!values.popularPlaceNearHome.trim()) {
            formErrors.popularPlaceNearHome = "lnformation  required"
        }

                      
        return formErrors;
    }


  return (
    <main>
    <LoanNav/>
    {/* <img alt="logo" src={Logo}></img> */}
        <div className="address-container">
            <div className="current-address-container">
                <h2>CURRENT ADDRESS DETAILS</h2>

                <form className="form-address">
                    <section className="section1">
                        <p>
                        <label for='userAddressId' className='label'>Address Id </label>
                        <input
                            type="text"
                            value = {userAddressId}
                            required
                            onChange = {(e) => {setUserAddressId(e.target.value)}}
                            >
                        </input><br/>

                        <small>The address id is your national Id!</small>
                        <j>{errors.userAddressId && <small>{errors.userAddressId}</small>}</j>

                        </p>

                        <p>
                        <label for='traditionalAuthority' className='label'>T/A </label>
                        <input
                            type="text"
                            value = {traditionalAuthority}
                            onChange = {(e) => {setTraditionalAuthority(e.target.value)}}
                            >
                        </input>
                        </p>
                    </section>

                    <section className="section2">
                        <p>
                        <label for='location' className='label'>Location&emsp;&emsp;&emsp;&nbsp;</label>
                        <input
                            type="text"
                            value = {location}
                            onChange = {(e) => {setLocation(e.target.value)}}
                            >
                        </input>
                        </p>

                        <p>
                        <label for='streetNo' className='label'>Street Number &emsp;</label>
                        <input
                            type="text"
                            value = {streetNo}
                            onChange = {(e) => {setStreetNo(e.target.value)}}
                            >
                        </input>
                        </p>

                        <p>
                        <label for='houseNumber' className='label'>House Number </label>
                        <input
                            type="text"
                            value = {houseNumber}
                            onChange = {(e) => {setHouseNumber(e.target.value)}}
                            >
                        </input>
                        </p>
                        
                        <p>
                        <label for='postalAddress' className='label'>Postal Address&emsp;</label>
                        <input
                            type="text"
                            value = {postalAddress}
                            onChange = {(e) => {setPostalAddress(e.target.value)}}
                            >
                        </input>
                        </p>        
                    </section>

                    <section className="section3">
                        <p>
                        <label for='familyName' className='label'>Family Name &emsp;</label>
                        <input
                            type="text"
                            value = {familyName}
                            onChange = {(e) => {setFamilyName(e.target.value)}}
                            >
                        </input>
                        </p>

                        <p>
                        <label for='districtName' className='label'>Name Of District &nbsp;</label>
                        <input
                            type="text"
                            value = {districtName}
                            onChange = {(e) => {setDistrictName(e.target.value)}}
                            >
                        </input>
                        </p>
                    </section>

                    <p className="separate">
                    <label for='popularPlaceNearHome' className='label'>Popular Place Near Home </label>
                    <input
                        type="text"
                        value = {popularPlaceNearHome}
                        required
                        onChange = {(e) => {setPopularPlaceNearHome(e.target.value)}}
                        >
                    </input>
                    <j>{errors.popularPlaceNearHome && <small>{errors.popularPlaceNearHome}</small>}</j>

                    </p>
                </form>

                <buttons className="address-buttons">
                    <button type="button" onClick={sendCurrentAddressdetails}>SAVE</button>
                </buttons>
            </div>

            {msg ? (
                <div className="ui"> SAVED SUCCESSFULLY!</div>
            ) : ("")}

           <Permanent id={userAddressId}/>

        </div>
        <LoanNav/>
    </main>
  )
}

export default Address