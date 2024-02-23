import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios';

const Footer = () => {
   let[copy,setcopy] = useState("");
   let[media,setmedia] = useState([]);
    
   useEffect(()=>{
    async function copyright(){
         let data = await axios.get("http://localhost:1337/api/footers?populate[social_media][populate]=*");
         setcopy(data.data.data[0].attributes.copy_right);
         setmedia(data.data.data[0].attributes.social_media)
     }
     copyright()
   },[])
   let handleLinkedin = (item)=>{
    if(item == "0"){
      window.location.href = "https://www.linkedin.com/in/abuhossen/"
    }
   }
  return (
    <footer className='bg-[#F5F5F5]'>
        <Container>
            <div className='flex justify-evenly mx-5 lg_res:mx-0'>
                <div className='w-[50%]'>
                    <h3 className='font-pop font-light text-[12px] text-[9px] contact_res:text-sm md:text-sm text-[#929292] py-[22px]'>{copy}</h3>
                </div>
                <div className='w-[50%] flex justify-end'>
                    {media.map((item,index)=>(
                       <div>
                         <h2 onClick={()=>handleLinkedin(index)} className='font-mont font-normal
                         text-[10px] contact_res:text-sm text-[10px] md:text-sm  text-[#929292] font-light lg:mr-[140px] py-[22px] cursor-pointer'>HERE IS MY <span className='text-[#36454F] font-bold'>{item.social_media}</span> PROFILE</h2>
                       </div>
                    ))}
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer