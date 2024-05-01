import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import Container from "./Container";
import Image from "./Image";
const Contact = ({ porps }, ref) => {
  let [title, settitle] = useState("");
  let [subtitle, setsubtitle] = useState("");
  let [communication, setcommunication] = useState([]);
  let [sms, setsms] = useState([]);
  let [btn, setbtn] = useState([]);
  let [name, setname] = useState("");
  let [nameErr, setnameErr] = useState("");
  let [email, setemail] = useState("");
  let [emailErr, setemailErr] = useState("");
  let [message, setmessage] = useState("");
  let [messageErr, setmessageErr] = useState("");
  let [msgsucc, setmsgSucc] = useState("");

  useEffect(() => {
    async function contact() {
      const data = await axios.get(
        "http://localhost:1337/api/contact-parts?populate[communication][populate]=*"
      );
      settitle(data.data.data[0].attributes.title);
      setsubtitle(data.data.data[0].attributes.sub_tittle);
      setcommunication(data.data.data[0].attributes.communication);

      const message = await axios.get(
        "http://localhost:1337/api/contact-parts?populate[message][populate]=*"
      );
      setsms(message.data.data[0].attributes.message);

      const button = await axios.get(
        "http://localhost:1337/api/contact-parts?populate=*"
      );
      setbtn(button.data.data[0].attributes.button);
    }
    contact();
  }, []);

  //form submitt part

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ea2a7793-9fa6-4917-a92d-1df32e7916fd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (!name) {
      setnameErr("Please Type Your Name");
      setemailErr("");
      setmessageErr("");
    } else if (!email) {
      setemailErr("Please Type Your Email");
      setnameErr("");
      setmessageErr("");
    } else if (!message) {
      setmessageErr("Please Type Your Message");
      setemailErr("");
      setnameErr("");
    } else {
      setmessageErr("");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
      if (res.success) {
        setmsgSucc("Your Message & Email Sent successfull!");
        setnameErr("");
        setemailErr("");
        setmessageErr("");
        console.log("Success", res);
      }
    }
  };

  return (
    <section ref={ref} className="mb-[100px]">
      <Container>
        <div className="">
          <div className="flex  lg:justify-start">
            <h2 className="font-mont mx-5 lg-mx-0  font-bold text-[#494949] text-2xl">
              CONTACT ME
            </h2>
          </div>
          <div className="relative mt-3">
            <div
              className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                    lg:after:left-[2%]  after:top-0 lg:before:left-[2%]  before:top-[6px]
                       after:left-[6.5%]  before:left-[6.5%]
                     
                       contact_res:after:left-[3.5%]  contact_res:before:left-[3.5%]
                  
                    "
            ></div>
          </div>
        </div>
        <div className="pt-6 pb-1 flex lg:text-left  lg:justify-start  mx-5 lg-mx-0">
          <p className="font-pop font-normal text-sm text-[#888888] w-auto lg:w-[323px] leading-6">
            If you have any suggestion, project or even you want to say “hello”,
            please fill out the form below and I will reply you shortly.
          </p>
        </div>
        <div className="contact_res:flex">
          <div className="w-[50%] contact_res:mt-4 lg:mt-0 mx-5 lg-mx-0 ">
            <>
              <div className="flex mt-6  ml-4  md:ml-12 lg:ml-0">
                <Image imgsrc="../../../assets/phone.png" />
                <div className="ml-3">
                  <h2 className="font-mont font-normal text-[#7B7B7B] text-lg cursor-pointer">
                    Phone
                  </h2>
                  <h4 className="font-mont font-normal text-[11px] sm:text-sm text-[#979797] cursor-pointer">
                    01768450581
                  </h4>
                </div>
              </div>
              <div className="flex mt-6  ml-4  md:ml-12 lg:ml-0">
                <Image imgsrc="../../../assets/email.png" />
                <div className="ml-3">
                  <h2 className="font-mont font-normal text-[#7B7B7B] text-lg cursor-pointer">
                    Email
                  </h2>
                  <h4 className="font-mont font-normal text-[11px] sm:text-sm text-[#979797] cursor-pointer">
                    rezowan311410@gmail.com
                  </h4>
                </div>
              </div>
              <div className="flex mt-6  ml-4  md:ml-12 lg:ml-0">
                <Image imgsrc="../../../assets/address.png" />
                <div className="ml-3">
                  <h2 className="font-mont font-normal text-[#7B7B7B] text-lg cursor-pointer">
                    Location
                  </h2>
                  <h4 className="font-mont font-normal text-[11px] sm:text-sm text-[#979797] cursor-pointer">
                    Dhaka, Bangladesh.
                  </h4>
                </div>
              </div>
            </>
          </div>

          <div className="w-[50%]  lg:flex flex-wrap lg:justify-evenly mx-5 lg-mx-0  lg:mt-[-120px] xl:ml-[130px]">
            <form onSubmit={onSubmit}>
              <input
                onChange={(e) => setname(e.target.value)}
                className="mt-8 contact_res:mt-0 lg:mt-8 lg:mt-4 px-3 py-2 w-[240px] border-[1px]  border-transparent border-b-[#D9D9D9] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:ring-b-sky-500  rounded-md sm:text-sm
                                                placeholder:font-pop  placeholder:text-sm  placeholder:text-[#B3B3B3"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                onChange={(e) => setemail(e.target.value)}
                className="mt-4 px-3 py-2 w-[240px] border-[1px]  border-transparent border-b-[#D9D9D9] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:ring-b-sky-500  rounded-md sm:text-sm
                                                placeholder:font-pop  placeholder:text-sm  placeholder:text-[#B3B3B3 lg:ml-4"
                placeholder="Your Email"
                type="email"
                name="email"
              />
              <textarea
                onChange={(e) => setmessage(e.target.value)}
                className="resize mt-[25px] lg:mt-[50px] rounded-md w-[250px] lg:w-[500px]  border-[1px] h-[148px] border-[#D9D9D9] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:ring-b-sky-500  rounded-md sm:text-sm  placeholder:font-pop  placeholder:text-sm  placeholder:text-[#B3B3B3] placeholder:p-4"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <div className="lg:flex">
                <button
                  className="font-pop text-[#FFFFFF] px-6 py-5 contact_res:py-5 mt-[25px] lg:mt-[44px] contact_res:px-12 bg-[#393939] rounded-md
                                    text-[11px] contact_res:text-[11px]  md:text-sm font-light  hover:bg-slate-600  hover:text-[#f5f5f5] duration-300"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
                <div className="mt-2 lg:mt-14">
                  <span className="lg:ml-12 font-mont text-sm lg:text-base text-black">
                    {nameErr
                      ? nameErr
                      : emailErr
                      ? emailErr
                      : messageErr
                      ? messageErr
                      : msgsucc
                      ? msgsucc
                      : ""}
                  </span>
                  {/* <Alert message={nameErr} type="error" showIcon />
                                   <Alert message={emailErr} type="error" showIcon /> */}
                </div>
              </div>
            </form>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default forwardRef(Contact);
