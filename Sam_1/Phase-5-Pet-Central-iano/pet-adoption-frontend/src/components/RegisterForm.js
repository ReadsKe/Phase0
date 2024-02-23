import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterForm(props) {
   // State variables to store registration data
   const [newUsername, setNewUsername] = useState("");
   const [newEmail, setNewEmail] = useState("");
   const [newPhoneNumber, setNewPhoneNumber] = useState("");
   const [newPassword, setNewPassword] = useState("");
 
   // Function to handle registration form submission
   const handleRegistration = async (event) => {
     event.preventDefault();
     
     // Prepare the registration data to send to the backend
     const registrationData = {
       username: newUsername,
       email: newEmail,
       phoneNumber: newPhoneNumber,
       password: newPassword
     };
 
     try {
       // Send the registration request to the backend
       const response = await fetch('/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(registrationData)
       });
 
       if (response.ok) {
         // If registration is successful, you can redirect the user to another page or perform other actions
         console.log('Registration successful');
       } else {
         // Handle unsuccessful registration
         console.error('Registration failed');
       }
     } catch (error) {
       console.error('Error registering user:', error);
     }
   };
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c231d1601a0bf452a3eb884d3009058799fff524307c75158b4f9ff59970159?apiKey=e8788cda399a4c35af5fd104dca3ff3f&"
                className="img"
                alt=""
              />
               
            </div>
            <div className="div-6">
             <Link to='/'><div className="div-5">Home</div></Link>
             <Link to='/register'> <div className="div-7">Register</div></Link>
             <Link to='/login'><div className="div-8">Login</div></Link>
            </div>
          </div>
          <div className="div-9">
            <div className="div-10">
              <div className="div-11">
                <div className="div-12">New user? Create an account! </div>
                <div className="div-13">Username</div>
              </div>
              <input type="text" value={newUsername} placeholder="Username" onChange={(e) => setNewUsername(e.target.value)}   required />
              <div className="div-15">Email</div>
              <input type="email" value={newEmail} placeholder="Email" onChange={(e) => setNewEmail(e.target.value)}   required />
              <div className="div-17">Phone Number</div>
              <input type="tel" value={newPhoneNumber} placeholder="Phone Number"  onChange={(e) => setNewPhoneNumber(e.target.value)}  required  />
              <div className="div-19">Password</div>
              <input type="password" value={newPassword} placeholder="Enter your password"  onChange={(e) => setNewPassword(e.target.value)}   required />
              <div className="button-container">
  <button className="div-21" onClick={handleRegistration}>Register</button>
  <div className="div-22">Already registered? Kindly log in</div>
  <Link to="/login"><button className="div-21">Login</button></Link>
