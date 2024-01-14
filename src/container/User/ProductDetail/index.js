import React from "react";
import { useCallback, useState, useEffect } from "react";
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
  CreditCardOutlined,
  SafetyOutlined,
  PercentageOutlined,
  ExperimentOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.Loading);
  const ProductDetail = useSelector((state) => state.ProductDetail);
const {id}= useParams();
  const [quanlity, setQuanlity] = useState(1);

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
              <Image src={productImage} />
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
              <ul className="ul-info">
                <li>Thông tin cơ bản</li>
              </ul>
              <div className="">
                <div className="tw-text-white tw-mb-2">
                  <ExperimentOutlined className="tw-mr-3" />
                  Hãng sản xuất:
                  <span className="tw-font-[500] tw-ml-1">
                    {ProductDetail?.brand}
                  </span>
                </div>
                <div className="tw-text-white tw-mb-2">
                  <PercentageOutlined className="tw-mr-3" />
                  Kích thước:
                  <span className="tw-font-[500] tw-ml-1">
                    {ProductDetail?.size}
                  </span>
                </div>
                <div className="tw-text-white tw-mb-2">
                  <SafetyOutlined className="tw-mr-3" />
                  Tình trạng hàng:
                  <span className="tw-font-[500] tw-ml-1">Mới</span>
                </div>
                <div className="tw-text-white tw-mb-2 tw-flex tw-items-center">
                  <CreditCardOutlined className="tw-mr-3" />
                  Chấp nhận thanh toán:
                  <div className="tw-flex tw-items-center tw-ml-2">
                    <img alt="vnpay" className="tw-mr-2" src={vnpay} />
                    <img alt="momo" src={momo} />
                  </div>
                </div>
                <ul className="ul-info">
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
                    onClick={() => handleSubmit()}
                    className="tw-flex tw-items-center tw-justify-center tw-text-white tw-bg-[#ffffff1a] tw-border-[#ffffff1a] tw-mr-3"
                  >
                    <ShoppingCartOutlined />
                    Thêm vào giỏ hàng
                  </Button>
                  <Button className="tw-flex tw-items-center tw-justify-center tw-text-white tw-bg-[#DC1814] tw-border-[#DC1814]">
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
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)] tw-text-white">
          Đặt hàng thanh toán
        </div>
      ),
    },
    {
      key: "3",
      label: "Chính sách vận chuyển",
      children: (
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)] tw-text-white">
          Chính sách vận chuyển
        </div>
      ),
    },
    {
      key: "4",
      label: "Chính sách đổi trả",
      children: (
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)] tw-text-white">
          Chính sách đổi trả
        </div>
      ),
    },
  ];

  const handleSubmit = useCallback(() => {
    dispatch({
      type: "CREATE_CARD",
      payload: { product_id: Number(id), quantity: quanlity },
    });
  }, [quanlity, id, dispatch]);
  
const onChange = (key) => {
  console.log(key);
};
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_DETAIL", payload: { id: Number(id) } });
  }, [dispatch, id]);

  return (
    <LauoutDefault>
      <Wrapper>
        <div className="list-header">
          <div className="tw-text-white tw-text-[36px] tw-font-[700] tw-mb-4 tw-text-center">
            Thông tin sản phẩm
          </div>
          <div className="tw-text-white tw-text-[16px] tw-font-[600] tw-text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </div>
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
