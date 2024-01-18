import React from "react";

import LauoutDefault from "../../../components/Admin/LauoutDefault"
import {Carousel} from "antd";
import slider1 from "../../../assets/images/silder/slider10.png";
import slider2 from "../../../assets/images/silder/slider11.png";
import slider3 from "../../../assets/images/silder/slider12.png";
import slider4 from "../../../assets/images/silder/slider14.png";

const HomePageAdmin = () => {
  return (
    <LauoutDefault>
      <div className="container !tw-my-[24px]">
        <Carousel autoplay autoplaySpeed={5000} speed={1000}>
          <div className="!tw-rounded-[24px] !tw-w-full">
            <img
              className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
              alt="silder1"
              src={slider1}
            />
          </div>
          <div className="!tw-rounded-[24px] !tw-w-full">
            <img
              className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
              alt="silder2"
              src={slider2}
            />
          </div>
          <div className="!tw-rounded-[24px] !tw-w-full">
            <img
              className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
              alt="silder4"
              src={slider3}
            />
          </div>
          <div className="!tw-rounded-[24px] !tw-w-full">
            <img
              className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
              alt="silder4"
              src={slider4}
            />
          </div>
        </Carousel>
      </div>
    </LauoutDefault>
  );
};

export default HomePageAdmin;
