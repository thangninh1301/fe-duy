import React from "react";

import LauoutDefault from "../../../components/Admin/LauoutDefault"
import {Carousel} from "antd";
import slider1 from "../../../assets/images/silder/silder1.png"
import slider2 from "../../../assets/images/silder/slider2.png";
import slider3 from "../../../assets/images/silder/silde4.png";

import list1 from "../../../assets/images/list1.svg"
import list2 from "../../../assets/images/list2.svg";
import list3 from "../../../assets/images/list3.svg";
import list4 from "../../../assets/images/list4.svg"
import list5 from "../../../assets/images/list5.svg";
import list6 from "../../../assets/images/list6.svg";
import list7 from "../../../assets/images/list7.svg"
import list8 from "../../../assets/images/list8.svg";
import list9 from "../../../assets/images/list9.svg";

const HomePageAdmin = () => {
  return (
    <LauoutDefault>
      <div className="container">
      <Carousel autoplay autoplaySpeed={5000} speed={1000}>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder1"
            src={slider1}
          />
        </div>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder2"
            src={slider2}
          />
        </div>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder4"
            src={slider3}
          />
        </div>
      </Carousel>
      <div className="tw-bg-white tw-w-full tw-flex tw-items-center tw-justify-center tw-py-4">
        <img src={list1} alt="1" className="tw-mr-10"></img>
        <img src={list2} alt="1" className="tw-mr-10"></img>
        <img src={list3} alt="1" className="tw-mr-10"></img>
        <img src={list4} alt="1" className="tw-mr-10"></img>
        <img src={list5} alt="1" className="tw-mr-10"></img>
        <img src={list6} alt="1" className="tw-mr-10"></img>
        <img src={list7} alt="1" className="tw-mr-10"></img>
        <img src={list8} alt="1" className="tw-mr-10"></img>
        <img src={list9} alt="1" className="tw-mr-10"></img>
      </div>
      </div>
   
    </LauoutDefault>
  );
};

export default HomePageAdmin;
