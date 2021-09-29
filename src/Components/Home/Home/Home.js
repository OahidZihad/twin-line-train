import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurAdmin from "../OurAdmin/OurAdmin";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Testimonial></Testimonial>
      <OurAdmin></OurAdmin>
      <Footer></Footer>
    </div>
  );
};

export default Home;
