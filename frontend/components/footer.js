import React from "react"


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footertext">
            <p>Free Consultation By Appointment Only - <a href="mailto:celebellas@yahoo.com">celebellas@yahoo.com</a> | <br/>
            Walk-Ins Welcome | 325-234-5580<br/>
            &copy;Copyright 2022. Celebraciones Bellas. All Rights Reserved.<br/>
            <a href="http://www.josecarranco.com">Site Designed by Jose Carranco</a>
            </p>
        </div>
        <div className="socialfooter"> <a href="http://www.celebraciones-bellas.com/contact-us/"><img src="http://www.celebraciones-bellas.com/wp-content/uploads/2014/01/email.png" alt="Contact Celebraciones Bellas" title="Contact Celebraciones Bellas" /></a>
            <a href="https://www.facebook.com/CelebracionesBellas">
                <img 
                src="http://www.celebraciones-bellas.com/wp-content/uploads/2014/01/facebook.png"
                alt="Like Celebraciones Bellas on<li></li> Facebook" title="Like Celebraciones Bellas on Facebook" /></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer