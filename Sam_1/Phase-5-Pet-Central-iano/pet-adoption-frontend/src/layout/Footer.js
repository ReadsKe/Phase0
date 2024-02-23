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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Contact Details</h5>
              <p>
                Location Address <br />
                Petcentral@gmail.com <br />
                Phone Number
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
