import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (

      <footer className="mt-auto container-fluid">
        <div className="row">
            <div className="footertext col-md-8">
                <p>Free Consultation By Appointment Only - <a href="mailto:celebellas@yahoo.com">celebellas@yahoo.com</a> | <br/>
                Walk-Ins Welcome | 325-234-5580<br/>
                &copy;Copyright 2022. Celebraciones Bellas. All Rights Reserved.<br/>
                <a href="http://www.josecarranco.com">Site Designed by Jose Carranco</a>
                </p>
            </div>
            <div className="socialfooter col-md-4 text-end"> <a href="http://www.celebraciones-bellas.com/contact-us/"><img src="http://www.celebraciones-bellas.com/wp-content/uploads/2014/01/email.png" alt="Contact Celebraciones Bellas" title="Contact Celebraciones Bellas" /></a>
                <a href="https://www.facebook.com/CelebracionesBellas">
                <FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
      </footer>

  )
}

export default Footer