</div>

            </div>
          </div>
        </div>
        <div className="div-24">
          <div className="div-25">
            <div className="column">
              <div className="div-26">
                <div className="div-27">About Company </div>
                <div className="div-28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                  <br />
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-29">
                <div className="div-30">Contact Details </div>
                <div className="div-31">
                  Location Address
                  <br />
                  Petcentral@gmail.com
                  <br />
                  Phone Number{" "}
                </div>
                <div className="div-32">
                  Copyright @petcentral All rights reserved{" "}
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className="div-33">
                <div className="div-34">Official Working Hours </div>
                <div className="div-35">
                  Mon- Fri 8am- 7pm <br />
                  Sat 8am-12pm <br />
                  Sunday closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px; /* Adjust margin-top as needed */
        }
        .div {
          background-color: #daeced;
          display: flex;
          padding-top: 39px;
          flex-direction: column;
        }
        .div-2 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1168px;
          flex-direction: column;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-3 {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          font-size: 20px;
          color: #fff;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-4 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.39;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex-grow: 1;
          flex-basis: 0%;
        }
        .div-5 {
          font-family: Inter, sans-serif;
          border-radius: 30px;
          background-color: #2a98b0;
          flex-grow: 1;
          justify-content: center;
          margin: auto 0;
          padding: 23px 30px;
        }
        @media (max-width: 991px) {
          .div-5 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-6 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
          }
        }
        .div-7 {
          font-family: Inter, sans-serif;
          border-radius: 30px;
          background-color: #2a98b0;
          justify-content: center;
          padding: 21px 32px;
        }
        @media (max-width: 991px) {
          .div-7 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-8 {
          font-family: Inter, sans-serif;
          border-radius: 30px;
          background-color: #2a98b0;
          justify-content: center;
          padding: 21px 24px;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-9 {
          border-radius: 20px;
          background-color: #faf8f8;
          align-self: center;
          display: flex;
          margin-left: 67px;
          width: 601px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          color: #000;
          padding: 46px 60px 22px;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-10 {
          display: flex;
          width: 370px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          display: flex;
          flex-direction: column;
          padding: 0 44px 0 19px;
        }
        @media (max-width: 991px) {
          .div-11 {
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-12 {
          font: 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
          }
        }
        .div-13 {
          margin-top: 19px;
          font: 16px Inter, sans-serif;
        }
        .div-14 {
          border-radius: 10px;
          background-color: #d9d9d9;
          margin-top: 10px;
          height: 32px;
        }
        .div-15 {
          align-self: start;
          margin: 14px 0 0 19px;
          font: 16px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-left: 10px;
          }
        }
        .div-16 {
          border-radius: 10px;
          background-color: #d9d9d9;
          margin-top: 10px;
          height: 32px;
        }
        .div-17 {
          align-self: start;
          margin: 14px 0 0 19px;
          font: 16px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-18 {
          border-radius: 10px;
          background-color: #d9d9d9;
          margin-top: 10px;
          height: 32px;
        }
        .div-19 {
          align-self: start;
          margin-left: 19px;
          font: 16px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-left: 10px;
          }
        }
        .div-20 {
          border-radius: 10px;
          background-color: #d9d9d9;
          margin-top: 10px;
          height: 32px;
        }
        .div-21 {
          justify-content: center;
          border-radius: 30px;
          background-color: #2a98b0;
          align-self: center;
          margin-top: 7px;
          color: #fff;
          padding: 9px 22px;
          font: 12px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-22 {
          align-self: center;
          margin-top: 11px;
          font: 14px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          justify-content: center;
          border-radius: 30px;
          background-color: #2a98b0;
          align-self: center;
          margin-top: 11px;
          color: #fff;
          padding: 9px 30px;
          font: 12px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-24 {
          background-color: rgba(217, 217, 217, 1);
          margin-top: 81px;
          width: 100%;
          padding: 35px 10px 35px 71px;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            padding-left: 20px;
            margin-top: 40px;
          }
        }
        .div-25 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-25 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 32%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-26 {
          display: flex;
          flex-direction: column;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-26 {
            margin-top: 40px;
          }
        }
        .div-27 {
          align-self: center;
          white-space: nowrap;
          font: 700 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-27 {
            white-space: initial;
          }
        }
        .div-28 {
          text-align: center;
          margin-top: 8px;
          font: 400 16px Inter, sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-29 {
          display: flex;
          margin-top: 8px;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
          color: #000;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-29 {
            margin-top: 40px;
          }
        }
        .div-30 {
          white-space: nowrap;
          font: 700 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-30 {
            white-space: initial;
          }
        }
        .div-31 {
          font-family: Inter, sans-serif;
          margin-top: 15px;
        }
        .div-32 {
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin-top: 31px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-32 {
            white-space: initial;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 28%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-33 {
          display: flex;
          flex-direction: column;
          font-size: 20px;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-33 {
            margin-top: 40px;
          }
        }
        .div-34 {
          font-family: Inter, sans-serif;
          font-weight: 700;
          align-self: center;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-34 {
            white-space: initial;
          }
        }
        .div-35 {
          font-family: Inter, sans-serif;
          font-weight: 400;
          margin-top: 17px;
        }
      `}</style>
    </>
  );
}

export default RegisterForm
