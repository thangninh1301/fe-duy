import React from "react";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Skeleton, Image, InputNumber, Button, Collapse } from "antd";
import Wrapper from "./ProductDetail.styles";
import productImage from "../../../assets/images/productImage.png";
import vnpay from "../../../assets/images/vnpay.svg";
import momo from "../../../assets/images/momo.svg";
import {
  StarFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import notfound from "../../../assets/images/404.svg";
import { getToken } from "../../../utils/index";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.Loading);
  const ProductDetail = useSelector((state) => state.ProductDetail);
  const { id }= useParams();
  const [quanlity, setQuanlity] = useState(1);
  const token = getToken();
  const isAuthenticated = useMemo(() => {
    if (token) {
      return false;
    } else {
      return true;
    }
  }, [token]);

  const item1 = [
  {
    key: "1",
    label: "Chi tiết sản phẩm",
    children: (
      <ul className="tw-pl-0">
        <li className="tw-text-white tw-mb-2">
          Hãng sản xuất:
          <span className="tw-font-[500]">{ProductDetail?.brand}</span>
        </li>
        <li className="tw-text-white tw-mb-2">
          Kích thước:
          <span className="tw-font-[500]">{ProductDetail?.size}</span>
        </li>
        <li className="tw-text-white tw-mb-2">
          Nguồn:
          <span className="tw-font-[500]">{ProductDetail?.country}</span>
        </li>
        <li className="tw-text-white tw-mb-2">
          Loại:
          <span className="tw-font-[500]">{ProductDetail?.type}</span>
        </li>
      </ul>
    ),
  },
  {
    key: "2",
    label: "Mô tả sản phẩm",
    children: <div className="tw-text-white">{ProductDetail?.description}</div>,
  },
];

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: Loading ? (
        <Skeleton></Skeleton>
      ) : (
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)] tw-text-white">
          <div className="tw-bg-[#33322C] tw-rounded-[16px] tw-mb-10 tw-p-10 tw-flex">
            <div className="tw-mr-[76px]">
              <Image
                id="product-image-detail"
                src={ProductDetail?.image_url || productImage}
              />
            </div>
            <div className="tw-w-full">
              <div className="tw-text-white tw-font-[700] tw-text-[24px] tw-mb-4">
                {ProductDetail?.name}
              </div>
              <div className="tw-flex tw-items-center tw-mb-4">
                <div className="tw-text-white tw-pr-4 tw-mr-4 tw-border-0 tw-border-r-[1px] tw-border-solid">
                  Số lượng:{" "}
                  <span className="tw-font-[500]">
                    {ProductDetail.product_quantity}
                  </span>
                </div>
                <div className="w-text-white tw-pr-4 tw-mr-4 tw-border-0 tw-border-r-[1px] tw-border-solid">
                  Đã bán: <span className="tw-font-[500]">10</span>
                </div>
                <div className="w-text-white tw-pr-4 tw-mr-4 tw-border-0 tw-border-r-[1px] tw-border-solid">
                  <StarFilled className="tw-text-[#FFC43F]" />{" "}
                  <span className="tw-font-[500]">5.0</span>
                </div>
              </div>
              <div className="tw-bg-[#ffffff1a] tw-py-4 tw-px-6 tw-w-[calc(100%_-_48px)] tw-flex tw-items-center tw-rounded-[16px]">
                <div>
                  <div>Giá sản phẩm</div>
                  <div className="tw-text-[#FFC43F] tw-text-[32px] tw-font-[700]">
                    {ProductDetail.price_each} VND
                  </div>
                </div>
              </div>
              <ul className="ul-info bigger-font">
                <li>Thông tin cơ bản</li>
              </ul>
              <div className="product-details">
                <div className="tw-text-white tw-mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.69 5.98316L9.97455 5.75812L10.69 5.98316ZM8.5704 9.54025L9.0206 8.9404L8.5704 9.54025ZM9.07077 11.131L9.78621 11.3561L9.07077 11.131ZM11.1904 12.7218L10.7402 12.122L11.1904 12.7218ZM12.8096 12.7218L13.2598 12.122L12.8096 12.7218ZM14.9292 11.131L14.2137 11.3561L14.9292 11.131ZM15.4296 9.54025L14.9794 8.9404L15.4296 9.54025ZM13.31 5.98316L14.0254 5.75812L13.31 5.98316ZM9.87285 17.831L9.22333 17.456L9.87285 17.831ZM8.11629 20.8734L8.76581 21.2484L8.11629 20.8734ZM1.83039 17.2443L1.18088 16.8693H1.18088L1.83039 17.2443ZM3.58695 14.2018L4.23647 14.5768H4.23647L3.58695 14.2018ZM6.23289 20.7121L5.52321 20.9547L5.52321 20.9547L6.23289 20.7121ZM5.98905 19.9988L6.69873 19.7562L6.69873 19.7562L5.98905 19.9988ZM3.65145 18.6492L3.5067 17.9133H3.5067L3.65145 18.6492ZM2.91177 18.7947L3.05651 19.5306H3.05651L2.91177 18.7947ZM5.24202 18.5935L5.61702 17.944H5.61702L5.24202 18.5935ZM1.27768 18.8052L0.662524 19.2343L1.27768 18.8052ZM10.3801 16.9319L9.78088 16.4808L9.74488 16.5287L9.71692 16.5816L10.3801 16.9319ZM13.8488 17.831L14.4983 17.456L13.8488 17.831ZM15.6053 20.8734L16.2549 20.4984L15.6053 20.8734ZM21.8912 17.2443L22.5408 16.8693L21.8912 17.2443ZM20.1347 14.2018L19.4852 14.5768L20.1347 14.2018ZM17.4887 20.7121L18.1984 20.9547V20.9547L17.4887 20.7121ZM17.7326 19.9988L17.0229 19.7562V19.7562L17.7326 19.9988ZM20.0702 18.6492L20.2149 17.9133L20.0702 18.6492ZM20.8099 18.7947L20.6651 19.5306L20.8099 18.7947ZM22.444 18.8052L23.0591 19.2343V19.2343L22.444 18.8052ZM13.3372 16.9237H12.5872V17.1092L12.6737 17.2733L13.3372 16.9237ZM4.82744 12.5473L4.15542 12.8803L4.82744 12.5473ZM10.4428 16.8485L10.588 16.1127L10.4428 16.8485ZM13.3372 16.8887L13.2128 16.1491L13.3372 16.8887ZM19.1125 12.6659L18.4461 12.3217L19.1125 12.6659ZM4.48144 12.7988L3.91783 12.3039L4.48144 12.7988ZM4.74998 9C4.74998 4.99594 7.99591 1.75 12 1.75V0.25C7.16748 0.25 3.24998 4.16751 3.24998 9H4.74998ZM12 1.75C16.004 1.75 19.25 4.99594 19.25 9H20.75C20.75 4.16751 16.8325 0.25 12 0.25V1.75ZM9.38001 7.71631C10.3176 7.71631 11.1268 7.09399 11.4054 6.20819L9.97455 5.75812C9.88438 6.0448 9.63591 6.21631 9.38001 6.21631V7.71631ZM9.0206 8.9404C8.76926 8.75176 8.69693 8.45601 8.78547 8.17451C8.87348 7.89471 9.08995 7.71631 9.38001 7.71631V6.21631C7.27095 6.21631 6.50788 8.93003 8.1202 10.1401L9.0206 8.9404ZM9.78621 11.3561C10.0637 10.4739 9.76394 9.49829 9.0206 8.9404L8.1202 10.1401C8.34238 10.3068 8.44665 10.6157 8.35533 10.906L9.78621 11.3561ZM10.7402 12.122C10.4976 12.304 10.2328 12.2807 10.0213 12.122C9.80637 11.9606 9.68377 11.6818 9.78621 11.3561L8.35533 10.906C8.04544 11.8912 8.4429 12.8128 9.12094 13.3217C9.80249 13.8332 10.8037 13.9498 11.6406 13.3217L10.7402 12.122ZM13.2598 12.122C12.5103 11.5594 11.4897 11.5594 10.7402 12.122L11.6406 13.3217C11.8566 13.1595 12.1434 13.1595 12.3594 13.3217L13.2598 12.122ZM14.2137 11.3561C14.3162 11.6818 14.1936 11.9606 13.9786 12.122C13.7672 12.2807 13.5024 12.304 13.2598 12.122L12.3594 13.3217C13.1963 13.9498 14.1975 13.8332 14.879 13.3217C15.5571 12.8128 15.9545 11.8912 15.6446 10.906L14.2137 11.3561ZM14.9794 8.9404C14.236 9.49828 13.9363 10.4739 14.2137 11.3561L15.6446 10.906C15.5533 10.6157 15.6576 10.3068 15.8797 10.1401L14.9794 8.9404ZM14.6199 7.71631C14.91 7.71631 15.1265 7.89471 15.2145 8.17451C15.303 8.45601 15.2307 8.75176 14.9794 8.9404L15.8797 10.1401C17.4921 8.93003 16.729 6.21631 14.6199 6.21631V7.71631ZM12.5945 6.20819C12.8731 7.09399 13.6824 7.71631 14.6199 7.71631V6.21631C14.364 6.21631 14.1156 6.0448 14.0254 5.75812L12.5945 6.20819ZM14.0254 5.75812C13.3929 3.74729 10.607 3.74729 9.97455 5.75812L11.4054 6.20819C11.5976 5.59727 12.4024 5.59727 12.5945 6.20819L14.0254 5.75812ZM9.22333 17.456L7.46677 20.4984L8.76581 21.2484L10.5224 18.206L9.22333 17.456ZM2.47991 17.6193L4.23647 14.5768L2.93743 13.8268L1.18088 16.8693L2.47991 17.6193ZM6.94257 20.4696L6.69873 19.7562L5.27937 20.2414L5.52321 20.9547L6.94257 20.4696ZM3.5067 17.9133L2.76703 18.0588L3.05651 19.5306L3.79619 19.3851L3.5067 17.9133ZM6.69873 19.7562C6.56678 19.3702 6.44639 19.0137 6.31011 18.7351C6.16472 18.4379 5.96198 18.1431 5.61702 17.944L4.86702 19.243C4.86829 19.2437 4.8688 19.2441 4.86967 19.2449C4.87071 19.2458 4.87467 19.2493 4.88158 19.2576C4.89662 19.2759 4.92383 19.3148 4.96268 19.3942C5.04773 19.5681 5.13476 19.8184 5.27937 20.2414L6.69873 19.7562ZM3.79619 19.3851C4.23485 19.2988 4.49512 19.2491 4.68822 19.2358C4.77641 19.2297 4.82376 19.2338 4.84706 19.2377C4.85777 19.2395 4.8628 19.2412 4.86408 19.2416C4.86517 19.242 4.86575 19.2423 4.86702 19.243L5.61702 17.944C5.27206 17.7448 4.9154 17.7166 4.58531 17.7393C4.2759 17.7606 3.90697 17.8346 3.5067 17.9133L3.79619 19.3851ZM1.18088 16.8693C0.945573 17.2768 0.72565 17.654 0.600869 17.9642C0.483135 18.2569 0.334863 18.7645 0.662524 19.2343L1.89283 18.3762C2.02982 18.5726 1.91011 18.7289 1.99251 18.524C2.06786 18.3367 2.21963 18.0701 2.47991 17.6193L1.18088 16.8693ZM2.76703 18.0588C2.2607 18.1584 1.96478 18.2146 1.76813 18.2244C1.55497 18.235 1.75169 18.1738 1.89283 18.3762L0.662524 19.2343C0.994336 19.71 1.52696 19.7382 1.84261 19.7225C2.17477 19.706 2.60056 19.6203 3.05651 19.5306L2.76703 18.0588ZM7.46677 20.4984C7.20649 20.9493 7.0515 21.214 6.92695 21.3729C6.79075 21.5467 6.86622 21.3649 7.10481 21.3853L6.97683 22.8798C7.54751 22.9287 7.91292 22.5465 8.10754 22.2982C8.3138 22.035 8.53051 21.656 8.76581 21.2484L7.46677 20.4984ZM5.52321 20.9547C5.67353 21.3945 5.81217 21.8061 5.96395 22.102C6.10818 22.3832 6.39892 22.8304 6.97683 22.8798L7.10481 21.3853C7.35063 21.4064 7.39602 21.6073 7.29862 21.4174C7.20877 21.2422 7.10949 20.9578 6.94257 20.4695L5.52321 20.9547ZM4.23647 14.5768C4.66368 13.8369 4.85968 13.5047 5.04504 13.2936L3.91783 12.3039C3.61 12.6546 3.32832 13.1498 2.93743 13.8268L4.23647 14.5768ZM10.5224 18.206C10.7324 17.8422 10.9073 17.5396 11.0432 17.2823L9.71692 16.5816C9.59712 16.8083 9.43862 17.0831 9.22333 17.456L10.5224 18.206ZM13.1993 18.206L14.9558 21.2484L16.2549 20.4984L14.4983 17.456L13.1993 18.206ZM22.5408 16.8693L20.7842 13.8268L19.4852 14.5768L21.2417 17.6193L22.5408 16.8693ZM18.1984 20.9547L18.4423 20.2414L17.0229 19.7562L16.7791 20.4696L18.1984 20.9547ZM19.9254 19.3851L20.6651 19.5306L20.9546 18.0588L20.2149 17.9133L19.9254 19.3851ZM18.4423 20.2414C18.5869 19.8184 18.6739 19.5681 18.759 19.3942C18.7978 19.3148 18.825 19.2759 18.84 19.2576C18.847 19.2493 18.8509 19.2458 18.852 19.2449C18.8528 19.2441 18.8533 19.2437 18.8546 19.243L18.1046 17.944C17.7597 18.1431 17.5569 18.4379 17.4115 18.7351C17.2752 19.0137 17.1549 19.3702 17.0229 19.7562L18.4423 20.2414ZM20.2149 17.9133C19.8147 17.8346 19.4457 17.7606 19.1363 17.7393C18.8062 17.7166 18.4496 17.7448 18.1046 17.944L18.8546 19.243C18.8559 19.2423 18.8565 19.242 18.8575 19.2416C18.8588 19.2412 18.8639 19.2395 18.8746 19.2377C18.8979 19.2338 18.9452 19.2297 19.0334 19.2358C19.2265 19.2491 19.4868 19.2988 19.9254 19.3851L20.2149 17.9133ZM21.2417 17.6193C21.502 18.0701 21.6538 18.3367 21.7291 18.524C21.8115 18.7288 21.6918 18.5726 21.8288 18.3762L23.0591 19.2343C23.3868 18.7645 23.2385 18.2569 23.1208 17.9642C22.996 17.654 22.7761 17.2768 22.5408 16.8693L21.2417 17.6193ZM20.6651 19.5306C21.1211 19.6203 21.5469 19.706 21.879 19.7225C22.1947 19.7382 22.7273 19.71 23.0591 19.2343L21.8288 18.3762C21.9699 18.1738 22.1667 18.235 21.9535 18.2244C21.7569 18.2146 21.4609 18.1584 20.9546 18.0588L20.6651 19.5306ZM14.9558 21.2484C15.1911 21.656 15.4078 22.035 15.6141 22.2982C15.8087 22.5465 16.1741 22.9287 16.7448 22.8798L16.6168 21.3853C16.8554 21.3649 16.9309 21.5467 16.7947 21.3729C16.6701 21.214 16.5151 20.9493 16.2549 20.4984L14.9558 21.2484ZM16.7791 20.4695C16.6121 20.9578 16.5129 21.2422 16.423 21.4174C16.3256 21.6073 16.371 21.4064 16.6168 21.3853L16.7448 22.8798C17.3227 22.8304 17.6134 22.3832 17.7577 22.102C17.9095 21.8061 18.0481 21.3945 18.1984 20.9547L16.7791 20.4695ZM14.4983 17.456C14.2805 17.0788 14.1209 16.802 14.0007 16.574L12.6737 17.2733C12.8104 17.5328 12.9869 17.8381 13.1993 18.206L14.4983 17.456ZM5.49947 12.2143C5.0199 11.2465 4.74998 10.1558 4.74998 9H3.24998C3.24998 10.392 3.57556 11.7101 4.15542 12.8803L5.49947 12.2143ZM12 16.25C11.5161 16.25 11.0441 16.2027 10.588 16.1127L10.2977 17.5844C10.8489 17.6931 11.4182 17.75 12 17.75V16.25ZM10.588 16.1127C8.35288 15.6718 6.48415 14.2015 5.49947 12.2143L4.15542 12.8803C5.34259 15.2761 7.59539 17.0513 10.2977 17.5844L10.588 16.1127ZM10.9792 17.383L11.042 17.2996L9.84364 16.3975L9.78088 16.4808L10.9792 17.383ZM13.2128 16.1491C12.8189 16.2154 12.4138 16.25 12 16.25V17.75C12.4975 17.75 12.9859 17.7084 13.4617 17.6283L13.2128 16.1491ZM14.0872 16.9237V16.8887H12.5872V16.9237H14.0872ZM19.25 9C19.25 10.1987 18.9596 11.3274 18.4461 12.3217L19.7789 13.01C20.3997 11.8079 20.75 10.4438 20.75 9H19.25ZM18.4461 12.3217C17.4178 14.3128 15.4949 15.7651 13.2128 16.1491L13.4617 17.6283C16.2211 17.164 18.5394 15.41 19.7789 13.01L18.4461 12.3217ZM20.7842 13.8268C20.3325 13.0445 20.0252 12.4962 19.6275 12.1206L18.5975 13.2111C18.7954 13.3981 18.9793 13.7006 19.4852 14.5768L20.7842 13.8268ZM5.04504 13.2936C5.0513 13.2865 5.07895 13.2597 5.16073 13.2192L4.49416 11.8754C4.31796 11.9628 4.10157 12.0947 3.91783 12.3039L5.04504 13.2936Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  &ensp; Hãng sản xuất:
                  <span className="tw-font-[500] tw-ml-1">
                    {ProductDetail?.brand}
                  </span>
                </div>
                <div className="tw-text-white tw-mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3.06818C1.58579 3.06818 1.25 3.40397 1.25 3.81818C1.25 4.2324 1.58579 4.56818 2 4.56818V3.06818ZM22 20.9318C22.4142 20.9318 22.75 20.596 22.75 20.1818C22.75 19.7676 22.4142 19.4318 22 19.4318V20.9318ZM4.56818 2C4.56818 1.58579 4.2324 1.25 3.81818 1.25C3.40397 1.25 3.06818 1.58579 3.06818 2H4.56818ZM19.4319 22C19.4319 22.4142 19.7677 22.75 20.1819 22.75C20.5961 22.75 20.9319 22.4142 20.9319 22L19.4319 22ZM3.81818 4.56818H10.1818V3.06818H3.81818V4.56818ZM19.4318 13.8182V20.1818H20.9318V13.8182H19.4318ZM20.1818 19.4318H13.8182V20.9318H20.1818V19.4318ZM4.56818 10.1818V3.81818H3.06818V10.1818H4.56818ZM13.8182 19.4318C11.44 19.4318 9.73173 19.4302 8.43176 19.2554C7.15336 19.0836 6.38263 18.7567 5.81298 18.187L4.75232 19.2477C5.64713 20.1425 6.78715 20.5478 8.23189 20.7421C9.65505 20.9334 11.4824 20.9318 13.8182 20.9318V19.4318ZM3.06818 10.1818C3.06818 12.5176 3.06659 14.345 3.25793 15.7681C3.45217 17.2128 3.85751 18.3529 4.75232 19.2477L5.81298 18.187C5.24332 17.6174 4.91643 16.8466 4.74455 15.5682C4.56977 14.2683 4.56818 12.56 4.56818 10.1818H3.06818ZM10.1818 4.56818C12.56 4.56818 14.2683 4.56977 15.5682 4.74455C16.8466 4.91643 17.6174 5.24332 18.187 5.81298L19.2477 4.75232C18.3529 3.85751 17.2128 3.45217 15.7681 3.25793C14.345 3.06659 12.5176 3.06818 10.1818 3.06818V4.56818ZM20.9318 13.8182C20.9318 11.4824 20.9334 9.65505 20.7421 8.23189C20.5478 6.78715 20.1425 5.64713 19.2477 4.75232L18.187 5.81298C18.7567 6.38263 19.0836 7.15336 19.2554 8.43176C19.4302 9.73174 19.4318 11.44 19.4318 13.8182H20.9318ZM2 4.56818H3.81818V3.06818H2V4.56818ZM22 19.4318H20.1818V20.9318H22V19.4318ZM3.06818 2V3.81818H4.56818V2H3.06818ZM20.9319 22L20.9318 20.1818L19.4318 20.1818L19.4319 22L20.9319 22ZM13.25 12C13.25 12.6904 12.6904 13.25 12 13.25V14.75C13.5188 14.75 14.75 13.5188 14.75 12H13.25ZM12 13.25C11.3096 13.25 10.75 12.6904 10.75 12H9.25C9.25 13.5188 10.4812 14.75 12 14.75V13.25ZM10.75 12C10.75 11.3096 11.3096 10.75 12 10.75V9.25C10.4812 9.25 9.25 10.4812 9.25 12H10.75ZM12 10.75C12.6904 10.75 13.25 11.3096 13.25 12H14.75C14.75 10.4812 13.5188 9.25 12 9.25V10.75Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  &ensp; Tỷ lệ:
                  <span className="tw-font-[500] tw-ml-1">
                    1/{ProductDetail?.size}
                  </span>
                </div>
                <div className="tw-text-white tw-mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5761 9.4801C16.8413 9.16189 16.7983 8.68897 16.4801 8.4238C16.1619 8.15862 15.689 8.20162 15.4238 8.51982L11.9602 12.6761C11.5895 13.121 11.3618 13.3915 11.1742 13.5609C11.0872 13.6394 11.0356 13.6707 11.0108 13.6827C11.0058 13.6851 11.0022 13.6866 11 13.6874C11 13.6874 11 13.6874 11 13.6874C10.9977 13.6866 10.9941 13.6851 10.9891 13.6827C10.9644 13.6707 10.9128 13.6394 10.8258 13.5609C10.6382 13.3915 10.4105 13.121 10.0397 12.6761L8.57614 10.9198C8.31096 10.6016 7.83804 10.5586 7.51983 10.8238C7.20162 11.089 7.15863 11.5619 7.4238 11.8801L8.9193 13.6747C9.24777 14.069 9.54388 14.4244 9.82048 14.6741C10.1214 14.9459 10.5005 15.1879 11 15.1879C11.4995 15.1879 11.8785 14.9459 12.1795 14.6741C12.4561 14.4244 12.7522 14.069 13.0806 13.6747L16.5761 9.4801Z"
                      fill="#FAFAFA"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5643 2.75658C14.5409 -0.829342 9.45899 -0.829342 8.43562 2.75658C8.1088 3.90174 6.93229 4.581 5.77714 4.29145C2.15995 3.38476 -0.381025 7.78586 2.21279 10.4651C3.04112 11.3207 3.04112 12.6792 2.21279 13.5348C-0.381026 16.2141 2.15995 20.6152 5.77714 19.7085C6.93229 19.4189 8.1088 20.0982 8.43562 21.2433C9.45899 24.8293 14.5409 24.8293 15.5643 21.2433C15.8911 20.0982 17.0676 19.4189 18.2228 19.7085C21.84 20.6152 24.381 16.2141 21.7872 13.5348C20.9588 12.6792 20.9588 11.3207 21.7872 10.4651C24.381 7.78586 21.84 3.38476 18.2228 4.29145C17.0676 4.581 15.8911 3.90174 15.5643 2.75658ZM9.87803 3.16823C10.4873 1.03344 13.5127 1.03344 14.1219 3.16823C14.6709 5.09182 16.6471 6.23281 18.5875 5.74644C20.7409 5.20666 22.2536 7.82674 20.7094 9.42175C19.3181 10.859 19.3181 13.141 20.7094 14.5782C22.2536 16.1732 20.7409 18.7933 18.5875 18.2535C16.6471 17.7671 14.6709 18.9081 14.1219 20.8317C13.5127 22.9665 10.4873 22.9665 9.87803 20.8317C9.32906 18.9081 7.3528 17.7671 5.41243 18.2535C3.25904 18.7933 1.74633 16.1732 3.29049 14.5782C4.68189 13.141 4.68189 10.859 3.29049 9.42175C1.74633 7.82674 3.25904 5.20666 5.41243 5.74644C7.3528 6.23281 9.32906 5.09182 9.87803 3.16823Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  &ensp; Tình trạng hàng:
                  <span className="tw-font-[500] tw-ml-1">Mới</span>
                </div>
                <div className="tw-text-white tw-mb-2 tw-flex tw-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M13 16.25C12.5858 16.25 12.25 16.5858 12.25 17C12.25 17.4142 12.5858 17.75 13 17.75H17C17.4142 17.75 17.75 17.4142 17.75 17C17.75 16.5858 17.4142 16.25 17 16.25H13Z"
                        fill="#FAFAFA"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.3451 3.32061C15.4807 3.24999 14.4053 3.25 13.0336 3.25H10.9664C9.59472 3.25 8.51929 3.24999 7.65494 3.32061C6.77479 3.39252 6.04769 3.54138 5.38955 3.87671C4.30762 4.42798 3.42798 5.30762 2.87671 6.38955C2.39394 7.33705 2.2906 8.44938 2.26119 9.98564C2.25 10.5699 2.25 11.2352 2.25 11.9942V12.0336C2.25 13.4053 2.24999 14.4807 2.32061 15.3451C2.39252 16.2252 2.54138 16.9523 2.87671 17.6104C3.42798 18.6924 4.30762 19.572 5.38955 20.1233C6.04769 20.4586 6.77479 20.6075 7.65494 20.6794C8.51927 20.75 9.59469 20.75 10.9664 20.75H13.0336C14.4053 20.75 15.4807 20.75 16.3451 20.6794C17.2252 20.6075 17.9523 20.4586 18.6104 20.1233C19.6924 19.572 20.572 18.6924 21.1233 17.6104C21.4586 16.9523 21.6075 16.2252 21.6794 15.3451C21.75 14.4807 21.75 13.4053 21.75 12.0336V11.9942C21.75 11.2352 21.75 10.5699 21.7388 9.98564C21.7094 8.44938 21.6061 7.33705 21.1233 6.38955C20.572 5.30762 19.6924 4.42798 18.6104 3.87671C17.9523 3.54138 17.2252 3.39252 16.3451 3.32061ZM6.07054 5.21322C6.48197 5.00359 6.9897 4.87996 7.77708 4.81563C8.57322 4.75058 9.58749 4.75 11 4.75H13C14.4125 4.75 15.4268 4.75058 16.2229 4.81563C17.0103 4.87996 17.518 5.00359 17.9295 5.21322C18.7291 5.62068 19.3793 6.27085 19.7868 7.07054C20.0409 7.56922 20.1625 8.19217 20.2143 9.25H3.78567C3.83752 8.19217 3.95913 7.56922 4.21322 7.07054C4.62068 6.27085 5.27085 5.62068 6.07054 5.21322ZM3.75 12C3.75 11.5452 3.75001 11.1307 3.7523 10.75H20.2477C20.25 11.1307 20.25 11.5452 20.25 12C20.25 13.4125 20.2494 14.4268 20.1844 15.2229C20.12 16.0103 19.9964 16.518 19.7868 16.9295C19.3793 17.7291 18.7291 18.3793 17.9295 18.7868C17.518 18.9964 17.0103 19.12 16.2229 19.1844C15.4268 19.2494 14.4125 19.25 13 19.25H11C9.58749 19.25 8.57322 19.2494 7.77708 19.1844C6.9897 19.12 6.48197 18.9964 6.07054 18.7868C5.27085 18.3793 4.62068 17.7291 4.21322 16.9295C4.00359 16.518 3.87996 16.0103 3.81563 15.2229C3.75058 14.4268 3.75 13.4125 3.75 12Z"
                        fill="#FAFAFA"
                      />
                    </g>
                  </svg>
                  &ensp; Chấp nhận thanh toán:
                  <div className="tw-flex tw-items-center tw-ml-2">
                    <img alt="vnpay" className="tw-mr-2" src={vnpay} />
                    <img alt="momo" src={momo} />
                  </div>
                </div>
                <ul className="ul-info  bigger-font">
                  <li>Số lượng mua</li>
                </ul>
                <div className="tw-mb-6">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={quanlity}
                    onChange={(e) => {
                      setQuanlity(e);
                    }}
                  />
                </div>
                <div className="tw-flex tw-items-center">
                  <Button
                    disabled={isAuthenticated}
                    onClick={() => handleSubmit()}
                    className="tw-flex tw-items-center tw-justify-center tw-text-white tw-bg-[#ffffff1a] tw-border-[#ffffff1a] tw-mr-3"
                  >
                    <ShoppingCartOutlined />
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    disabled={isAuthenticated}
                    className="tw-flex tw-items-center tw-justify-center tw-text-white tw-bg-[#DC1814] tw-border-[#DC1814]"
                  >
                    Mua ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-bg-[#33322C] tw-rounded-[16px]  tw-mb-10 tw-p-10 tw-flex">
            <Collapse
              expandIconPosition={"end"}
              className="tw-w-full"
              items={item1}
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Đặt hàng thanh toán",
      children: (
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
      ),
    },
    {
      key: "3",
      label: "Chính sách vận chuyển",
      children: (
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
      ),
    },
    {
      key: "4",
      label: "Chính sách đổi trả",
      children: (
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
      ),
    },
  ];

  const handleSubmit = useCallback(() => {
    dispatch({
      type: "CREATE_CARD",
      payload: {product_id: Number(id), quantity: quanlity},
    });
  }, [quanlity, id, dispatch]);

  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    dispatch({type: "GET_PRODUCT_DETAIL", payload: {id: Number(id)}});
  }, [dispatch, id]);

  return (
      <LauoutDefault>
        <Wrapper>
          <div className="list-header">
            <div className="tw-text-white tw-text-[36px] tw-font-[700] tw-mb-4 tw-text-center">
              Thông tin sản phẩm
            </div>
            {/*<div className="tw-text-white tw-text-[16px] tw-font-[600] tw-text-center">*/}
            {/*  Lorem Ipsum is simply dummy text of the printing and typesetting*/}
            {/*  industry. Lorem Ipsum has been the industry's standard*/}
            {/*</div>*/}
          </div>
          <div className="tw-w-full tw-flex tw-justify-center tw-mt-[-48px]">
            <Tabs
                className="tw-w-full tw-text-white"
                centered
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
            />
          </div>
        </Wrapper>
      </LauoutDefault>
  );
};

export default ProductDetail;
