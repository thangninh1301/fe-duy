import React from "react";
import { useState, useEffect,useCallback,useMemo } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Table, Empty, Button,Modal,Input } from "antd";
import { DeleteOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import productImage from "../../../assets/images/productImage.png";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const { TextArea } = Input;
const Card = () => {
  const dispatch = useDispatch();
  const listCard = useSelector((state) => state.listCard);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [idSlected, setIdSlected] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const initialValues = {
    address: "",
  };

  const validationSchema = Yup.object({
    address: Yup.string().required("Bạn chưa nhập địa chỉ").trim(),
  });
  const columns =useMemo(()=> [
    {
      title: "Ảnh",
      dataIndex: "image",
      render: () => (
        <img
          className="tw-w-[100px] tw-h-[100px]"
          alt="product"
          src={productImage}
        />
      ),
    },
    {
      title: "Tên sanr phẩm",
      dataIndex: "name",
    },
    {
      title: "Loại",
      dataIndex: "type",
    },
    {
      title: "số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
    },
    {
      title: "Giá (VND)",
      dataIndex: "price_each",
    },
    {
      title: "Thành tiền (VND)",
      dataIndex: "money",
      render: (value, item) => (
        <div>{Number(item?.quantity) * Number(item?.price_each)} </div>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (value, item) => (
        <div onClick={()=>showModalConfirm(item.id)}>
          <DeleteOutlined />
        </div>
      ),
    },
    // eslint-disable-next-line
  ],[listCard]);

  const showModalConfirm = (id) => {
    setIdSlected(id);
    setisModalOpen(true);
  };

  const handleCancel = () => {
    setisModalOpen(false);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSubmit = useCallback(
    () => {
      dispatch({
        type:  "DELETE_CARD",
        payload: {id:idSlected} ,
      });
      handleCancel();
    },
    // eslint-disable-next-line
    [idSlected, dispatch]
  );

  const handleSubmitBuy = () => {
      console.log('adasd')
    };
  

  useEffect(() => {
    dispatch({ type: "FETCH_CARD" });
  }, [dispatch]);

  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white">
      <div className=" tw-p-6 container ">
        <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
          <div className="tw-text-[20px] tw-font-[700]">Giỏ hàng</div>
          <div className="tw-flex tw-items-center tw-justify-end">
            <Button>Xoá đơn</Button>
          </div>
        </div>
        {listCard?.length > 0 ? (
          <div>
            <Table
              rowSelection={rowSelection}
              rowKey={(record) =>
                record.id ? record.id : new Date().getTime()
              }
              columns={columns}
              dataSource={listCard}
              pagination={false}
            />
            <div className="tw-p-6 tw-bg-[#33322C] tw-rounded-[16px] tw-mt-10">
              <div className="tw-text-white tw-text-center tw-text-[24px] tw-font-[700] tw-mb-6">Thông tin người nhận</div>
              <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={handleSubmitBuy}
          >
            {({ values, setFieldValue, handleSubmit  }) => {
              return (
                <div className="tw-bg-white tw-rounded-[10px] tw-p-6 tw-flex tw-items-center  tw-flex-col">
                  <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                    <div className="tw-w-full">
                      <div className="tw-mb-1">Địa chỉ nhận hàng</div>
                      <TextArea
                        name="address"
                        value={values.name || ""}
                        onChange={(event) => {
                          setFieldValue("address", event.target.value);
                        }}
                        rows={5}
                        placeholder="Nhập địa chỉ nhận hàng"
                      />
                      <ErrorMessage
                        className="invalid"
                        name="address"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-justify-end tw-w-full tw-mb-4">
                    <Button
                      onClick={() => handleSubmit()}
                      className="tw-ml-3"
                      type="primary"
                    >
                      Đặt hàng
                    </Button>
                  </div>
                </div>
              );
            }}
          </Formik>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
      </div>
      <Modal
          open={isModalOpen}
          centered={true}
          onCancel={handleCancel}
          onOk={handleSubmit}
          width={450}
        >
              <div className="modal-confirm-container tw-flex tw-items-center tw-py-6">
        <div>
           <ExclamationCircleOutlined className="tw-text-[#FCAF17] tw-mr-2" />
        </div>
        <div className="modal-confirm-right margin-left-20">
          <div className="modal-confirm-title tw-font-[500] tw-text-[16px]">Bạn có muốn xóa đơn hàng này khỏi giỏ hàng</div>
        </div>
      </div>
        </Modal>
    </LauoutDefault>
  );
};

export default Card;
