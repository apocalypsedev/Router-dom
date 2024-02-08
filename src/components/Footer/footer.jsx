import "./footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <div className="ft__first">
            <h1>LUXURY</h1>
            <h4>HOTELS</h4>
            <p>497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903 luxury_hotels@gmail.com</p>
        </div>
        <div className="ft__second">
        <h2>About us</h2>
        <h2>Contact</h2>
        <h2>Terms & Conditions</h2>
        </div>
        <div className="ft__second">
        <h2><span><FaFacebookF/></span>Facebook</h2>
        <h2><span><FaTwitter/></span>Twitter</h2>
        <h2><span><FaInstagram/></span>Instagram</h2>
        </div>
        <div className="">
        <h4 className="h4">Subscribe to our newsletter</h4>
        <input className="input" type="text" placeholder="Email Address" />
        <button className="ft__button">OK</button>
        </div>


    </div>

  )
}

export default Footer