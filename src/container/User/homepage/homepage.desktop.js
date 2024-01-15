import React, { useEffect, useMemo } from "react";

import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Skeleton, Card } from "antd";
import { useNavigate } from "react-router-dom";

import slider1 from "../../../assets/images/silder/slider10.png";
import slider2 from "../../../assets/images/silder/slider11.png";
import slider3 from "../../../assets/images/silder/slider12.png";
import slider4 from "../../../assets/images/silder/slider14.png";
import productImage from "../../../assets/images/productImage.png";
import vector from "../../../assets/images/silder/Vector.svg";
import vector1 from "../../../assets/images/silder/Vector-1.svg";
import vector2 from "../../../assets/images/silder/Vector-2.svg";
import vector3 from "../../../assets/images/silder/Vector-3.svg";
import buymore from "../../../assets/images/silder/buymore.png";
import blog2 from "../../../assets/images/homepage/blog2.png";
import blog3 from "../../../assets/images/homepage/blog3.png";
import blog4 from "../../../assets/images/homepage/blog4.png";
import blog5 from "../../../assets/images/homepage/blog5.png";
import blog6 from "../../../assets/images/homepage/blog6.png";
import blog7 from "../../../assets/images/homepage/blog7.png";
import blog8 from "../../../assets/images/homepage/blog8.png";
import blog9 from "../../../assets/images/homepage/blog9.png";
import blog11 from "../../../assets/images/homepage/blog11.png";
import blog12 from "../../../assets/images/homepage/blog12.png";
import mobile from "../../../assets/images/silder/mobile.png";


