import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <ContactUs></ContactUs>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
