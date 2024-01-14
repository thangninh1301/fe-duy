import React from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";
import news4 from "../../../assets/images/news4.png";
import news5 from "../../../assets/images/news5.png";
import news6 from "../../../assets/images/news6.png";
import { Card } from "antd";
import {CalendarOutlined} from '@ant-design/icons';
const News = () => {
    const array=[{id:1,date:'10/1/2024',img:news1,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '},
    {id:2,date:'11/1/2024',img:news2,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '},
    {id:3,date:'12/1/2024',img:news3,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '},
    {id:4,date:'14/1/2024',img:news4,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '},
    {id:5,date:'16/1/2024',img:news5,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '},
    {id:6,date:'20/1/2024',img:news6,title:'Lorem Ipsum is simply dummy text of the printing and',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text '}
];
  return (
    <LauoutDefault>
      <div className="tw-w-full tw-bg-[#1C1B15] tw-py-[60px]">
      <div className="tw-text-center tw-mb-4 tw-mt-0 tw-text-[36px] tw-font-[700] tw-text-white">
          Tin tức - cập nhật
          </div>
          <div className="tw-text-center tw-mb-10 tw-text-[16px] tw-font-[400] tw-text-white">
          Nhanh tay rinh ngay khuyến mại - Deal Shock được đề xuất hằng ngày của chúng tôi chỉ còn
          </div>
      <div className="tw-p-6 tw-flex tw-flex-wrap container">
              {array.map((i) => (
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
                  cover={<img alt="example" src={i.img} />}
                >
                  <div>
                    <div className="tw-flex tw-items-center ">
                    <CalendarOutlined className="tw-text-white tw-mr-2" />
                    <div>{i.date}</div>
                    </div>
                    <div className="tw-text-white tw-font-[700] tw-mb-4">
                      {i?.title}
                    </div>
                    <div className="tw-text-white">
                      {i?.description}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
      </div>
    </LauoutDefault>
  );
};

export default News;
