import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import BannerItem from "../Banner/BannerItem";
import ServiceDetails from "../Service/ServiceDetails";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerItem></BannerItem>
      <Service></Service>
      <ServiceDetails></ServiceDetails>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
