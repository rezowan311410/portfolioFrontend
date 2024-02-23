import React, { forwardRef, useEffect, useState } from 'react';
import Container from './Container';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import Image from './Image';
import { data } from 'autoprefixer';
import { noop } from 'antd/es/_util/warning';
const Portfolio = ({props},ref) => {
  const [open, setOpen] = React.useState(false);
  let [title, settitle] = useState('');
  let [barname, setbarname] = useState([]);
  let [img, setimg] = useState([]);
  let [lightboxIndex, setLightboxIndex] = useState(null);
  // let ActiveColor = "text-red-500"
   let [zoomImg,setZoomImg] = useState(false)
   let [all,setAll] = useState(false)
   let [web,setWeb] = useState(false)
   let [app,setApp] = useState(false)
   let [UI,setUI] = useState(false)
   let [dgn,setDgn] = useState(false)
   let [ActiveColor,setActiveColor] = useState("text-rose-950")
   const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    async function tab() {
      const data = await axios.get('http://localhost:1337/api/portfolios?populate=deep');
      settitle(data.data.data[0].attributes.title);
      setbarname(data.data.data[0].attributes.tab);
      setimg(data.data.data[0].attributes.tab);
       console.log(data.data.data[0].attributes.tab)
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
  

  let handleAllClick = ()=>{
    setActiveColor("text-rose-950")
    setAll(true)
    setWeb(false)
    setApp(false)
    setUI(false)
    setDgn(false)
  }
 
  let handleWebsiteClick = ()=>{
    setWeb(true)
    setAll(false)
    setActiveColor("text-[#777777]")
    setApp(false)
    setUI(false)
    setDgn(false)
  }

 let handleApp = ()=>{
  setApp(true)
  setWeb(false)
  setAll(false)
  setDgn(false)
  setActiveColor("text-rose-950")
  setActiveColor("text-[#777777]")
  setUI(false)
 }

 let handleUI = ()=>{
  setUI(true)
  setApp(false)
  setWeb(false)
  setAll(false)
  setDgn(false)
  setActiveColor("text-rose-950")
  setActiveColor("text-[#777777]")
 }

 let handlGraphic = ()=>{
  setDgn(true)
  setUI(false)
  setApp(false)
  setWeb(false)
  setAll(false)
  setActiveColor("text-rose-950")
  setActiveColor("text-[#777777]")
 }
  return (
    
    <section ref={ref}>
      <Container>
   
        <div className='mb-10'>
          <div className='flex justify-center'>
            <h2 className='font-mont font-bold text-[#494949] text-2xl'>{title}</h2>
          </div>
          <div className='flex justify-center relative mt-3'>
            <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                  before:top-[5px]
                    
                    after:left-[43%]  before:left-[41.5%]  md:after:left-[46%]  md:before:left-[44.5%]
                    lg:after:left-[48%]  after:top-0 lg:before:left-[46.5%]
                    "></div>
          </div>
        </div>
        <div>
          <Tabs>
            <div className=''>
              <div className='flex justify-center relative'>
                {barname.map((item) => (
                  <Tab key={item.id}>
                    <div className={`
                    ${item.itemname == "All"  ? ActiveColor:
                    item.itemname == "All" && all ? "text-rose-950":
                    item.itemname == "Website" && web ? "text-rose-950":
                    item.itemname == "Chatting App" && app ? "text-rose-950":
                    item.itemname == "Ecommerce" && UI ? "text-rose-950":
                    item.itemname == "Graphic Design" && dgn ? "text-rose-950":
                    ""}
                    text-[#777777] font-mont font-bold text-[9px] contact_res:text-sm 
                      after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-rose-950
                      after:top-[100%] after:right-[50%] after:hover:w-[47%]
                      hover:transition after:duration-300
                      hover:text-rose-950
                      before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-rose-950
                      before:top-[100%] before:left-[50%] before:hover:w-[47%] before:duration-300`} onClick={item.itemname == "All" ? handleAllClick: 
                      item.itemname == "Website" ? handleWebsiteClick:
                      item.itemname == "Chatting App" ? handleApp:
                      item.itemname == "Ecommerce" ? handleUI:
                      item.itemname == "Graphic Design" ? handlGraphic:
                      undefined}>
                      {item.itemname} 
                    </div>
                  </Tab>
                ))}
              </div>
            </div>
           
            <div className='mt-[70px]  '>
              {img.map((item, index) => (
                
                <TabPanel key={index}>
                  <div className='image-container'>
                
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 mx-[16px] lg_res:mx-0'>
                      {item.tab_img.map((item2, imgIndex) => (
                        <div className='image-item' key={imgIndex}>
                        <a href='#'>{item2.buttn_text}</a>
                     {
                    
                      item2.id ==  zoomImg ?
                             <Lightbox
                            
                             open={open}
                             close={() => setOpen(false)}
                             slides={[
                              {src : `http://localhost:1337${item2.tab_img.data[0].attributes.url}`},
                
                              
                             ]}
                        
                           />
                           :""
                     }
  

   

                                                
                            
                               <div className='relative   '>
                               <div className=''>
                                      <Image
                                        className=" h-[100%] "
                                        itemId={item2.id}
                                        onChange={() => handleChange(item2.id)}
                                        onClick={(event) => handleChange(item2.id, event)}
                                        imgsrc={`http://localhost:1337${item2.tab_img.data[0].attributes.url}`}
                                      
                                      />
                                     
                                      </div>

                                   <div 
                                        onClick={(event) => handleChange(item2.id, event)}
                                        className={`absolute top-2 left-2 right-2 bottom-2 opacity-0${
                                          lightboxOpen ? "" : ""
                                        } hover:opacity-70 transition delay-100 duration-300 ease-in-out bg-black`}
                                      >
                                            <div className='flex justify-center align-items absolute top-[44%] left-[45%]'>
                                                <span className='text-[#f5f5f5] flex justify-center align-items'>
                                                  <FaEye />
                                                </span>
                                              </div>

                                </div>
                               </div>
                              
                          
                        </div>
                      ))}
                    </div>
                  </div>
                 <div className='flex justify-center'>
                    <a className='py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300' href={item.button_link}>{item.buttn_text}</a>
                 </div>
                </TabPanel>
                
              ))}
            </div>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default forwardRef(Portfolio);
