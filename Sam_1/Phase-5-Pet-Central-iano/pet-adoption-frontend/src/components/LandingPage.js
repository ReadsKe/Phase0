import * as React from "react";
import { Link } from 'react-router-dom';

function LandingPage(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53346eed52d016970bef8680eeffd4435cd7a6bda6faaa98ff712652003764d6?apiKey=e8788cda399a4c35af5fd104dca3ff3f&"
            className="img"
            alt=''
          />
          <Link to='/home'><div className="div-3">Get Started </div></Link>
        </div>
        <div className="div-4">
          <div className="div-5">
            <div className="column">
              <div className="div-6">
                <div className="div-7">
                  Welcome to the first Pet Adoption Agency that takes pet
                  ownership to the next level!{" "}
                </div>
                <div className="div-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className="column-2">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a38be2ed2b043bc3e6811be1857b7afd3edc2f6b0c1303e9aaf0e83b4620cae?apiKey=e8788cda399a4c35af5fd104dca3ff3f&"
                className="img-2"
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #bad8da;
          display: flex;
          flex-direction: column;
          padding: 45px 80px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          padding-right: 80px;
          justify-content: space-between;
          gap: 20px;
          font-size: 20px;
          color: #fff;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.54;
          object-fit: auto;
          object-position: center;
          width: 245px;
          max-width: 100%;
        }
        .div-3 {
          font-family: Inter, sans-serif;
          border-radius: 30px;
          background-color: #2a98b0;
          justify-content: center;
          margin: auto 0;
          padding: 23px 29px;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-4 {
          align-self: center;
          margin-top: 71px;
          width: 100%;
          max-width: 1181px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-5 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          color: #000;
          font-weight: 400;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          text-align: center;
          font: 24px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .div-8 {
          margin-top: 78px;
          font: 18px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 1.35;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default LandingPage