const HomePage = ({ type = 1 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Loading = useSelector((state) => state.Loading);
  const listProductUser = useSelector((state) => state.listProductUser);

  const listBuyMuch = useMemo(() => {
    return listProductUser.slice(0, 4);
  }, [listProductUser]);

  const viewDetail = (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_USER" });
  }, [dispatch]);
  return (
    <LauoutDefault type={type}>
      <div className="container !tw-my-[24px]">
      <Carousel autoplay autoplaySpeed={5000} speed={1000}>
        <div className="!tw-rounded-[24px] !tw-w-full">
          <img
            className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
            alt="silder1"
            src={slider1}
          />
        </div>
        <div className="!tw-rounded-[24px] !tw-w-full">
          <img
            className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
            alt="silder2"
            src={slider2}
          />
        </div>
        <div className="!tw-rounded-[24px] !tw-w-full">
          <img
            className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
            alt="silder4"
            src={slider3}
          />
        </div>
        <div className="!tw-rounded-[24px] !tw-w-full">
          <img
            className="!tw-w-full tw-h-[550px] !tw-rounded-[24px]"
            alt="silder4"
            src={slider4}
          />
        </div>
      </Carousel>
      </div>
    
      <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[275px]">
        <div className="tw-relative">
          <img
            className="tw-absolute tw-right-[200px]"
            alt="vextor-left"
            src={vector}
          />
        </div>
      </div>
      {Loading ? (
        <Skeleton />
      ) : (
        <div>
          <div>
            <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
              Sản phẩm bán chạy
            </div>
            <div className="tw-text-center tw-mb-8 tw-text-[16px] tw-font-[400] tw-text-white">
              Nhanh tay rinh ngay khuyến mại - Deal Shock được đề xuất hằng ngày
              của chúng tôi chỉ còn
            </div>
            <div className="tw-p-6 container tw-flex tw-flex-wrap tw-w-full tw-mb-10">
              {listBuyMuch.map((i) => (
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
          </div>
          <div className="container tw-mb-10">
            <div className="tw-bg-gradient-to-r tw-from-[#ffffff66] tw-to-[#ffffff0d] tw-py-[80px] tw-px-[100px] tw-rounded-[16px] tw-flex tw-justify-between">
              <div className="tw-w-1/2">
                <div className="tw-text-white tw-text-[24px] tw-mb-4">
                  URSS MODELS - HÀNG CHẤT - GIÁ TỐT
                </div>
                <div className="tw-text-white tw-text-[16px] tw-mb-2">
                  Chuyên cung cấp kit mô hình Quân sự & mô hình Diecast.
                  <br />
                  📌 Cam kết đem lại cho khách hàng những sản phẩm chất lượng
                  tốt nhất với giá cực kì cạnh tranh.
                  <br />
                  📌 Hotline & Zalo : 0886880622 - 0968710355
                </div>
                <div className="tw-text-white tw-text-[16px] tw-mb-3">
                  ..............................................................................
                  <br />
                  URSS MODELS CAM KẾT VỚI QUÝ KHÁCH :
                </div>
                <div className="tw-text-white tw-text-[16px] tw-mb-4">
                  Sản phẩm 100% giống mô tả.
                  <br />
                  Uy tín và Chất lượng sản phẩm QUÝ HƠN VÀNG, do đó URSS MODELS
                  luôn đăng tải hình ảnh thực tế sản phẩm, Quý khách hàng có thể
                  yên tâm lựa chọn với vô vàn ưu đãi.
                  <br />
                  Hỗ trợ 24/7 (kể cả ngày Nghỉ - ngày Lễ).
                  <br />
                  Hỗ trợ ship nhanh trong ngày tại nội thành HÀ NỘI.
                </div>
                <div className="tw-text-white tw-text-[16px] tw-mb-4">
                  #URSS Models #mohinhkit #mohinhdiecast
                </div>
              </div>
              <div className="tw-w-1/2 tw-pl-[120px]">
                <img className="tw-w-full" alt="buymore" src={buymore} />
              </div>
            </div>
          </div>
          <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[275px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-left-[300px]"
                alt="vextor-left"
                src={vector1}
              />
            </div>
          </div>
          <div>
            <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
              Bộ sưu tập được đề xuất
            </div>
            <div className="tw-text-center tw-mb-8 tw-text-[16px] tw-font-[400] tw-text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="tw-p-6 container tw-flex tw-flex-wrap tw-w-full tw-mb-10">
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog2} />
              </div>
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog2} />
              </div>
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog3} />
              </div>
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog4} />
              </div>
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog5} />
              </div>
              <div className="tw-w-[33%_-_24px] tw-min-w[300px] tw-max-w-[500px] tw-mr-6">
                <img alt="blog" src={blog6} />
              </div>
            </div>
          </div>
          <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[275px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-right-[200px]"
                alt="vextor-left"
                src={vector}
              />
            </div>
          </div>
          <div className="container tw-mb-10 tw-flex">
              <div className="tw-w-1/2 tw-flex tw-items-end justify-center tw-flex-col tw-pr-3">
                <div className=" tw-pt-[50px]">
                  <img alt="blog" src={blog7} className="tw-h-[640px] tw-rounded-[16px]"/>
                </div>
                <div className="tw-text-[48px] tw-font-[700] tw-mt-6">Bộ sưu tập khí tài theo từng thời kỳ</div>
              </div>
              <div className="tw-w-1/2 tw-pl-3">
                <img alt="blog" src={blog8}/>
                <img alt="blog" src={blog9} className="tw-pl-3"/>
              </div>
          </div>
          <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[275px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-left-[300px]"
                alt="vextor-left"
                src={vector1}
              />
            </div>
          </div>
          <div>
            <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
              Sản phẩm theo nhãn hàng được Đề xuất
            </div>
            <div className="tw-text-center tw-mb-10 tw-text-[16px] tw-font-[400] tw-text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="container tw-mb-10 tw-flex">
              <div className="tw-w-[60%] tw-flex tw-items-center tw-justify-center">
                <div className="tw-px-[40px] tw-py-[60px] tw-bg-gradient-to-r tw-from-[#ffffff66] tw-to-[#ffffff0d]">
                  <div className="tw-text-white tw-text-[20px] tw-font-[700]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  <ul className="tw-pl-0 ul-info">
                    <li className="tw-mb-3 tw-text-white tw-text-[14px] tw-font-[500]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li>
                    <li className="tw-mb-3 tw-text-white tw-text-[14px] tw-font-[500]">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</li>
                    <li className="tw-mb-3 tw-text-white tw-text-[14px] tw-font-[500]">Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                  </ul>
                </div>
                <div className="">
                  <img alt="blog" src={blog7} className="tw-rounded-[16px]"/>
                </div>
              </div>
              <div className="tw-w-[40%] tw-pl-6 tw-flex tw-justify-between tw-flex-col">
                <img alt="blog" src={blog12} className="tw-pl-3 !tw-w-[400px] tw-h-[400px]"/>
                <img alt="blog" src={blog11} className="tw-w-[424px] tw-h-[400px]" />
              </div>
          </div>
          </div>
          <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[300px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-right-[200px]"
                alt="vextor-left"
                src={vector2}
              />
            </div>
          </div>
          <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
              Khuyến mại đang diễn ra
            </div>
            <div className="tw-text-center tw-mb-8 tw-text-[16px] tw-font-[400] tw-text-white">
              Nhanh tay rinh ngay khuyến mại - Deal Shock được đề xuất hằng ngày của chúng tôi chỉ còn
            </div>
            <div className="tw-p-6 container tw-flex tw-flex-wrap tw-w-full tw-mb-10">
              {listBuyMuch.map((i) => (
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
            <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[300px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-left-[0px]"
                alt="vextor-left"
                src={vector1}
              />
            </div>
        
          </div>
          <div className="container tw-mb-10">
              <div className=" tw-bg-[#272621] tw-rounded-[16px] tw-w-full tw-p-[40px] 3xl:tw-p-[80px] tw-flex tw-h-[450px]">
                  <div className="tw-w-[40%] tw-relative tw-flex tw-top-[-200px] tw-mr-[48px]">
                    <div className="tw-absolute tw-h-[900px]">
                      <img alt="mobile" src={mobile} className="tw-w-[600px]"/>
                    </div>
                  </div>
                  <div className="tw-w-[60%]">
                    <div className="tw-text-white tw-text-[28px] tw-mb-4">Gian hàng sàn thương mại điện tử</div>
                    <ul className="tw-pl-0 ul-info">
                    <li className="tw-mb-4 tw-text-white tw-text-[14px] tw-font-[500]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                    <li className="tw-mb-4 tw-text-white tw-text-[14px] tw-font-[500]">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                  </ul>
                  </div>
              </div>
            </div>
            <div className="tw-mt-10 container tw-flex tw-justify-center tw-h-[325px]">
            <div className="tw-relative">
              <img
                className="tw-absolute tw-left-[0px]"
                alt="vextor-left"
                src={vector3}
              />
            </div>
        
          </div>
          <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
                DEAL SHOCK SẮP BẮT ĐẦU
            </div>
            <div className="tw-text-center tw-mb-10 tw-text-[16px] tw-font-[400] tw-text-white">
              Deal Shock được đề xuất hằng ngày của chúng tôi diễn ra sau
            </div>
            <div className="tw-p-6 container tw-flex tw-flex-wrap tw-w-full tw-mb-10">
              {listBuyMuch.map((i) => (
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
        </div>
      )}
    </LauoutDefault>
  );
};

export default HomePage;
