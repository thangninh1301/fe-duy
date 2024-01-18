import React from "react";
import { useMemo, useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Table, Empty } from "antd";
import { Link } from "react-router-dom";

const OrderUser = () => {
  const dispatch = useDispatch();

  const listOrder = useSelector((state) => state.listOrder);

  const caculatorMoney = (data) => {
    let total = 0;
    data.forEach((i) => {
      total += Number(i?.quantity) * Number(i?.price_each);
    });
    return total;
  };

  const columns = useMemo(() => {
    return [
      {
        title: "Mã đơn hàng",
        dataIndex: "order",
        render: (value, item) => <div>{item?.order?.payment_code}</div>,
      },
      {
        title: "Tên người đặt",
        dataIndex: "Nameorder",
        render: (value, item) => <div>{item?.order?.user_id}</div>,
      },
      {
        title: "Địa chỉ",
        dataIndex: "order",
        render: (value, item) => <div>{item?.order?.address}</div>,
      },
      {
        title: "Chi tiết đơn hàng (VND)",
        dataIndex: "price_each",
        render: (value, item) => (
          <div>
            {item?.order_items.map((i) => (
              <ul key={i?.id}>
                <li>
                  Tên SP:<span>{i?.name}</span>
                </li>
                <li>
                  Loại:<span>{i?.type}</span>
                </li>
                <li>
                  Giá:<span>{i?.price_each}</span>
                </li>
                <li>
                  Số lượng:<span>{i?.quantity}</span>
                </li>
              </ul>
            ))}
          </div>
        ),
      },
      {
        title: "Tổng hóa đơn",
        dataIndex: "price_each",
        render: (value, item) => <div>{caculatorMoney(item?.order_items)}</div>,
      },
      {
        title: "Thanh toán",
        dataIndex: "money",
        render: (value, item) => (
          <Link to={`/order/${item?.order?.id}`} className="tw-text-[16px]">
            Thanh toán
          </Link>
        ),
      },
    ];
    // eslint-disable-next-line
  }, [listOrder]);

  useEffect(() => {
    dispatch({ type: "FETCH_ORDER_ADMIN" });
  }, [dispatch]);
  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white ">
        <div className="tw-p-6 container">
          <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
            <div className="tw-text-[20px] tw-font-[700]">Đơn hàng</div>
          </div>
          {listOrder?.length > 0 ? (
            <Table
              rowKey={(record) =>
                record?.order?.id ? record?.order?.id : new Date().getTime()
              }
              columns={columns}
              dataSource={listOrder}
              pagination={false}
              bordered
            />
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </LauoutDefault>
  );
};

export default OrderUser;
