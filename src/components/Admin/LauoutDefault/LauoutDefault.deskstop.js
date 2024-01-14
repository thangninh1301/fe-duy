import React from "react";
import LayoutWrapper from "./layout.styles";
import Header from "../Header/index";
import Footer from "../Footer/index";

const LauoutDefault = ({type=1,children }) => {
  return (
    <LayoutWrapper>
      <Header type={type}></Header>
      <div className="page-content tw-pt-[146px]">{children}</div>
      <Footer></Footer>
    </LayoutWrapper>
  );
};

export default LauoutDefault;
