import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import { imagePath } from "../constants/imagePath";
import RightSection_Comp from "../components/RightSection_Comp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="home-main-section">
          <div className="container">
            <HeroSection
              mainHeading="Transform Your Property into a High-Performing Asset"
              paragraph="Maximize your rental income with AngiesHelpers.com. We handle everything: listings, pricing, guest communication, and maintenance. Enjoy the benefits while we manage the details."
              btnText="Get Started Now"
              image={imagePath.Hero_Img_1}
            />

            <RightSection_Comp
              mainHeading="Your Trusted Partner in"
              subHeading="Rental Management"
              paragraph="At AngiesHelpers.com, we aim to provide property owners with hassle-free, profitable rental management. Founded by industry experts, we blend local knowledge and offshore support to offer top-tier services for both short-term Airbnb rentals and long-term leases. Our commitment to excellence ensures optimized listings and seamless guest experiences."
              btnText="Get Started Now"
              image={imagePath.Rental_Management}
            />
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< why choose angies>>>>>>>>>>>>>>>>>>>>>>>>  */}
          <div className="why-choose-angies-section">
            <div className="container">
              <div className="why-choose-angies-main">
                <div className="why-choose-angies-heading">
                  <h1 className="fontSize48_black" id="heading">
                    Why choose
                    <h1 className="fontSize48_green"> AngiesHelpers</h1>{" "}
                  </h1>
                  <p className="fontSize22_gray">
                    At AngiesHelpers.com, our journey began with a simple
                    mission: to provide property owners with a hassle-free,
                    profitable rental management experience
                  </p>
                </div>
                <div class="grid-container">
                  <Cards
                    image={imagePath.Airbnb}
                    cardTitle="Airbnb Management"
                    cardDescription="We handle listing optimization, pricing, guest communication, check-ins/outs, cleaning, and maintenance to maximize occupancy and income."
                  />

                  <Cards
                    image={imagePath.Home}
                    cardTitle="Long-Term Rentals"
                    cardDescription="We provide tenant screening, lease management, rent collection, maintenance, and tenant relations to ensure satisfaction and upkeep."
                  />

                  <Cards
                    image={imagePath.Settings}
                    cardTitle="On-Site Assistance"
                    cardDescription="Our local experts offer hands-on support for maintenance, inspections, and guest interactions, ensuring smooth operations."
                  />

                  <Cards
                    image={imagePath.Headphone}
                    cardTitle="24/7 Offshore Support"
                    cardDescription="Continuous support for administrative tasks, guest inquiries, booking management, and customer service to enhance efficiency."
                  />

                  <Cards
                    image={imagePath.Socket}
                    cardTitle="Technology Integration"
                    cardDescription="Advanced software for streamlined operations, performance tracking, and transparent reporting, aiding informed decisions."
                  />

                  <Cards
                    image={imagePath.Star}
                    cardTitle="Customized Service Packages"
                    cardDescription="Flexible packages tailored to your needs, offering full-service management or select services."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Testimonials-section >>>>>>>>>>>>>>>>>>>>>>>>  */}
          <div className="client-testimonials-main-section">
            <div className="container">
              <div className="client-testimonials">
                <div className="testimonials">
                  <h1 className="fontSize48_white" id="heading">
                    Client <h1 className="fontSize48_green"> Testimonials</h1>{" "}
                  </h1>
                  <p className="fontSize22_white">
                    Discover how our services have transformed property
                    management. Hear firsthand from property owners about their
                    experiences and success stories
                  </p>
                </div>

                <Slider {...settings}>
                  <Testimonial
                    feedback="I couldn't be happier. I use Uplisting daily and it's really helped me turn a corner for my business from managing a few homes (that I could do manually) to many, many more."
                    image={imagePath.Testimonial_1}
                    userName="T. Sanchez"
                    place="Scottsdale, AZ"
                  />

                  <Testimonial
                    feedback="Managing our own vacation rental properties was exhausting until we found AngiesHelpers. They took over the management side, and now we're making more money than ever!"
                    image={imagePath.Testimonial_2}
                    userName="Abram Dorwart"
                    place="Scottsdale, AZ"
                  />

                  <Testimonial
                    feedback="After finding AngiesHelpers, I focus on buying new properties while they handle the rest. I now have the freedom to grow my portfolio without worrying about property management."
                    image={imagePath.Testimonial_3}
                    userName="Dulce Torff"
                    place="Scottsdale, AZ"
                  />
                </Slider>
              </div>
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Contact Us>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="contact-main-section">
            <div className="container">
              <div className="contact-section">
                <div className="contact-details">
                 <div className="contact-heading">
                 <h1 className="fontSize48_black">Contact Us</h1>
                  <p className="fontSize22_Green">
                    <strong> Have questions or need help?</strong>{" "}
                    <span className="fontSize22_gray">
                      Contact us via email, phone, or our online form. We're
                      dedicated to exceptional service and support for all your
                      property management needs
                    </span>
                  </p>
                 </div>

                  <div className="contact-feilds">
                    <div className="feilds-img">
                      <img src={imagePath.Call} alt="" />
                    </div>
                    <div className="feilds-details">
                      <h3 className="fontSize28_black">Phone Number</h3>
                      <p className="fontSize24_Gray">1-548-634-5896</p>
                    </div>
                  </div>

                  <div className="contact-feilds">
                    <div className="feilds-img">
                      <img src={imagePath.Email} alt="" />
                    </div>
                    <div className="feilds-details">
                      <h3 className="fontSize28_black">Email Address</h3>
                      <p className="fontSize24_Gray">angieshelpers@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-feilds">
                    <div className="feilds-img" id="email">
                      <img src={imagePath.Location} alt="" />
                    </div>
                    <div className="feilds-details">
                      <h3 className="fontSize28_black">Location</h3>
                      <p className="fontSize24_Gray">
                        2963 E Thousand Oaks Blvd, Thousand Oaks, California
                        (United States)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-form">
                  <div className="contact-bg-left-card"></div>
                  <div className="form">
                    <form>
                      <div class="mb-4">
                        <label class="form-label">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Chance Kenter"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label">Phone Number</label>
                        <input
                          class="form-control"
                          placeholder="Chance Kenter"
                        />
                      </div>
                      <div class="mb-4">
                        <label for="floatingTextarea2" id="label">Message</label>
                        <textarea
                          class="form-control"
                          placeholder="Chance Kenter"
                          id="floatingTextarea2"
                          style={{ height: "140px" }}
                        ></textarea>
                      </div>
                      <button className="btn-style" id="form-button">
                        Send Message
                      </button>
                    </form>
                  </div>
                  <div className="contact-bg-right-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default Home;
