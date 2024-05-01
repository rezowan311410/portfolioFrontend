import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Tab, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "./Container";

const Portfolio = ({ props }, ref) => {
  let [title, settitle] = useState("");
  let [barname, setbarname] = useState([]);
  let [img, setimg] = useState([]);
  let [lightboxIndex, setLightboxIndex] = useState(null);
  // let ActiveColor = "text-red-500"
  let [zoomImg, setZoomImg] = useState(false);
  let [all, setAll] = useState(false);
  let [web, setWeb] = useState(false);
  let [app, setApp] = useState(false);
  let [UI, setUI] = useState(false);
  let [dgn, setDgn] = useState(false);
  let [ActiveColor, setActiveColor] = useState("text-rose-950");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  let [imgId, setimgId] = useState(0);

  useEffect(() => {
    async function tab() {
      const data = await axios.get(
        "http://localhost:1337/api/portfolios?populate=deep"
      );
      settitle(data.data.data[0].attributes.title);
      setbarname(data.data.data[0].attributes.tab);
      setimg(data.data.data[0].attributes.tab);
      console.log(data.data.data[0].attributes.tab);
    }
    tab();
  }, []);
  let handleChange = (id, event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    setZoomImg(id);
    setOpen(true);
    setLightboxOpen(true);
  };

  let handleAllClick = () => {
    setActiveColor("text-rose-950");
    setAll(true);
    setWeb(false);
    setApp(false);
    setUI(false);
    setDgn(false);
  };

  let handleWebsiteClick = () => {
    setWeb(true);
    setAll(false);
    setActiveColor("text-[#777777]");
    setApp(false);
    setUI(false);
    setDgn(false);
  };

  let handleApp = () => {
    setApp(true);
    setWeb(false);
    setAll(false);
    setDgn(false);
    setActiveColor("text-rose-950");
    setActiveColor("text-[#777777]");
    setUI(false);
  };

  let handleUI = () => {
    setUI(true);
    setApp(false);
    setWeb(false);
    setAll(false);
    setDgn(false);
    setActiveColor("text-rose-950");
    setActiveColor("text-[#777777]");
  };

  let handlGraphic = () => {
    setDgn(true);
    setUI(false);
    setApp(false);
    setWeb(false);
    setAll(false);
    setActiveColor("text-rose-950");
    setActiveColor("text-[#777777]");
  };

  // const [open, setOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleOpen = (event) => {
  //   const id = event.target.id;
  //   setSelectedImage(id);
  //   setOpen(true);
  // };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleopenClick = () => {
    setOpen(true);
  };
  const handleopenClick1 = () => {
    setOpen1(true);
  };
  const handleopenClick2 = () => {
    setOpen2(true);
  };
  const handleopenClick3 = () => {
    setOpen3(true);
  };
  return (
    <section ref={ref}>
      <Container>
        <div className="mb-10">
          <div className="flex justify-center">
            <h2 className="font-mont font-bold text-[#494949] text-2xl">
              MY PORTFOLIO
            </h2>
          </div>
          <div className="flex justify-center relative mt-3">
            <div
              className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                  before:top-[5px]
                    
                    after:left-[43%]  before:left-[41.5%]  md:after:left-[46%]  md:before:left-[44.5%]
                    lg:after:left-[48%]  after:top-0 lg:before:left-[46.5%]
                    "
            ></div>
          </div>
        </div>
        <div>
          <Tabs>
            <div>
              <div className="flex justify-center">
                <Tab>
                  <div
                    className={`
                    ${
                      "All" == "All"
                        ? ActiveColor
                        : "All" == "All" && all
                        ? "text-rose-950"
                        : ""
                    }
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`}
                    onClick={"All" == "All" ? handleAllClick : undefined}
                  >
                    <h2>All</h2>
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`
                    ${"Website" == "Website" && web ? "text-rose-950" : ""}
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`}
                    onClick={
                      "Website" == "Website" ? handleWebsiteClick : undefined
                    }
                  >
                    <h2>Website</h2>
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`
                    ${
                      "Chatting App" == "Chatting App" && app
                        ? "text-rose-950"
                        : ""
                    }
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`}
                    onClick={
                      "Chatting App" == "Chatting App" ? handleApp : undefined
                    }
                  >
                    <h2>Chatting App</h2>
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`
                    ${"Ecommerce" == "Ecommerce" && UI ? "text-rose-950" : ""}
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`}
                    onClick={"Ecommerce" == "Ecommerce" ? handleUI : undefined}
                  >
                    <h2>Ecommerce</h2>
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`
                    ${
                      "Graphic Design" == "Graphic Design" && dgn
                        ? "text-rose-950"
                        : ""
                    }
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`}
                    onClick={
                      "Graphic Design" == "Graphic Design"
                        ? handlGraphic
                        : undefined
                    }
                  >
                    <h2>Graphic Design</h2>
                  </div>
                </Tab>
              </div>
            </div>
            <TabPanel>
              <div className="image-container">
                <div className="mt-[70px]">
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mx-[16px] lg_res:mx-0 ">
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick}
                      >
                        <img src="../../assets/1.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick1}
                      >
                        <img src="../../assets/5.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick2}
                      >
                        <img src="../../assets/13.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick3}
                      >
                        <img src="../../assets/16.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                      { src: "../../assets/1.png" },
                      { src: "../../assets/2.png" },
                      { src: "../../assets/3.png" },
                      { src: "../../assets/4.png" },
                    ]}
                  />
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "../../assets/5.png" },
                      { src: "../../assets/6.png" },
                      { src: "../../assets/7.png" },
                      { src: "../../assets/8.png" },
                      { src: "../../assets/9.png" },
                      { src: "../../assets/10.png" },
                      { src: "../../assets/11.png" },
                      { src: "../../assets/12.png" },
                    ]}
                  />
                  <Lightbox
                    open={open2}
                    close={() => setOpen2(false)}
                    slides={[
                      { src: "../../assets/13.png" },
                      { src: "../../assets/14.png" },
                      { src: "../../assets/15.png" },
                    ]}
                  />
                  <Lightbox
                    open={open3}
                    close={() => setOpen3(false)}
                    slides={[
                      { src: "../../assets/16.png" },
                      { src: "../../assets/17.png" },
                      { src: "../../assets/18.png" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  className="py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://github.com/rezowan311410"
                >
                  Visit my GitHub
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="image-container">
                <div className="mt-[70px]">
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mx-[16px] lg_res:mx-0 ">
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick}
                      >
                        <img src="../../assets/1.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick1}
                      >
                        <img src="../../assets/5.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick2}
                      >
                        <img src="../../assets/13.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick3}
                      >
                        <img src="../../assets/16.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                      { src: "../../assets/1.png" },
                      { src: "../../assets/2.png" },
                      { src: "../../assets/3.png" },
                      { src: "../../assets/4.png" },
                    ]}
                  />
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "../../assets/5.png" },
                      { src: "../../assets/6.png" },
                      { src: "../../assets/7.png" },
                      { src: "../../assets/8.png" },
                      { src: "../../assets/9.png" },
                      { src: "../../assets/10.png" },
                      { src: "../../assets/11.png" },
                      { src: "../../assets/12.png" },
                    ]}
                  />
                  <Lightbox
                    open={open2}
                    close={() => setOpen2(false)}
                    slides={[
                      { src: "../../assets/13.png" },
                      { src: "../../assets/14.png" },
                      { src: "../../assets/15.png" },
                    ]}
                  />
                  <Lightbox
                    open={open3}
                    close={() => setOpen3(false)}
                    slides={[
                      { src: "../../assets/16.png" },
                      { src: "../../assets/17.png" },
                      { src: "../../assets/18.png" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  className="py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://github.com/rezowan311410"
                >
                  Visit my GitHub
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="image-container ">
                <div className="mt-[70px] ">
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4  gap-1 mx-[16px] lg_res:mx-0  ">
                      <div
                        className="relative cursor-pointer "
                        onClick={handleopenClick}
                      >
                        <img src="../../assets/1.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                      { src: "../../assets/1.png" },
                      { src: "../../assets/2.png" },
                      { src: "../../assets/3.png" },
                      { src: "../../assets/4.png" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  className="py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://github.com/rezowan311410"
                >
                  Visit my GitHub
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="image-container">
                <div className="mt-[70px]">
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4  gap-1 mx-[16px] lg_res:mx-0 ">
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick1}
                      >
                        <img src="../../assets/5.png" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "../../assets/5.png" },
                      { src: "../../assets/6.png" },
                      { src: "../../assets/7.png" },
                      { src: "../../assets/8.png" },
                      { src: "../../assets/9.png" },
                      { src: "../../assets/10.png" },
                      { src: "../../assets/11.png" },
                      { src: "../../assets/12.png" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  className="py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://github.com/rezowan311410"
                >
                  Visit my GitHub
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="image-container">
                <div className="mt-[70px]">
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4  gap-1 mx-[16px] lg_res:mx-0 ">
                      <div
                        className="relative cursor-pointer"
                        onClick={handleopenClick1}
                      >
                        <img src="../../assets/21.jpg" />

                        <div
                          className="absolute top-2 left-2 right-2 bottom-2  opacity-0
                        hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black"
                        >
                          <div className="flex justify-center align-items absolute top-[44%] left-[40%] cursor-pointer">
                            <span className="text-[#f5f5f5]">
                              <FaEye className="ml-[18px]" />
                              <h3 className="font-mont font-normal text-sm mr-4">
                                Click Me
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "../../assets/21.jpg" },
                      { src: "../../assets/19.jpg" },
                      { src: "../../assets/20.jpg" },

                      { src: "../../assets/22.jpg" },
                      { src: "../../assets/23.jpg" },
                      { src: "../../assets/24.jpg" },
                      { src: "../../assets/25.jpg" },
                      { src: "../../assets/26.jpg" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  className="py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://github.com/rezowan311410"
                >
                  Visit my GitHub
                </a>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default forwardRef(Portfolio);
