import React from 'react';

const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="bg-light mt-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Company</h5>
              <p>
              PetCentral is a compassionate pet adoption agency dedicated to connecting loving families with adorable pets. Our mission is to provide forever homes for animals in need. With a team of dedicated professionals, we ensure responsible and joyful adoptions, fostering lasting companionship. Choose PetCentral for a heartwarming adoption experience.              </p>
            </div>
            <div className="col-md-4">
              <h5>Contact Details</h5>
              <p>
                45th street Woodlands Avenue, Westlands <br />
                Petcentral@gmail.com <br />
                +254 712 044 330
              </p>
              <p>Copyright @petcentral All rights reserved</p>
            </div>
            <div className="col-md-4">
              <h5>Official Working Hours</h5>
              <p>
                Mon- Fri 8am- 7pm <br />
                Sat 8am-12pm <br />
                Sunday closed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
