import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/organisms/navbar/Navbar";
import Footer from "../components/organisms/footer/Footer";

const CommonTemplate = (props) => {
  const navbar = useSelector(
    (state) => state.commonTemplateReducer.navbarProps
  );
  const footer = useSelector(
    (state) => state.commonTemplateReducer.footerProps
  );

  return (
    <>
      <Navbar {...navbar} />
      {props.children}
      <Footer {...footer} />
    </>
  );
};

export default CommonTemplate;
