import "./Room.css"
import { LuCalendarCheck } from 'react-icons/lu';
import { FaChevronDown } from 'react-icons/fa6';
import Footer from './../../components/Footer/footer';
import Testimonials from "../../components/Testimonials/Testimonials";
function Rooms() {
  return (
    <div className='room'>
      <div className="room__main">
        <h4>WELCOME TO</h4>
        <h1>LUXURY</h1>
        <h4>HOTELS</h4>
        <h6>Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</h6>
      </div>
      <div className="room__btn">
        <button><span><LuCalendarCheck /></span>BOOK NOW</button>
        <h4>SCROLL</h4>
        <div className="room__scroll">
          <h1><span><FaChevronDown /></span></h1>
        </div>
      </div>
      <div className="room__second">
        <h1>
          ROOMS AND RATES
        </h1>
        <h4>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, <br /> 
            comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented <br /> 
            by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </h4>
      <div className="rm_first">
        <div className="rm_first_img"></div>
        <h1>SINGLE ROOM</h1>
        <div className="rm_first_btn">
          <h3>VIEW ROOM DETAILS</h3>
          <button>$147 Avg/night</button>
        </div>
      </div>
        <div className="rm_second">
        <div className="rm_second_img"></div>
        <h1>DOUBLE ROOM</h1>
        <div className="rm_second_btn">
          <h3>VIEW ROOM DETAILS</h3>
          <button>$155 Avg/night</button>
        </div>
        </div>
        <div className="rm_third">
        <div className="rm_third_img"></div>
        <h1>TWIN ROOM</h1>
        <div className="rm_third_btn">
          <h3>VIEW ROOM DETAILS</h3>
          <button>$155 Avg/night</button>
        </div>
        </div>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Rooms