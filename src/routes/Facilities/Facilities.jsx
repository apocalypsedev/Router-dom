import "./facilities.css"
import { LuCalendarCheck } from 'react-icons/lu';
import { FaChevronDown } from 'react-icons/fa6';
import Footer from "../../components/Footer/footer";
import Testimonials from "../../components/Testimonials/Testimonials";
function Facilities() {
  return (
    <div className='facalities'>
            <div className="facalities__main">
        <h4>WELCOME TO</h4>
        <h1>LUXURY</h1>
        <h4>HOTELS</h4>
        <h6>Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</h6>
      </div>
      <div className="facalities__btn">
        <button><span><LuCalendarCheck /></span>BOOK NOW</button>
        <h4>SCROLL</h4>
        <div className="facalities__scroll">
          <h1><span><FaChevronDown /></span></h1>
        </div>
      </div>
      <div className="facalities__second">
        <h1>FACILITIES</h1>
        <h4>We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so <br /> that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure <br /> and our modern luxury resort facilities will help you enjoy the best of all.</h4>
        <div className="fs_first">
          <div className="fs_box">THE GYM</div>
        </div>
        <div className="fs_second">
          <div className="fs_box">POOLSIDE BAR</div>
        </div>
        <div className="fs_third">
          <div className="fs_box">THE SPA</div>
        </div>
        <div className="fs_fourth">
          <div className="fs_box">SWIMMING POOL</div>
        </div>
        <div className="fs_fifth">
          <div className="fs_box">RESTAURANT</div>
        </div>
        <div className="fs_sixth">
          <div className="fs_box">LAUNDRY</div>
        </div>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Facilities