import React, { useMemo } from "react";
import HeaderWrapper from "./header.styles";
import logo from "../../../assets/images/sovietmodel.svg";
import giohang from "../../../assets/images/giohang.svg";
import message from "../../../assets/images/message.svg";
import {Link} from "react-router-dom";
import { TOKEN } from "../../../constants/index";
import { getToken } from "../../../utils/index";
import { Dropdown, Space, Avatar } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; 
const Header = () => {

 const navigate = useNavigate();
   const token = getToken();
   const isAuthenticated = useMemo(() => {
     if (token) {
       return true;
     } else {
       return false;
     }
   }, [token]);
   
   const logout = () => {
     window.localStorage.removeItem(TOKEN);
     navigate("/login");
   };
     const items = [
       {
         key: "1",
         label: <Link to="/admin/product">Sản phẩm</Link>,
       },
       {
         key: "2",
         label: <div onClick={logout}>Đăng xuất</div>,
       },
     ];
  
  return (
    <HeaderWrapper>
      <div className="tw-w-full">
      <div className="tw-flex tw-items-center tw-justify-between tw-bg-[#1C1B15] container tw-py-4">
        <div className="tw-flex tw-items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="tw-flex tw-items-center tw-justify-end">
          <Link to="/" className="tw-mr-[12px]">
            <img src={message} alt="logo" />
          </Link>
          <Link to="/card" className="tw-mr-[12px]">
            <img src={giohang} alt="logo" />
          </Link>
          {isAuthenticated === true ? (
            <Dropdown
              menu={{
                items,
              }}
            >
              <div onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar
                    style={{
                      backgroundColor: "#33322e",
                      color: "#fff",
                    }}
                    size={32}
                    icon={<UserOutlined />}
                  />
                  <DownOutlined className="tw-text-white" />
                </Space>
              </div>
            </Dropdown>
          ) : (
            <div className="tw-flex tw-items-center">
              <div className="tw-mr-[12px]">
                <Link to="/login" className="tw-text-white tw-text-[16px]">
                  Đăng nhập
                </Link>
              </div>
              <div>
                <Link to="/register" className="tw-text-white tw-text-[16px]">
                  Đăng ký
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <ul className="tw-bg-[#DC1814] tw-flex tw-items-center tw-justify-center !tw-m-0 tw-py-4 !tw-px-0">
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/" className="tw-text-white tw-text-[16px]">
            Trang chủ
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/product" className="tw-text-white tw-text-[16px]">
            Sản phẩm
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/guide" className="tw-text-white tw-text-[16px]">
            Hướng dẫn chơi mô hình
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/news" className="tw-text-white tw-text-[16px]">
            Tin tức - Cập nhật
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/support" className="tw-text-white tw-text-[16px]">
            Hỗ trợ Trực tuyến
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/recommend" className="tw-text-white tw-text-[16px]">
            Giới thiệu
          </Link>
        </li>
      </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
