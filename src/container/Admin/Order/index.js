import React from "react";
import { useMemo,useEffect } from "react";
import LauoutDefault from "../../../components/Admin/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Table, Empty } from "antd";

const Order = () => {
  const dispatch = useDispatch();

  const listOrder = useSelector((state) => state.listOrder);

  const caculatorMoney= (data)=>{
    let total=0;
    data.forEach(i => {
        total+=(Number(i?.quantity)*Number(i?.price_each))
    });
    return total
  }

  const columns =useMemo(()=>{
    return [
        {
            title: "Mã đơn hàng",
            dataIndex: "order",
            render:(value,item)=><div>
            {item?.order?.payment_code}
          </div>
          },
          {
            title: "Tên người đặt",
            dataIndex: "Nameorder",
            render:(value,item)=><div>
            {item?.order?.user_id}
          </div>
          },
          {
            title: "Địa chỉ",
            dataIndex: "order",
            render:(value,item)=><div>
            {item?.order?.address}
          </div>
          },
        {
          title: "Chi tiết đơn hàng (VND)",
          dataIndex: "price_each",
          render:(value,item)=>(
            <div>{item?.order_items.map(i=><ul>
                <li>Tên SP:<span>{i?.name}</span></li>
                <li>Loại:<span>{i?.type}</span></li>
                <li>Giá:<span>{i?.price_each}</span></li>
                <li>Số lượng:<span>{i?.quantity}</span></li>
            </ul>)}</div>
          )
        },
        {
            title: "Tổng hóa đơn",
            dataIndex: "price_each",
            render:(value,item)=><div>
            {caculatorMoney(item?.order_items)}
          </div>
          },
      ]
      // eslint-disable-next-line
  },[listOrder]) ;
 
  useEffect(() => {
    dispatch({ type: "FETCH_ORDER_ADMIN" });
  }, [dispatch]);
  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white ">
      <div className="tw-p-6 container">
        {listOrder?.length > 0 ? (
          <Table
            rowKey={(record) => (record?.order?.id ? record?.order?.id : new Date().getTime())}
            columns={columns}
            dataSource={listOrder}
            pagination={false}
          />
        ) : (
          <Empty />
        )}
      </div>
      </div>
    
    </LauoutDefault>
  );
};

export default Order;
