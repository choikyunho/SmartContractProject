import { useState } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";
// import png from "../../public/images/imag2.png"

function Intro({imgSrc1,imgSrc2,ranNum1,ranNum2}) {

  return (
    <div className="bg-gradient-to-b from-transparent to-red-300 mt-3">
      <div className="flex justify-between max-w-screen-xl mx-auto text-black ">
        <div className="relative w-[500px] h-60 flex">
          <img
            className="absolute w-60 h-60 rounded-full z-10"
            src={imgSrc1}
            alt="NFT"
          />
        
          <div
            className="w-60 h-60 rounded-full bg-white text-gray-950 flex justify-center
                            items-center text-2xl font-bold"
           >
            Loading...
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="relative w-60 h-60 ml-1">
          <img
            className="absolute w-60 h-60 rounded-full z-10"
            src={imgSrc2}
            alt="NFT"
          />
          <div
            className="w-60 h-60 rounded-full bg-white text-gray-950 flex justify-center
                            items-center text-2xl font-bold"
          >
            Loading...
          </div>
        </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex">
            <img className= "h-60" src={`${process.env.PUBLIC_URL}/images/imag.png`}/>
            <img className= "h-60 mr-5" src={`${process.env.PUBLIC_URL}/images/imag.png`}/>
        </div>

      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" max-w-screen-xl mx-auto p-4 flex  font-bold  text-2xl pb-0">
        <div className="text-black ml-7">
          {" "}
          <FaEarlybirds size={28} />{" "}
        </div>
        <div className="ml-1.5 mr-1.5"> This is Paint Eagle Owl Nft! </div>
        <div className="text-black">
          {" "}
          <FaEarlybirds size={28} />{" "}
        </div>
       </div>
       {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
       <div className=" max-w-screen-xl mx-auto p-4 flex  font-bold pt-0 pb-2 ">
        <div>
          {" "}
          수리 부엉이는 천연기념물 제 324호이자 멸종위기 야생생물 Ⅱ급으로 지정돼
          보호받고 있습니다.
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
export default Intro;
