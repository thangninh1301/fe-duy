import React from "react";
import { useMemo, useEffect, useState, useCallback } from "react";
import LauoutDefault from "../../../components/Admin/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Table, Empty, Modal, Input, Button } from "antd";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Customer = () => {
  const dispatch = useDispatch();

  const customerList = useSelector((state) => state.customer);
  const [idSlected, setIdSlected] = useState(null);
  const [isModalOpenConfirm, setisModalOpenConfirm] = useState(false);
  const [isModalOpenUpdate, setisModalOpenUpdate] = useState(false);
  const [dataSelected, setDataSelected] = useState({
    id: null,
    phone: "",
    email: "",
  });
    const initialValues = useMemo(() => {
      return {
        ...dataSelected,
      };
    }, [dataSelected]);
    
  const rank = (total) => {
    if (total > 5000000) return "Kim cương";
    else if (total > 3000000) return "Vàng";
    else if (total > 1000000) return "Bạc";
    else if (total > 100000) return "Đồng";
    else return "Sắt";
  };



  const validationSchema = Yup.object({
    phone: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    email: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
  });

    const handleCancel = () => {
      setisModalOpenUpdate(false);
      setisModalOpenConfirm(false);
    };
  const showModalUpdate = (item) => {
    setDataSelected(item);
    setisModalOpenUpdate(true);
  };

  const showModalConfirm = (id) => {
    setIdSlected(id);
    setisModalOpenConfirm(true);
  };
  const columns = useMemo(() => {
    return [
      {
        title: "Tên ",
        dataIndex: "order",
        render: (value, item) => <div>{item?.full_name}</div>,
      },
      {
        title: "Tên đăng nhập",
        dataIndex: "order",
        render: (value, item) => <div>{item?.user_name}</div>,
      },
      {
        title: "Tên số điện thoại",
        dataIndex: "Nameorder",
        render: (value, item) => <div>{item?.phone}</div>,
      },
      {
        title: "Email",
        dataIndex: "order",
        render: (value, item) => <div>{item?.email}</div>,
      },
      {
        title: "Rank",
        dataIndex: "order",
        render: (value, item) => <div>{rank(item?.total_payment)}</div>,
      },
      {
        title: "",
        dataIndex: "action",
        render: (value, item) => (
          <div className="tw-flex tw-items-center">
            <div
              className="tw-mr-3"
              onClick={() => showModalUpdate({ ...item })}
            >
              <EditOutlined />
            </div>
            <Link className="tw-mr-3" to={`/admin/customer/${item?.id}`}>
              <EyeOutlined></EyeOutlined>
            </Link>
            <div onClick={() => showModalConfirm(item.id)}>
              <DeleteOutlined />
            </div>
          </div>
        ),
      },
    ];
    // eslint-disable-next-line
  }, [customerList]);

  const handleDelete = useCallback(
    () => {
      dispatch({
        type: "DELETE_CUSTOMER",
        payload: { id: idSlected },
      });
      handleCancel();
    },
    // eslint-disable-next-line
    [idSlected]
  );
  const handleSubmit = useCallback(
    (values) => {
      dispatch({
        type: "UPDATE_CUSTOMER",
        payload: { ...values },
      });
      setisModalOpenUpdate(false);
    },
    // eslint-disable-next-line
    [initialValues]
  );

  useEffect(() => {
    dispatch({ type: "FETCH_CUSTOMER" });
  }, [dispatch]);
  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white tw-min-h-[calc(100vh_-_476px)]">
        <div className="tw-p-6 container">
          <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
            <div className="tw-text-[20px] tw-font-[700]">Khách hàng</div>
          </div>
          {customerList?.length > 0 ? (
            <Table
              rowKey={(record) =>
                record?.order?.id ? record?.order?.id : new Date().getTime()
              }
              columns={columns}
              dataSource={customerList}
              pagination={false}
              bordered
            />
          ) : (
            <Empty />
          )}
        </div>
      </div>
      <Modal
        title="Cập nhật người dùng"
        open={isModalOpenUpdate}
        centered={true}
        onCancel={handleCancel}
        width={1150}
        footer={null}
        styles={{ background: "#33322C" }}
        className="modal-filter"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, handleSubmit }) => {
            return (
              <div className="tw-bg-white tw-rounded-[10px] tw-px-6 tw-pt-6 tw-flex tw-items-center  tw-flex-col">
                <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                  <div className="tw-w-full">
                    <div className="tw-mb-1">Số điện thoại</div>
                    <Input
                      name="phone"
                      value={values.phone || ""}
                      onChange={(event) => {
                        setFieldValue("phone", event.target.value);
                      }}
                      placeholder="Nhập tên sản phẩm"
                    />
                    <ErrorMessage
                      className="invalid"
                      name="phone"
                      component="div"
                    />
                  </div>
                </div>

                <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                  <div className="tw-w-full">
                    <div className="tw-mb-1">Email</div>
                    <Input
                      name="email"
                      value={values.email || ""}
                      onChange={(event) => {
                        setFieldValue("email", event.target.value);
                      }}
                      placeholder="Nhập tên sản phẩm"
                    />
                    <ErrorMessage
                      className="invalid"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-end tw-w-full tw-my-4">
                  <Button type="default" onClick={handleCancel}>
                    Huỷ bỏ
                  </Button>
                  <Button
                    onClick={() => handleSubmit(values)}
                    className="tw-ml-3"
                    type="primary"
                  >
                    Cập nhật
                  </Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </Modal>

      <Modal
        open={isModalOpenConfirm}
        centered={true}
        onCancel={handleCancel}
        onOk={handleDelete}
        width={450}
      >
        <div className="modal-confirm-container tw-flex tw-items-center tw-py-6">
          <div>
            <ExclamationCircleOutlined className="tw-text-[#FCAF17] tw-mr-2" />
          </div>
          <div className="modal-confirm-right margin-left-20">
            <div className="modal-confirm-title tw-font-[500] tw-text-[16px]">
              Bạn có muốn xóa người dùng này không
            </div>
          </div>
        </div>
      </Modal>
    </LauoutDefault>
  );
};

export default Customer;
