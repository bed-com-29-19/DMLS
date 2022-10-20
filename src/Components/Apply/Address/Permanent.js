import React, {useState} from 'react'

function Permanent(props) {
    const userAddressId = props.id;

    const[villageName, setVillageName] = useState("");
    const[streetNo, setStreetNo] = useState("");
    const[familyName, setFamilyName] = useState("");
    const[postalAddress, setPostalAddress] = useState("");
    const[popularPlaceNearHome, setPopularPlaceNearHome] = useState("");

    const [errors, setFormErros] = useState({});


    const [msg, setMsg] = useState(false);


    function sendPermanentAddressData() {
        let permanentAddressData = {userAddressId, villageName, streetNo, familyName, postalAddress, popularPlaceNearHome};

        setFormErros(validate(permanentAddressData));


        // calling the permanent Api
        fetch("https://dmls-online.herokuapp.com/api/permanentAddress/add", {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify(permanentAddressData)
        }).then((res) => {
            console.warn("response", res);
            setMsg(true);
        })
    }

     // validation
     const validate = (values) => {
        const formErrors = {};

        if (!values.villageName.trim()) {
            formErrors.villageName = "Village name required"
        }

        if (!values.popularPlaceNearHome.trim()) {
            formErrors.popularPlaceNearHome = "lnformation  required"
        }

                      
        return formErrors;
    }


  return (
    <div className="permanent-address-container">
    <h2>PERMANENT ADDRESS DETAILS</h2>

    <form className="form-address">
        <section className="section2">
            <p>
            <label for='villageName' className='label'>village Name&emsp;&nbsp; &nbsp;</label>
            <input
                type="text"
                value = {villageName}
                required
                onChange = {(e) => {setVillageName(e.target.value)}}
                >
            </input>
            <j>{errors.villageName && <small>{errors.villageName}</small>}</j>

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
            <label for='familyName' className='label'>Family Name &emsp; &nbsp;</label>
            <input
                type="text"
                value = {familyName}
                required
                onChange = {(e) => {setFamilyName(e.target.value)}}
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

        <p className="separate">
        <label for='popularPlaceNearHome' className='label'>Popular Place Near Home </label>
        <input
            type="text"
            value = {popularPlaceNearHome}
            onChange = {(e) => {setPopularPlaceNearHome(e.target.value)}}
            >
        </input>
        <j>{errors.popularPlaceNearHome && <small>{errors.popularPlaceNearHome}</small>}</j>

        </p>
    </form>

    <buttons className="address-buttons">
        <button type="button" onClick={sendPermanentAddressData}>SAVE</button>
    </buttons>

    {msg ? (
        <div className="ui"> SAVED SUCCESSFULLY!</div>
    ) : ("")}
</div>
  )
}

export default Permanent