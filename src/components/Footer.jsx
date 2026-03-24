import {
  Clock,
  Plane,
  Train,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import poloLogo from "../assets/logos/polo-logo.png";
import "../styles/footer.css";

const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Mall Info */}
        <div className="footer-col brand">

          {/* Logo */}
          <div className="footer-logo">
            <img src={poloLogo} alt="Polo Central Mall Agartala" />
          </div>

        </div>


        {/* Mall Timings */}
        <div className="footer-col">
          <h3>Mall Timings</h3>

          <div className="footer-item">
            <Clock size={18} />
            <span>11:00 AM – 9:30 PM</span>
          </div>

        </div>


        {/* Convenience */}
        <div className="footer-col">
          <h3>Convenience</h3>

          <div className="footer-item">
            <Plane size={18} />

            <div className="convenience-text">
              <div className="main">Airport – 20 Minutes</div>
              <div className="sub">
                Maharaja Bir Bikram Airport, Agartala
              </div>
            </div>

          </div>

          <div className="footer-item">
            <Train size={18} />

            <div className="convenience-text">
              <div className="main">Railway Station – 45 Minutes</div>
              <div className="sub">
                Agartala Railway Station
              </div>
            </div>

          </div>

        </div>


        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>

          <div className="footer-item">
            <MapPin size={18} />

            <span className="address">
              VIP Road, Agartala Airport Rd, Kunjaban, Agartala,<br/>
              Tripura 799006<br/>
            </span>

          </div>


          {/* Phone */}
          <div className="footer-item">
            <Phone size={18} />

            <a className="phone" href="tel:+919876543210">
              +91 98765 43210
            </a>

          </div>


          {/* Email */}
          <div className="footer-item">
            <Mail size={18} />

            <a href="mailto:info@polocentralmall.com">
              info@polocentralmall.com
            </a>

          </div>

        </div>


        {/* Google Map */}
        <div className="footer-col map">
          <h3>Find Us</h3>

          <iframe
            src="https://www.google.com/maps?q=Polo%20Central%20Mall%20Agartala&output=embed"
            title="Polo Central Mall Location"
            loading="lazy"
          ></iframe>

        </div>

      </div>


      {/* Bottom Copyright */}

      <div className="footer-bottom">
        <p>
          <span className="copyright-circle">©</span>
          {" "}
          {new Date().getFullYear()} Polo Central Mall. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;