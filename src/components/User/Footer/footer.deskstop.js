import React from "react";
import logo from "../../../assets/images/sovietmodel.svg";
import fb from "../../../assets/images/facebook.svg";
import laz from "../../../assets/images/lazada.svg";
import shopee from "../../../assets/images/shopee.svg";
const Footer = ({ children }) => {
  return (
    <div className="tw-bg-[#33322C] tw-w-full">
      <div className="tw-flex tw-justify-between container tw-py-10 tw-border-white tw-border-solid tw-border-0 tw-border-b-[1px]">
        <div className="tw-max-w-[400px] tw-w-1/5 tw-min-w-[200px]">
          <img src={logo} alt="logo" className="tw-mb-10" />
          <div className="tw-flex tw-items-center">
            <img src={fb} alt="facebook" className="tw-mr-4" />
            <img src={laz} alt="lazada" className="tw-mr-4" />
            <img src={shopee} alt="shopee" />
          </div>
        </div>
        <div className="tw-flex tw-w-[80%]">
          <div className="tw-mr-[20px] 2xl:tw-mr-[80px]">
            <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
              Liên kết nhanh
            </div>
            <ul className="!tw-p-0">
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Trang chủ
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Sản phẩm
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Khuyến mại
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Giỏ hàng
              </li>
            </ul>
          </div>
          <div className="tw-mr-[20px] 2xl:tw-mr-[80px]">
            <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
              Tin tức - cập nhật
            </div>
            <ul className="!tw-p-0">
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Khuyến mãi
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Sản phẩm sắp ra mắt
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Tin khác
              </li>
            </ul>
          </div>
          <div className="tw-mr-[20px] 2xl:tw-mr-[80px]">
            <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
              Hỗ trợ trực tuyến
            </div>
            <ul className="!tw-p-0">
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Thanh toán - đặt hàng
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Chính sách vận chuyển
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Chính sách đổi trả
              </li>
            </ul>
          </div>
          <div className="tw-mr-[20px] 2xl:tw-mr-[80px]">
            <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
              Hệ thống cửa hàng
            </div>
            <ul className="!tw-p-0">
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Cơ sở 1 : 175 Tây Sơn, Đống Đa, Hà Nội
              </li>
              <li className="tw-mb-3 tw-text-[14px] tw-text-[#747474] tw-font-[400]">
                Cơ sở 2 : 2 Trường Sa, F17, Quận Bình Thạnh, Tp.HCM
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tw-w-full ">
        <div className="container tw-py-6 tw-text-[16px] tw-text-white tw-font-[700]">
            © 2023 - Đồ án Tốt nghiệp - Nguyễn Lê Duy - 62TH
        </div>
      </div>
    </div>
  );
};

export default Footer;
