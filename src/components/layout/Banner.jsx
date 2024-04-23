import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import Image from "./Image";

const Banner = ({ props }, ref) => {
  let [hello, setHello] = useState("");
  let [name, setName] = useState("");
  let [namepara, setNamepara] = useState("");
  let [bannerImage, setbannerImage] = useState([]);
  let [bannerBt, setbannerBt] = useState([]);
  useEffect(() => {
    async function banner() {
      const data = await axios.get(
        "http://localhost:1337/api/banners?populate=*"
      );
      setHello(data.data.data[0].attributes.greting);
      setName(data.data.data[0].attributes.Header_title);
      setNamepara(data.data.data[0].attributes.details);
      setbannerBt(data.data.data[0].attributes.button);
      setbannerImage(
        data.data.data[0].attributes.Banner_img.data[0].attributes.url
      );
    }
    banner();
  }, []);
  return (
    <section ref={ref} className="bg-[#f5f5f5]">
      <div className="flex max-w-container mx-auto">
        <div className="lg:w-6/12 pb-10 pt-52 lg:pb-0 lg:pt-64 lg_res:pt-72 mx-5 lg_res:mx-0">
          <h2 className="font-mont text-base font-bold text-[#919191]">
            HELLO, MY NAME IS
          </h2>
          <h1 className="font-mont text-[44px] text-[#414141] font-bold">
            ABU HOSSEN
          </h1>
          <p className="font-pop font-normal text-base text-[#6A6A6A] mt-2">
            I'm a full-stack developer specialised in frontend and backend
            development for scalable web apps.I have made a variety of Mern
            Stack Applications.
          </p>
          <div>
            <>
              <a
                href="https://github.com/rezowan311410"
                className="font-mont  inline-block text-[#ffffff] py-5 mt-[44px] px-12 bg-[#414141] rounded-md
                       text-sm font-bold hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
              >
                MY WORK
              </a>
            </>
          </div>
        </div>
        <div className="lg:w-6/12">
          <div className="lg:mt-[141px] lg:ml-[156px]">
            <Image
              className="hidden lg:block"
              imgsrc="../../../public/assets/profile.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Banner);
