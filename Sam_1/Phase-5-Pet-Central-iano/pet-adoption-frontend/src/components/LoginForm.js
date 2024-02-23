import * as React from "react";
import { Link } from "react-router-dom";
import  { useState } from "react";
function LoginForm(props) {
   // State variables to store username and password
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
   // Function to handle form submission
   const handleSubmit = async (event) => {
     event.preventDefault();
     
     // Prepare the login credentials to send to the backend
     const credentials = {
       username: username,
       password: password
     };
 
     try {
       // Send the login request to the backend
       const response = await fetch('/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(credentials)
       });
 
       if (response.ok) {
         // If login is successful, you can redirect the user to another page or perform other actions
         console.log('Login successful');
       } else {
         // Handle unsuccessful login
         console.error('Login failed');
       }
     } catch (error) {
       console.error('Error logging in:', error);
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
                alt=''
              />
          
            </div>
            <div className="div-6">
              <Link to='/'><div className="div-5">Home</div></Link>
              <Link to='/register'><div className="div-7">Register</div></Link>
              <Link to='/login'><div className="div-8">Login</div></Link>
            </div>
          </div>
          <div className="div-9">
            <div className="div-10">New user? Create an account! </div>
            <div className="div-11">Username</div>
            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}  />
            <div className="div-13">Password</div>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
            <button className="div-15" onClick={handleSubmit} type="submit" >Login</button>
            <div className="div-16">Forgot Password?</div>
          </div>
        </div>
        <div className="div-17">
          <div className="div-18">
            <div className="column">
              <div className="div-19">
                <div className="div-20">About Company </div>
                <div className="div-21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                  <br />
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-22">
                <div className="div-23">Contact Details </div>
                <div className="div-24">
                  Location Address
                  <br />
                  Petcentral@gmail.com
                  <br />
                  Phone Number{" "}
                </div>
                <div className="div-25">
                  Copyright @petcentral All rights reserved{" "}
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className="div-26">
                <div className="div-27">Official Working Hours </div>
                <div className="div-28">
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
          font-size: 16px;
          color: #000;
          padding: 48px 72px;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-10 {
          align-self: center;
          font: 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin: 19px 0 0 55px;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-left: 10px;
          }
        }
        .div-12 {
          border-radius: 10px;
          background-color: #d9d9d9;
          align-self: end;
          margin-top: 10px;
          width: 421px;
          max-width: 100%;
          height: 32px;
        }
        .div-13 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-left: 55px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-left: 10px;
          }
        }
        .div-14 {
          border-radius: 10px;
          background-color: #d9d9d9;
          align-self: end;
          margin-top: 10px;
          width: 421px;
          max-width: 100%;
          height: 32px;
        }
        .div-15 {
          justify-content: center;
          border-radius: 30px;
          background-color: #2a98b0;
          align-self: center;
          margin-top: 20px;
          color: #fff;
          padding: 9px 30px;
          font: 12px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-16 {
          text-decoration-line: underline;
          align-self: end;
          margin-top: 22px;
          font: 12px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .div-17 {
          background-color: rgba(217, 217, 217, 1);
          margin-top: 210px;
          width: 100%;
          padding: 35px 10px 35px 71px;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            margin-top: 40px;
            padding-left: 20px;
          }
        }
        .div-18 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-18 {
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
        .div-19 {
          display: flex;
          flex-direction: column;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-top: 40px;
          }
        }
        .div-20 {
          align-self: center;
          white-space: nowrap;
          font: 700 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
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
        .div-22 {
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
          .div-22 {
            margin-top: 40px;
          }
        }
        .div-23 {
          white-space: nowrap;
          font: 700 20px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
          }
        }
        .div-24 {
          font-family: Inter, sans-serif;
          margin-top: 15px;
        }
        .div-25 {
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin-top: 31px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-25 {
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
        .div-26 {
          display: flex;
          flex-direction: column;
          font-size: 20px;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-26 {
            margin-top: 40px;
          }
        }
        .div-27 {
          font-family: Inter, sans-serif;
          font-weight: 700;
          align-self: center;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-27 {
            white-space: initial;
          }
        }
        .div-28 {
          font-family: Inter, sans-serif;
          font-weight: 400;
          margin-top: 17px;
        }
      `}</style>
    </>
  );
}


export default LoginForm;