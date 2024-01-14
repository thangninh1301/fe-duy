import React from "react";
import { useState, useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Card, Skeleton, Select } from "antd";
import productImage from "../../../assets/images/productImage.png";
import { SORT } from "../../../constants/common";
import { useNavigate } from "react-router-dom";

const ProductUser = () => {
    const  navigate  = useNavigate();
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.Loading);
  const listProductUser = useSelector((state) => state.listProductUser);
  const [sort,setSort]=useState("1");

  const viewDetail = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_USER" });
  }, [dispatch]);

  return (
    <LauoutDefault>
      {Loading ? (
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)]">
          <Skeleton />
        </div>
      ) : (
        <div className="tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)]">
          <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
            <div className="tw-text-white tw-text-[20px]">
              Tất cả:
              <span className="tw-font-[600]">
                {listProductUser.listProductUser}
              </span>
              sản phẩm
            </div>
            <div className="tw-flex tw-items-center tw-justify-end">
              <div className=" tw-w-[200px] tw-text-white">Thứ tự hiển thị</div>
              <Select
                name="size"
                className="tw-w-full"
                defaultValue={sort || ""}
                placeholder="Chọn kích thước"
                onChange={(value) => {
                  setSort(value);
                }}
                options={SORT}
              />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-mb-6">
            <div className="tw-text-white">Lọc sản phẩm theo :</div>
            <div className="tw-flex tw-items-center tw-ml-3">
              <div className="tw-text-white tw-bg-[#DC1914] tw-py-[6px] tw-px-4 tw-rounded-[16px] ">
                Hãng: TRUMPETER
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-ml-3">
              <div className="tw-text-white tw-bg-[#DC1914] tw-py-[6px] tw-px-4 tw-rounded-[16px] ">
                Tất cả
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-ml-3">
              <div className="tw-text-white tw-bg-[#DC1914] tw-py-[6px] tw-px-4 tw-rounded-[16px] ">
                1/35
              </div>
            </div>
          </div>
          {listProductUser?.length > 0 ? (
            <div className="tw-p-6 tw-flex tw-flex-wrap tw-w-full">
              {listProductUser.map((i) => (
                <Card
                  key={i.id}
                  hoverable={true}
                  style={{
                    width: "calc(25% - 24px)",
                    maxWidth: "350px",
                    minWidth: "200px",
                    marginRight: "24px",
                    padding: "8px",
                  }}
                  className="hoverable-card"
                  cover={<img alt="example" src={productImage} />}
                  onClick={() => viewDetail(i.id)}
                >
                  <div>
                    <div className="tw-text-white tw-font-[700] tw-mb-4">
                      {i?.name}
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <div className="tw-text-[#FFC43F] tw-text-[18px] tw-font-[700] tw-leading-[36px]">
                        {i.price_each}VND
                      </div>
                      <div className="tw-text-white ">
                        SL:<span>{i.product_quantity}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      )}
    </LauoutDefault>
  );
};

export default ProductUser;
