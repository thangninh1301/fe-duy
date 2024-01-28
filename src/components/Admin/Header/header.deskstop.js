import React, { useMemo } from "react";
import HeaderWrapper from "./header.styles";
import logo from "../../../assets/images/sovietmodel.svg";
import { Dropdown, Space, Avatar } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { TOKEN_ADMIN } from "../../../constants/index";
import { getTokenAdmin } from "../../../utils/index";
import { useNavigate, Link, useLocation } from "react-router-dom"; 
const Header = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const token = getTokenAdmin();
   const isAuthenticated = useMemo(() => {
     if (token) {
       return true;
     } else {
       return false;
     }
   }, [token]);
  const logout = () => {
    window.localStorage.removeItem(TOKEN_ADMIN);
    navigate("/admin/login");
  };

  const items = [
    {
      key: "1",
      label: (
        <Link to="/admin/product">Sản phẩm</Link>
      ),
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
            <Link to="/admin/login">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="tw-flex tw-items-center tw-justify-end">
            {isAuthenticated === true ? (
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div onClick={(e) => e.preventDefault()}>
                  <Space>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 18.8358 24.8187 21.3968 22.9233 23.2159C21.1271 24.9396 18.6867 26 16 26C13.3133 26 10.8729 24.9396 9.07675 23.2159C7.18129 21.3968 6 18.8358 6 16ZM21.6587 22.4824C21.2578 21.283 20.1245 20.4186 18.7907 20.4186H13.2093C11.8755 20.4186 10.7422 21.283 10.3413 22.4824C11.8544 23.8045 13.8331 24.6047 16 24.6047C18.1669 24.6047 20.1456 23.8045 21.6587 22.4824ZM16 8.7907C13.5597 8.7907 11.5814 10.769 11.5814 13.2093C11.5814 15.6496 13.5597 17.6279 16 17.6279C18.4403 17.6279 20.4186 15.6496 20.4186 13.2093C20.4186 10.769 18.4403 8.7907 16 8.7907Z"
                            fill="#FAFAFA"/>
                      <rect opacity="0.1" width="32" height="32" rx="12" fill="white"/>
                    </svg>

                    <DownOutlined className="tw-text-white"/>
                  </Space>
                </div>
              </Dropdown>
            ) : (
                <div className="tw-mr-[12px]">
                  <Link
                      to="/admin/login"
                      className="tw-text-white tw-text-[16px]"
                  >
                    Đăng nhập
                  </Link>
                </div>
            )}
          </div>
        </div>
        <ul className="tw-bg-[#DC1814] tw-flex tw-items-center tw-justify-center !tw-m-0 tw-py-4 !tw-px-0">
          <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
            <Link
                to="/admin"
                className={`tw-text-white tw-text-[16px] ${
                    location?.pathname === "/admin" ? "tw-font-[700]" : ""
                }`}
            >
              Trang chủ
            </Link>
          </li>
          <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
            <Link
              to="/admin/product"
              className={`tw-text-white tw-text-[16px] ${
                location?.pathname === "/admin/product" ? "tw-font-[700]" : ""
              }`}
            >
              Sản phẩm
            </Link>
          </li>
          <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
            <Link
              to="/admin/order"
              className={`tw-text-white tw-text-[16px] ${
                location?.pathname === "/admin/order" ? "tw-font-[700]" : ""
              }`}
            >
              Đơn hàng
            </Link>
          </li>
          <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
            <Link
              to="/admin/customer"
              className={`tw-text-white tw-text-[16px] ${
                location?.pathname === "/admin/customer" ? "tw-font-[700]" : ""
              }`}
            >
              Khách hàng
            </Link>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
