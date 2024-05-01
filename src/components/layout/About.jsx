import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
const About = ({ props }, ref) => {
  let [tittle, settittle] = useState("");
  let [subtittle, setSubtittle] = useState("");
  let [details, setdetails] = useState("");
  let [butt, setbutt] = useState("");
  let [link, setlink] = useState("");
  let [aboutDetails, setAboutDetails] = useState([]);

  useEffect(() => {
    async function about() {
      const aboutPart = await axios.get(
        "http://localhost:1337/api/about-sections?populate=*"
      );
      settittle(aboutPart.data.data[0].attributes.tittle);
      setSubtittle(aboutPart.data.data[0].attributes.sub_tittle);
      setdetails(aboutPart.data.data[0].attributes.details);
      setbutt(aboutPart.data.data[0].attributes.button[0].button_text);
      setlink(aboutPart.data.data[0].attributes.button[0].button_link);
      setAboutDetails(aboutPart.data.data[0].attributes.About_Details);
    }
    about();
  }, []);

  return (
    <section ref={ref} className="mt-[100px] mb-[100px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center">
          <h2 className="font-mont  font-bold text-[#494949] text-2xl">
            ABOUT ME
          </h2>
        </div>
        <div className="flex justify-center relative mt-3">
          <div
            className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
            before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
             after:left-[43%]  before:left-[41.5%]  md:after:left-[46%]  md:before:left-[44.5%]
            lg:after:left-[48%]  after:top-0 lg:before:left-[46.5%]  before:top-[5px]"
          ></div>
        </div>
        <div className="lg:flex lg:mx-5 lg_res:mx-0">
          <div className="w-[100%] lg:w-[48%]">
            <div className="lg:flex justify-center lg:flex-wrap">
              <h3 className="mx-5 lg:mx-0 mt-12 font-mont font-semibold text-[22px] text-[#4F4F4F]">
                Howdy!
              </h3>
              <p className="mx-5 lg:mx-0 w-auto lg:w-[512px]  font-pop font-normal text-base text-[#767676] leading-7 mt-[6px]">
                Hi Dear! I'm Abu Hossen, a skilled MERN stack developer with
                expertise in JavaScript. My proficiency includes front-end
                development using HTML5, CSS3, ReactJS, Vite.js, and React
                Native. I'm experienced in working with databases such as
                Firebase and MongoDB, and well-versed in frameworks like
                Express.js, Next.js, MUI, Tailwind CSS, Bootstrap, and React
                Native. Additionally, I have hands-on knowledge of Node.js and
                Strapi(CMS). I'm eager to contribute my skills and collaborate
                on impactful projects. Let's create innovative solutions
                together!
              </p>
              <div>
                <a
                  className="mx-5 lg:mx-0 py-2.5 px-5 rounded-md mt-8 inline-block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  href="https://drive.google.com/file/d/12UorwRaJD1KkTLjtz3o3q0W10hNqO5Ql/view?usp=sharing"
                >
                  DOWNLOAD MY CV
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[48%] hidden lg:block mt-16 ml-[150px]">
            <div className="flex  relative">
              <h2
                className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                  after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                  after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'
              >
                Name
              </h2>
              <h3 className="lg:ml-[130px] lg_res:ml-[170px] mt-5 font-pop font-normal text-base text-[#767676]">
                Abu Hossen
              </h3>
            </div>
            {/* item end */}
            <div className="flex  relative">
              <h2
                className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'
              >
                Age
              </h2>
              <h3 className="lg:ml-[130px] lg_res:ml-[170px] mt-5 font-pop font-normal text-base text-[#767676]">
                23
              </h3>
            </div>
            {/* item end */}
            <div className="flex  relative">
              <h2
                className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'
              >
                Residence
              </h2>
              <h3 className="lg:ml-[130px] lg_res:ml-[170px] mt-5 font-pop font-normal text-base text-[#767676]">
                Bangladesh
              </h3>
            </div>
            {/* item end */}
            <div className="flex  relative">
              <h2
                className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'
              >
                Address
              </h2>
              <h3 className="lg:ml-[130px] lg_res:ml-[170px] mt-5 font-pop font-normal text-base text-[#767676]">
                Dhaka
              </h3>
            </div>
            {/* item end */}
            <div className="flex  relative">
              <h2
                className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'
              >
                Freelance
              </h2>
              <h3 className="lg:ml-[130px] lg_res:ml-[170px] mt-5 font-pop font-normal text-base text-[#767676]">
                Available
              </h3>
            </div>
            {/* item end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(About);
