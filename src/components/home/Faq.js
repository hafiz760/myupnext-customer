"use client";

import { Collapse, ConfigProvider } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Lorem ipsum dolor sit amet consectetur. Risus.",
    children: (
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur. Sapien nibh diam diam dolor. Odio cras volutpat nisi nullam odio. Id interdum pretium habitasse blandit purus nibh. Quis orci morbi sagittis molestie dictum. Adipiscing habitant proin lectus magna congue pharetra."
        }
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Lorem ipsum dolor sit amet consectetur. Risus.",
    children: (
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur. Sapien nibh diam diam dolor. Odio cras volutpat nisi nullam odio. Id interdum pretium habitasse blandit purus nibh. Quis orci morbi sagittis molestie dictum. Adipiscing habitant proin lectus magna congue pharetra."
        }
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Lorem ipsum dolor sit amet consectetur. Risus.",
    children: (
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur. Sapien nibh diam diam dolor. Odio cras volutpat nisi nullam odio. Id interdum pretium habitasse blandit purus nibh. Quis orci morbi sagittis molestie dictum. Adipiscing habitant proin lectus magna congue pharetra."
        }
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Lorem ipsum dolor sit amet consectetur. Risus.",
    children: (
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur. Sapien nibh diam diam dolor. Odio cras volutpat nisi nullam odio. Id interdum pretium habitasse blandit purus nibh. Quis orci morbi sagittis molestie dictum. Adipiscing habitant proin lectus magna congue pharetra."
        }
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Lorem ipsum dolor sit amet consectetur. Risus.",
    children: (
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur. Sapien nibh diam diam dolor. Odio cras volutpat nisi nullam odio. Id interdum pretium habitasse blandit purus nibh. Quis orci morbi sagittis molestie dictum. Adipiscing habitant proin lectus magna congue pharetra."
        }
      </p>
    ),
    style: panelStyle,
  },
];

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="container">
      <p className="text-primary text-[20px] text-center">
        Looking for answers? We’ve got you covered!
      </p>
      <h4 className="text-[30px] font-bold text-center mb-10">
        Frequently Asked Questions
      </h4>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              contentBg: "rgb(255, 255, 255)",
              headerBg: "rgb(255,255,255)",
              colorText: "rgb(0, 0, 0)",
              colorTextHeading: "#000000",
            },
          },
          token: {
            borderRadius: "20px",
          },
        }}
      >
        <Collapse
          expandIconPosition="end"
          bordered={false}
          items={getItems()}
          defaultActiveKey={["1"]}
          onChange={onChange}
          className="faqs-collapse p-4"
        />
      </ConfigProvider>
    </div>
  );
};

export default Faq;
