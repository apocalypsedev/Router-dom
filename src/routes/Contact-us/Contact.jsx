import "./Contact.css"
import Footer from './../../components/Footer/footer';

function Contact() {
  return (
    <div className="contact">
      <h1 className="font__size">CONTACT-US</h1>
      <div className="contact__second">
        <h1>WE ARE HERE FOR YOU</h1>
        <h6>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br /> please forward it to our support desk and we will get back to you as soon as possible.</h6>
        <div className="cs__texts">
          <div className="cs__text1">
            <h5>497 Evergreen Rd. Roseville, <br /> CA 95673 
               <br /> <br /> Phone: +44 345 678 903 <br /> Email: luxury_hotels@gmail.com
            </h5>
          <div className="cs__text2">
            <h6>Name</h6>
            <input type="text" />
            <h6>Email Address</h6>
            <input type="text" />
            <h6>Message</h6>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>SUBMIT</button>

          </div>
          </div>
        </div>
      </div>

      <div className="contact__footer">
            <Footer />
      </div>
    </div >
  )
}

export default Contact