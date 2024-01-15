import React from "react";
import { useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import qrcode from "../../../assets/images/qrCode.jpg"

const OrderDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orderDetail = useSelector((state) => state.orderDetail);

  const caculatorMoney = (data) => {
    let total = 0;
    data.forEach((i) => {
      total += Number(i?.quantity) * Number(i?.price_each);
    });
    return total;
  };

  useEffect(() => {
    dispatch({ type: "FETCH_ORDER_DETAIL", payload: { id: Number(id) } });
  }, [dispatch, id]);

  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white tw-py-10">
        <div className="tw-p-6 container !tw-min-h-[calc(100vh_-_500px)]">
          <div className="tw-flex tw-justify-between">
            <div>
              <div className="tw-text-[28px] tw-mb-6">
                Chi tiết đơn hàng{" "}
                <span className="tw-font-[700]">
                  {orderDetail?.order?.payment_code}
                </span>
              </div>
              <div className="tw-text-[16px] tw-mb-2">
                Tên người nhận: {orderDetail?.order?.user_id} -{" "}
                {orderDetail?.order?.address}
              </div>
              <div className="tw-mb-2 tw-text-[20px] tw-font-[500]">
                Thông tin đơn hàng:
              </div>
              {orderDetail?.order_items?.length > 0 &&
                orderDetail?.order_items.map((i) => (
                  <div className="tw-text-[14px] tw-pl-3" key={i?.order?.id}>
                    {i?.name} - {i?.type} - {i?.country} -{" "}
                    {Number(i?.price_each) * Number(i?.quantity)}
                  </div>
                ))}
              {orderDetail?.order_items?.length > 0 && (
                <div className="tw-mt-6 tw-text-[20px] tw-font-[500]">
                  Thành tiền:{" "}
                  <span className="tww-font-[700]">
                    {caculatorMoney(orderDetail?.order_items)} vnd
                  </span>
                </div>
              )}
              <div></div>
            </div>
            <div className="tw-w-[400px] tw-flex tw-justify-center">
                <div className="tw-w[300px]">
                    <div className="tw-text-center">Quét mã thanh toán Đơn hàng</div>
                    <img alt="qrcode" className="tw-w-full" src={qrcode}/>
                    <div className="tw-text-center">Ngân hàng: BIDV</div>
                    <div className="tw-text-center">Chủ tài khoản: NGUYEN LE DUY</div>
                    <div className="tw-text-center">Số tài khoản: 21110001606693</div>
                    <div className="tw-text-center">Chi nhánh: Hà nội</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default OrderDetail;
