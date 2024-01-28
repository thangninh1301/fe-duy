import React from "react";
import {  useEffect } from "react";
import LauoutDefault from "../../../components/Admin/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const OrderUser = () => {
  const dispatch = useDispatch();
const { id } = useParams();
  const profile = useSelector((state) => state.profile);
const rank = (total) => {
  if (total > 5000000) return "Kim cương";
  else if (total > 3000000) return "Vàng";
  else if (total > 1000000) return "Bạc";
  else if (total > 100000) return "Đồng";
  else return "Sắt";
};

    useEffect(() => {
      dispatch({ type: "FETCH_CUSTOMER_DETAIL", payload: { id: Number(id) } });
    }, [dispatch, id]);

  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white tw-min-h-[calc(100vh_-_476px)] tw-p-10">
        <div>
          Tên người dùng: <span>{profile?.full_name}</span>
        </div>
        <div>
          Tên đăng nhập: <span>{profile?.user_name}</span>
        </div>
        <div>
          SĐT: <span>{profile?.phone}</span>
        </div>
        <div>
          Thành viên hạng: <span>{rank(profile?.total_payment)}</span>
        </div>
        <div>
          Tên người dùng: <span>{profile?.full_name}</span>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default OrderUser;
