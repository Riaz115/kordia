import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "/assets/images/testimonials-profile.jpeg";
// import img2 from "/assets/images/pin.png";
import img3 from "/assets/images/slider-prev.png";
import img2 from "/assets/images/tape.png";
import img4 from "/assets/images/slider-next.png";
import { ImQuotesLeft } from "react-icons/im";

const testimonialsData = [
  {
    id: 1,
    imgSrc: img1,
    quote:
      "Kordia made finding the perfect band for our wedding so easy! The platform is incredibly intuitive, and we were able to connect with talented musicians in no time. Everything from the contract to payment was handled smoothly. Highly recommend!",
    name: "Sarah M",
    title: "Event Organizer",
  },
  {
    id: 2,
    imgSrc: img1,
    quote:
      "Kordia made finding the perfect band for our wedding so easy! The platform is incredibly intuitive, and we were able to connect with talented musicians in no time. Everything from the contract to payment was handled smoothly. Highly recommend!",
    name: "Aiman M",
    title: "Event Organizer",
  },
  {
    id: 3,
    imgSrc: img1,
    quote:
      "Kordia made finding the perfect band for our wedding so easy! The platform is incredibly intuitive, and we were able to connect with talented musicians in no time. Everything from the contract to payment was handled smoothly. Highly recommend!",
    name: "Catelina M",
    title: "Event Organizer",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-main-blue testimonials ">
      <div className="mycontainer">
        <h2
          style={{
            fontSize: "60px", // Increase font size
            letterSpacing: "2px", // Add gap between letters
          }}
          className="text-main-orange display-4 text-center fw-semibold text-uppercase font-bebas"
        >
          Testimonials
        </h2>
        <div className="position-relative">
          {/* Carousel Component */}
          <Carousel
            activeIndex={currentIndex}
            onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
            indicators={false} // No indicators (dots)
            controls={false} // No default controls
            interval={1000} // No auto sliding
          >
            {testimonialsData.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="d-flex flex-column align-items-center mt-5">
                  <div className="position-relative bg-white right-leaned testimonial-img-box p-2 pb-3 " style={{ width: "250px", height: "300px" }}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={testimonial.imgSrc}
                      alt="testimonial"
                    />
                    <div className="position-absolute top-0 start-50 translate-middle" >
                      <img className="pin-img  w-100 h-100" src={img2} alt="Tape" />
                    </div>
                  </div>
                  <p className="text-white text-center mt-5 max-w-800px text-lsm-14 font-poppins">
                    {testimonial.quote}
                  </p>
                  <p className="text-main-orange display-6 mb-0">
                    <ImQuotesLeft />
                  </p>
                  <p className="text-center text-main-orange fs-5 mb-0 font-poppins">
                    {testimonial.name}
                  </p>
                  <p className="text-center text-main-orange small font-poppins">
                    {testimonial.title}
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* Custom Previous Button */}
          <div className="testimonial-slider-prev d-none d-sm-block position-absolute translate-middle-y translate-middle-x top-50 start-0 z-2">
            <img
              className="slider-arrow"
              src={img3}
              alt="Previous"
              onClick={prevTestimonial}
            />
          </div>
          {/* Custom Next Button */}
          <div className="testimonial-slider-next d-none d-sm-block position-absolute translate-middle-y top-50 end-0 z-2">
            <img
              className="slider-arrow"
              src={img4}
              alt="Next"
              onClick={nextTestimonial}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
