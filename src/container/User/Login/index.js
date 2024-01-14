import React from "react";
import { useCallback, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { Input } from "antd";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {TOKEN} from "../../../constants/index"

const Login = () => {
 const dispatch = useDispatch();

const [passwordVisible, setPasswordVisible] = useState(false);
  const initialValues = {
    user_name: "",
    password: "",
  };

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Bạn chưa nhập tài khoản").trim(),
    password: Yup.string().trim().required("Bạn chưa nhập tài khoản"),
  });

  const handleSubmit = useCallback(
    (values) => {
      dispatch({
        type: "LOGIN_USER",
        payload: values,
      });
    },
    // eslint-disable-next-line
    [initialValues, dispatch]
  );

    useEffect(() => {
       window.localStorage.removeItem(TOKEN);
    }, []);

  return (
    <LauoutDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, handleSubmit }) => {
          return (
            <div className="tw-bg-[#1C1B15] tw-flex tw-items-center tw-justify-center tw-my-12 ">
              <div className="tw-bg-white tw-w-[500px] tw-rounded-[10px] tw-shadow-2xl tw-px-6 tw-py-12 tw-flex tw-items-center  tw-flex-col">
                <div className="tw-text-center tw-text-[24px] tw-font-[700] tw-mb-10">
                  Đăng nhập
                </div>
                <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                  <div className="tw-w-full">
                    <div className="tw-mb-1">Tên đăng nhập</div>
                    <Input
                      name="user_name"
                      value={values.user_name || ""}
                      onChange={(event) => {
                        setFieldValue("user_name", event.target.value);
                      }}
                      placeholder="Nhập tên đăng nhập"
                    />
                    <ErrorMessage
                      className="invalid"
                      name="user_name"
                      component="div"
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-8">
                  <div className="tw-w-full">
                    <div className="tw-mb-1">Mật khẩu</div>
                    <Input.Password
                      value={values.password || ""}
                      onChange={(event) => {
                        setFieldValue("password", event.target.value);
                      }}
                      visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                      }}
                      name="password"
                      placeholder="Nhập mật khẩu"
                    />
                    <ErrorMessage
                      className="invalid"
                      name="password"
                      component="div"
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-3">
                  <button
                    onClick={() => handleSubmit(values)}
                    className="tw-w-full tw-flex tw-items-center tw-justify-center tw-p-2"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
                  <div className="tw-mr-2">
                    Bạn mới biết đến SoViet Models ?
                  </div>
                  <Link to="/register">Đăng kí</Link>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </LauoutDefault>
  );
};

export default Login;
