import React, { useEffect, useRef, useState } from "react";
import "../.././App.css";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Image from "./Image";
import LIstItem from "./LIstItem";
import List from "./List";
import Portfolio from "./Portfolio";
import Service from "./Service";
const Navbar = () => {
  const Aboutref = useRef(null);
  const Portfolioref = useRef(null);
  const Serviceref = useRef(null);
  const Testiref = useRef(null);
  const Contactref = useRef(null);
  const Homeref = useRef(null);
  const [url, seturl] = useState("");
  const [menuItem, setmenuItem] = useState([]);
  const [menuIcon, setMenuIcon] = useState("");
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setportfolio] = useState(false);
  const [service, setService] = useState(false);
  const [testmonial, setTestmonial] = useState(false);
  const [contact, setContact] = useState(false);
  let [show, setShow] = useState(true);
  // useEffect(() => {
  //   async function menu() {
  //     const data = await axios.get(
  //       "http://localhost:1337/api/menus?populate=*"
  //     );
  //     seturl(data.data.data[1].attributes.logo.data.attributes.url);
  //     setmenuItem(data.data.data[1].attributes.Menu_Item);
  //     setMenuIcon(data.data.data[1].attributes.Menu_I.data[0].attributes.url);
  //   }
  //   menu();
  // }, []);

  //  useEffect(()=>{
  //   const scrollAmount = window.scrollY;
  //   // function WidthScroll (e){
  //   //       if(window.innerWidth<768 && scrollAmount<50000){
  //   //        setContact(true)
  //   //       }

  //   const handleScroll = () => {
  //         if(scrollAmount>3560){

  //           setContact(true)
  //           setTestmonial(false)
  //          }
  //       }

  //   //     WidthScroll()
  //   // window.addEventListener('resize',WidthScroll)
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  //  },[])

  let handleAboutClick = () => {
    Aboutref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let handlePortfolio = () => {
    Portfolioref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let handleServiceClick = () => {
    Serviceref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let handleTestiClick = () => {
    Testiref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let handleContClick = () => {
    Contactref.current?.scrollIntoView({ behavior: "smooth" });
  };

  let handleHomeClick = () => {
    Homeref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = window.scrollY;

      setIsNavbarFixed(scrollAmount > 300);
      //  if(scrollAmount < 660){
      //   setHome(true)
      //   setAbout()
      //     }else if(scrollAmount > 660){
      //       setHome(false)
      //     }

      //  if(scrollAmount > 661 && scrollAmount < 1200){
      //      setAbout(true)
      //      setportfolio(false)
      //      setService(false)
      //  }else if(scrollAmount > 1200){
      //   setportfolio(true)
      //   setAbout(false)
      //   setService(false)
      //  }
      //   if(scrollAmount >2400){
      //   setService(true)
      //   setportfolio(false)
      //   setTestmonial(false)
      //  }
      //testimonial part
      //  if(scrollAmount>3100){
      //   setTestmonial(true)
      //   setService(false)
      //   setContact(false)
      //  }
      // contact part
      function WidthScroll(e) {
        //Home part=========================================================
        if (
          window.innerWidth < 550 &&
          scrollAmount >= 0 &&
          scrollAmount < 500
        ) {
          setHome(true);
          setAbout(false);
          setportfolio(false);
        } else if (
          window.innerWidth <= 1023 &&
          window.innerWidth > 550 &&
          scrollAmount >= 0 &&
          scrollAmount < 470
        ) {
          setHome(true);
          setAbout(false);
          setportfolio(false);
        } else if (
          window.innerWidth >= 1024 &&
          scrollAmount >= 0 &&
          scrollAmount < 661
        ) {
          setHome(true);
          setAbout(false);
          setportfolio(false);
        }
        // about part========================================================
        else if (
          window.innerWidth < 550 &&
          scrollAmount > 550 &&
          scrollAmount < 1200
        ) {
          setAbout(true);
          setportfolio(false);
          setService(false);
          setHome(false);
        } else if (
          window.innerWidth <= 1023 &&
          window.innerWidth > 576 &&
          scrollAmount > 470 &&
          scrollAmount < 950
        ) {
          setAbout(true);
          setHome(false);
          setportfolio(false);
          setService(false);
        } else if (
          window.innerWidth >= 1024 &&
          scrollAmount > 661 &&
          scrollAmount < 1200
        ) {
          setAbout(true);
          setHome(false);
          setportfolio(false);
          setService(false);
        }
        // portfolio part========================================================
        else if (
          window.innerWidth < 550 &&
          scrollAmount > 1200 &&
          scrollAmount < 1900
        ) {
          setportfolio(true);
          setAbout(false);
          setService(false);
        } else if (
          window.innerWidth <= 1023 &&
          window.innerWidth > 576 &&
          scrollAmount > 950 &&
          scrollAmount < 1800
        ) {
          setportfolio(true);
          setAbout(false);
          setService(false);
        } else if (
          window.innerWidth >= 1024 &&
          scrollAmount > 1200 &&
          scrollAmount < 1800
        ) {
          setportfolio(true);
          setAbout(false);
          setService(false);
        }

        //service part==============================================================
        else if (
          window.innerWidth < 576 &&
          scrollAmount > 1900 &&
          scrollAmount < 3750
        ) {
          setService(true);
          setportfolio(false);
          setTestmonial(false);
          setContact(false);
        } else if (
          window.innerWidth <= 1023 &&
          window.innerWidth > 576 &&
          scrollAmount > 1800 &&
          scrollAmount < 2860
        ) {
          setService(true);
          setportfolio(false);
          setTestmonial(false);
          setContact(false);
        } else if (
          window.innerWidth >= 1024 &&
          scrollAmount > 1800 &&
          scrollAmount < 2400
        ) {
          setService(true);
          setportfolio(false);
          setTestmonial(false);
          setContact(false);
        }

        // testimonial============================================================
        // else if(window.innerWidth<576 && scrollAmount>4100 && scrollAmount < 4650){
        //   setTestmonial(true)
        //   setService(false)
        //   setContact(false)
        // }else if(window.innerWidth<=1023 && window.innerWidth > 576 &&  scrollAmount>3380 && scrollAmount<3900){
        //   setTestmonial(true)
        //   setService(false)
        //   setContact(false)
        //  }

        // else if(window.innerWidth>=1024 && scrollAmount>3100 && scrollAmount<3560){
        //   setTestmonial(true)
        //   setService(false)
        //   setContact(false)
        // }
        //contact=======================================================
        else if (window.innerWidth < 576 && scrollAmount > 3750) {
          setContact(true);
          setTestmonial(false);
          setService(false);
        } else if (
          window.innerWidth <= 1023 &&
          window.innerWidth > 576 &&
          scrollAmount > 2860
        ) {
          setContact(true);
          setTestmonial(false);
          setService(false);
        } else if (window.innerWidth >= 1024 && scrollAmount > 2400) {
          setContact(true);
          setTestmonial(false);
          setService(false);
        }
      }
      WidthScroll();
      window.addEventListener("resize", WidthScroll);

      //  if(scrollAmount>3560){

      //   setContact(true)
      //   setTestmonial(false)
      //  }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let handleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    function WidthScroll(e) {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    WidthScroll();
    window.addEventListener("resize", WidthScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50  top-0 left-0 w-full pt-12 ${
          isNavbarFixed ? "fixe pt-6 pb-6" : ""
        }`}
      >
        <div className="max-w-container mx-auto   ">
          <div className="md:flex mx-5 lg_res:mx-0">
            <div className="flex">
              <div className="w-3/12 w-44 h-12">
                <Image
                  className="w-full h-full"
                  imgsrc="../../assets/logoremovebg.png"
                />
              </div>
              <div className="md:hidden ml-auto" onClick={handleMenu}>
                <Image
                  className="  mt-5 ml-auto"
                  imgsrc="../../assets/3bar.png"
                />
              </div>
            </div>
            <div className="md:ml-auto">
              {show && (
                <List className="md:flex inline-block">
                  <>
                    <div className="relative group">
                      <LIstItem
                        className={`${
                          "HOME" === "HOME" && home ? "text-slate-600" : " "
                        }
            
             mx-3.5 mt-3.5 font-mont group-hover:text-black text-sm text-[#777777] font-normal 
             cursor-pointer ${isNavbarFixed ? "text-[#ffffff]" : ""}`}
                        onClick={
                          "HOME" === "HOME" ? handleHomeClick : undefined
                        }
                        itemName="HOME"
                      />

                      <div
                        className="h-[2px]  w-[0%] md:group-hover:w-[80%]
                bg-slate-600  md:hover:transition duration-300  md:absolute top-[100%] left-[10%]
              "
                      ></div>
                    </div>
                    {/* end div listitem */}
                    <div className="relative group">
                      <LIstItem
                        className={`${
                          "ABOUT" === "ABOUT" && about ? "text-slate-600" : " "
                        }
            
             mx-3.5 mt-3.5 font-mont group-hover:text-black text-sm text-[#777777] font-normal 
             cursor-pointer ${isNavbarFixed ? "text-[#ffffff]" : ""}`}
                        onClick={
                          "ABOUT" === "ABOUT" ? handleAboutClick : undefined
                        }
                        itemName="ABOUT"
                      />

                      <div
                        className="h-[2px]  w-[0%] md:group-hover:w-[80%]
                bg-slate-600  md:hover:transition duration-300  md:absolute top-[100%] left-[10%]
              "
                      ></div>
                    </div>
                    {/* end div listitem */}
                    <div className="relative group">
                      <LIstItem
                        className={`${
                          "PORTFOLIO" === "PORTFOLIO" && portfolio
                            ? "text-slate-600"
                            : " "
                        }
            
             mx-3.5 mt-3.5 font-mont group-hover:text-black text-sm text-[#777777] font-normal 
             cursor-pointer ${isNavbarFixed ? "text-[#ffffff]" : ""}`}
                        onClick={
                          "PORTFOLIO" === "PORTFOLIO"
                            ? handlePortfolio
                            : undefined
                        }
                        itemName="PORTFOLIO"
                      />

                      <div
                        className="h-[2px]  w-[0%] md:group-hover:w-[80%]
                bg-slate-600  md:hover:transition duration-300  md:absolute top-[100%] left-[10%]
              "
                      ></div>
                    </div>
                    {/* end div listitem */}
                    {/* start div listitem */}
                    <div className="relative group">
                      <LIstItem
                        className={`${
                          "SERVICES" === "SERVICES" && service
                            ? "text-slate-600"
                            : " "
                        }
            
             mx-3.5 mt-3.5 font-mont group-hover:text-black text-sm text-[#777777] font-normal 
             cursor-pointer ${isNavbarFixed ? "text-[#ffffff]" : ""}`}
                        onClick={
                          "SERVICES" === "SERVICES"
                            ? handleServiceClick
                            : undefined
                        }
                        itemName="SERVICES"
                      />

                      <div
                        className="h-[2px]  w-[0%] md:group-hover:w-[80%]
                bg-slate-600  md:hover:transition duration-300  md:absolute top-[100%] left-[10%]
              "
                      ></div>
                    </div>
                    {/* end div listitem */}
                    {/* start div listitem */}
                    <div className="relative group">
                      <LIstItem
                        className={`${
                          "CONTACT" === "CONTACT" && contact
                            ? "text-slate-600"
                            : " "
                        }
            
             mx-3.5 mt-3.5 font-mont group-hover:text-black text-sm text-[#777777] font-normal 
             cursor-pointer ${isNavbarFixed ? "text-[#ffffff]" : ""}`}
                        onClick={
                          "CONTACT" === "CONTACT" ? handleContClick : undefined
                        }
                        itemName="CONTACT"
                      />

                      <div
                        className="h-[2px]  w-[0%] md:group-hover:w-[80%]
                bg-slate-600  md:hover:transition duration-300  md:absolute top-[100%] left-[10%]
              "
                      ></div>
                    </div>
                    {/* end div listitem */}
                  </>
                </List>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Banner ref={Homeref} />
      <About ref={Aboutref} />
      <Portfolio ref={Portfolioref} />
      <Service ref={Serviceref} />
      {/* <Testimonial ref={Testiref}/> */}
      <Contact ref={Contactref} />
    </>
  );
};

export default Navbar;
