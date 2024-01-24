import React from "react";
import { useCallback, useState, useEffect, useMemo } from "react";
import LauoutDefault from "../../../components/Admin/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Empty,
  Button,
  Modal,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  BRANCH_LIST,
  COUNTRY_LIST,
  SIZE_LIST,
  TYPE_LIST,
} from "../../../constants/common";
import {
  UploadOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { adminRequest } from "../../../services/adminRequest";
import { ConstantAPI } from "../../../services/ConstantAPI";

const Product = () => {
  const dispatch = useDispatch();

  const listProductAdmin = useSelector((state) => state.listProductAdmin);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [dataSelected, setDataSelected] = useState({
    id: null,
    name: "",
    size: "",
    brand: "",
    country: "",
    type: "",
    description: "",
    product_quantity: null,
    price_each: null,
    image_url: "",
  });
  const [idSlected, setIdSlected] = useState(null);
  const [isModalOpenConfirm, setisModalOpenConfirm] = useState(false);
  const [isModalOpenUpdate, setisModalOpenUpdate] = useState(false);
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Ảnh bắt buộc là png,jpg,...");
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error("File quá 10MB");
    }
    return isJpgOrPng && isLt2M;
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onRemove = (file) => {
    // Handle file removal
    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    let temp = await adminRequest.upload(ConstantAPI.upload.UPLOAD_IMAGES, {
      image: file,
    });
    if (temp) {
      onSuccess();
      setImageUrl(`https://thang.edtexco.com/images/${temp?.data?.name}`);
    } else {
      onError();
      message.error("Upload thất bại");
    }
  };
  const showModalConfirm = (id) => {
    setIdSlected(id);

    setisModalOpenConfirm(true);
  };
  const showModalUpdate = (item) => {
    setDataSelected(item);
    setFileList([
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: item?.image_url,
      },
    ]);
    setImageUrl(item?.image_url);
    setisModalOpenUpdate(true);
  };
  const handleDelete = useCallback(
    () => {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: { id: idSlected },
      });
      handleCancel();
    },
    // eslint-disable-next-line
    [idSlected, dispatch]
  );

  const initialValues = {
    name: "",
    size: "",
    brand: "",
    country: "",
    type: "",
    description: "",
    product_quantity: null,
    price_each: null,
    image_url: "",
  };

  const initialValuesUpdate = useMemo(() => {
    return {
      ...dataSelected,
    };
  }, [dataSelected]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    size: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    brand: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    country: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    type: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    description: "",
    product_quantity: Yup.string()
      .required("Bạn chưa nhập đủ thông tin")
      .trim(),
    price_each: Yup.string().required("Bạn chưa nhập đủ thông tin").trim(),
    image_url: Yup.string(),
  });

  const showModal = () => {
    setFileList([]);
    setImageUrl("");
    setIsModalOpen(true);
  };
  const handleSubmit = useCallback(
    (values) => {
      dispatch({
        type: "CREATE_PRODUCT",
        payload: { ...values, image_url: imageUrl },
      });
      setIsModalOpen(false);
    },
    // eslint-disable-next-line
    [initialValues, dispatch]
  );
  const handleCancel = () => {
    setIsModalOpen(false);
    setisModalOpenConfirm(false);
    setisModalOpenUpdate(false);
  };

  const handleSubmitUpdate = useCallback(
    (values) => {
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: { ...values, image_url: imageUrl },
      });
      setisModalOpenUpdate(false);
    },
    // eslint-disable-next-line
    [initialValuesUpdate, dispatch]
  );

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Loại",
      dataIndex: "type",
    },
    {
      title: "số lượng",
      dataIndex: "product_quantity",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
    },
    {
      title: "Giá(VND)",
      dataIndex: "price_each",
    },
    {
      title: "",
      dataIndex: "action",
      render: (value, item) => (
        <div className="tw-flex tw-items-center">
          <div className="tw-mr-3" onClick={() => showModalUpdate({ ...item })}>
            <EditOutlined />
          </div>
          <div onClick={() => showModalConfirm(item.id)}>
            <DeleteOutlined />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_ADMIN" });
  }, [dispatch]);
  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white ">
        <div className="tw-p-6 container">
          <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
            <div className="tw-text-[20px] tw-font-[700]">Sản phẩm</div>
            <Button onClick={showModal} type="primary">
              Thêm sản phẩm
            </Button>
          </div>
          {listProductAdmin?.length > 0 ? (
            <Table
              rowKey={(record) =>
                record.id ? record.id : new Date().getTime()
              }
              columns={columns}
              dataSource={listProductAdmin}
              pagination={false}
              bordered
            />
          ) : (
            <Empty />
          )}
          <Modal
            title="Thêm mới sản phẩm"
            open={isModalOpen}
            centered={true}
            onCancel={handleCancel}
            width={850}
            footer={null}
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
                        <div className="tw-mb-1">Tên sản phẩm</div>
                        <Input
                          name="name"
                          value={values.name || ""}
                          onChange={(event) => {
                            setFieldValue("name", event.target.value);
                          }}
                          placeholder="Nhập tên sản phẩm"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="name"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Hình ảnh</div>
                        <Upload
                          fileList={fileList}
                          onChange={onChange}
                          beforeUpload={beforeUpload}
                          onRemove={onRemove}
                          customRequest={customRequest}
                          listType={"picture"}
                        >
                          {fileList?.length === 0 && (
                            <div className="tw-flex tw-items-center">
                              <UploadOutlined />
                              <div>Upload Image</div>
                            </div>
                          )}
                        </Upload>
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Kích thước sản phẩm</div>
                        <Select
                          name="size"
                          className="tw-w-full"
                          defaultValue={values.size || ""}
                          placeholder="Chọn kích thước"
                          onChange={(value) => {
                            setFieldValue("size", value);
                          }}
                          options={SIZE_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="size"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Kiểu Loại</div>
                        <Select
                          name="type"
                          className="tw-w-full"
                          defaultValue={values.type || ""}
                          placeholder="Chọn Loại sản phẩm"
                          onChange={(value) => {
                            setFieldValue("type", value);
                          }}
                          options={TYPE_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="type"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Nguồn sản phẩn</div>
                        <Select
                          name="brand"
                          className="tw-w-full"
                          defaultValue={values.brand || ""}
                          placeholder="Chọn nguồn"
                          onChange={(value) => {
                            setFieldValue("brand", value);
                          }}
                          options={BRANCH_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="brand"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Quốc gia</div>
                        <Select
                          name="country"
                          className="tw-w-full"
                          defaultValue={values.country || ""}
                          placeholder="Chọn quốc gia"
                          onChange={(value) => {
                            setFieldValue("country", value);
                          }}
                          options={COUNTRY_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="country"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Giá tiền</div>
                        <Input
                          name="price_each"
                          value={values.price_each || ""}
                          onChange={(event) => {
                            setFieldValue("price_each", event.target.value);
                          }}
                          placeholder="Nhập  tiền 1 sản phẩm"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="price_each"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Số lượng trong kho</div>
                        <Input
                          name="product_quantity"
                          value={values.product_quantity || ""}
                          onChange={(event) => {
                            setFieldValue(
                              "product_quantity",
                              event.target.value
                            );
                          }}
                          placeholder="Nhập số lượng ban đầu"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="product_quantity"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Mô tả</div>
                        <Input
                          name="description"
                          value={values.description || ""}
                          onChange={(event) => {
                            setFieldValue("description", event.target.value);
                          }}
                          placeholder="Nhập Mô tả"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="description"
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
                        Tạo
                      </Button>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </Modal>
          <Modal
            title="Cập nhật sản phẩm"
            open={isModalOpenUpdate}
            centered={true}
            onCancel={handleCancel}
            width={850}
            footer={null}
          >
            <Formik
              initialValues={initialValuesUpdate}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={handleSubmitUpdate}
            >
              {({ values, setFieldValue }) => {
                return (
                  <div className="tw-bg-white tw-rounded-[10px] tw-px-6 tw-pt-6 tw-flex tw-items-center  tw-flex-col">
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Tên sản phẩm</div>
                        <Input
                          name="name"
                          value={values.name || ""}
                          onChange={(event) => {
                            setFieldValue("name", event.target.value);
                          }}
                          placeholder="Nhập tên sản phẩm"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="name"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Hình ảnh</div>
                        <Upload
                          fileList={fileList}
                          onChange={onChange}
                          beforeUpload={beforeUpload}
                          onRemove={onRemove}
                          customRequest={customRequest}
                          listType={"picture"}
                        >
                          {console.log(fileList)}
                          {fileList?.length === 0 && (
                            <div className="tw-flex tw-items-center">
                              <UploadOutlined />
                              <div>Upload Image</div>
                            </div>
                          )}
                        </Upload>
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Kích thước sản phẩm</div>
                        <Select
                          name="size"
                          className="tw-w-full"
                          defaultValue={values.size || ""}
                          placeholder="Chọn kích thước"
                          onChange={(value) => {
                            setFieldValue("size", value);
                          }}
                          options={SIZE_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="size"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Kiểu Loại</div>
                        <Select
                          name="type"
                          className="tw-w-full"
                          defaultValue={values.type || ""}
                          placeholder="Chọn Loại sản phẩm"
                          onChange={(value) => {
                            setFieldValue("type", value);
                          }}
                          options={TYPE_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="type"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Nguồn sản phẩn</div>
                        <Select
                          name="brand"
                          className="tw-w-full"
                          defaultValue={values.brand || ""}
                          placeholder="Chọn nguồn"
                          onChange={(value) => {
                            setFieldValue("brand", value);
                          }}
                          options={BRANCH_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="brand"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Quốc gia</div>
                        <Select
                          name="country"
                          className="tw-w-full"
                          defaultValue={values.country || ""}
                          placeholder="Chọn quốc gia"
                          onChange={(value) => {
                            setFieldValue("country", value);
                          }}
                          options={COUNTRY_LIST}
                        />
                        <ErrorMessage
                          className="invalid"
                          name="country"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Giá tiền</div>
                        <Input
                          name="price_each"
                          value={values.price_each || ""}
                          onChange={(event) => {
                            setFieldValue("price_each", event.target.value);
                          }}
                          placeholder="Nhập  tiền 1 sản phẩm"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="price_each"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Số lượng trong kho</div>
                        <Input
                          name="product_quantity"
                          value={values.product_quantity || ""}
                          onChange={(event) => {
                            setFieldValue(
                              "product_quantity",
                              event.target.value
                            );
                          }}
                          placeholder="Nhập số lượng ban đầu"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="product_quantity"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                      <div className="tw-w-full">
                        <div className="tw-mb-1">Mô tả</div>
                        <Input
                          name="description"
                          value={values.description || ""}
                          onChange={(event) => {
                            setFieldValue("description", event.target.value);
                          }}
                          placeholder="Nhập Mô tả"
                        />
                        <ErrorMessage
                          className="invalid"
                          name="description"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-end tw-w-full tw-my-4">
                      <Button type="default" onClick={handleCancel}>
                        Huỷ bỏ
                      </Button>
                      <Button
                        onClick={() => handleSubmitUpdate(values)}
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
        </div>
      </div>
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
              Bạn có muốn xóa đơn hàng này khỏi giỏ hàng
            </div>
          </div>
        </div>
      </Modal>
    </LauoutDefault>
  );
};

export default Product;
