import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import { MdOutlineWebAsset } from "react-icons/md";
import Container from "./Container";
const Service = ({ props }, ref) => {
  let [tittle, setTittle] = useState("");
  let [icon, seticon] = useState([]);
  let [img, setimg] = useState("");

  useEffect(() => {
    async function service_part() {
      let service = await axios.get(
        "http://localhost:1337/api/service-sections?populate[Service][populate]=*"
      );
      setTittle(service.data.data[0].attributes.tittle);
      seticon(service.data.data[0].attributes.Service);
      // seticon(service.data.data[0].attributes.Service[0].Service_Icon.data.attributes.url
      //   )
    }
    service_part();
  }, []);
  return (
    <section
      ref={ref}
      className="mb-[100px] mt-[100px] bg-[#f5f5f5] py-[100px]"
    >
      <Container>
        <div className="flex justify-center">
          <h2 className="font-mont  font-bold text-[#494949] text-2xl">
            {tittle}
          </h2>
        </div>
        <div className="flex justify-center relative mt-3">
          <div
            className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
            before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
            after:left-[48%]  after:top-0 before:left-[46.5%]  before:top-[5px]"
          ></div>
        </div>
        <div>
          <div className="flex lg:justify-between md:flex-row justify-center flex-wrap justify-evenly lg:mx-5 lg_res:mx-0">
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mt-[65px]">
              <div className="w-[270px] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:transition ease-in duration-300 flex  flex-col justify-center relative px-4 pt-10 pb-[74px] bg-[#F5F5F5] text-center group cursor-default">
                <div
                  className="w-9 h-9 m-auto group-hover:bg-[#494949]
               group-hover:rounded-full"
                >
                  <MdOutlineWebAsset
                    className="w-9 h-9 m-auto group-hover:bg-[#494949]
               group-hover:rounded-full text-slate-600 group-hover:text-[#D1D1D1]"
                  />
                </div>
                <h2
                  className='m-auto after:absolute after:content-[""] after:w-[50px] after:h-[2px] after:bg-[#DBDBDB]
                after:left-[41%]  after:top-[99px] mt-[42px] font-mont font-bold text-sm text-[#757575]'
                >
                  WEB DESIGN
                </h2>
                <p className="m-auto mt-6 font-pop font-normal font-sm text-[#979797] leading-6">
                  I will build responsive website design and redesign, with
                  ReactJs, Next.Js and other equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default forwardRef(Service);
