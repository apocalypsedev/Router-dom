import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import "./Testimonials.css"
function Testimonials() {
  return (
    <div className="testimonials">
        <h1>Testimonials</h1>
        <h3>`Calm, Serene, Retro  What a way to relax and enjoy`</h3>
        <h5>Mr. and Mrs. Baxter, UK</h5>
        <div className="">
            <button><FaChevronLeft/></button>
            <button><FaChevronRight/></button>
        </div>
    </div>
  )
}

export default Testimonials