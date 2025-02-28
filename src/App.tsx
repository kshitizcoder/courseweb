import React from "react";
import "@mantine/core/styles.css";
import Benefits from "./components/Benefits";
import "./App.css";
import OurCourses from "./components/OurCourses";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <OurCourses />
      <Faq />
      <ForgotPassword />
      <ResetPassword />
    </>
  );
};

export default App;
