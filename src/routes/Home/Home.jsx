import "./home.css"
import { LuCalendarCheck } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import Footer from "../../components/Footer/footer";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
        <h4>WELCOME TO</h4>
        <h1>LUXURY</h1>
        <h4>HOTELS</h4>
        <h6>Book your stay and enjoy Luxury <br /> redefined at the most affordable rates.</h6>
      </div>
      <div className="home__btn">
        <button><span><LuCalendarCheck /></span>BOOK NOW</button>
        <h4>SCROLL</h4>
        <div className="home__scroll">
          <h1><span><FaChevronDown /></span></h1>
        </div>
      </div>
      <div className="home__second">
        <h4>All our room types are including complementary breakfast</h4>
        <div className="luxury__first">
          <div className="lf__one">
            <h2>Luxury redefined</h2>
            <h6>Our rooms are designed to transport <br /> you into an environment made for leisure. <br /> Take your mind off the day-to-day of home <br />life and find a private paradise for yourself.</h6>
            <button>EXPLORE</button>
          </div>
          <div className="lf__two"></div>
        </div>
        <div className="luxury__first">
          <div className="lf__one lf__third">
            <h2>Leave your worries in the sand</h2>
            <h6>Our rooms are designed to transport <br /> you into an environment made for leisure. <br /> Take your mind off the day-to-day of home <br />life and find a private paradise for yourself.</h6>
            <button>EXPLORE</button>
          </div>
          <div className="lf__four"></div>
        </div>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home