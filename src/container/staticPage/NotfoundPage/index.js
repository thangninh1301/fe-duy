import React from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import notfound from "../../../assets/images/404.svg";
const NotfoundPage = ({ type =1}) => {
  return (
    <LauoutDefault type={type}>
      <div className="tw-my-12  tw-w-full">
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-[80px] tw-bg-[#1C1B15] ">
          <img
            src={notfound}
            alt="not found"
            className="tw-w-[200px] tw-h-[200px]"
          ></img>
          <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
            Không tìm thấy trang này!
          </div>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default NotfoundPage;
