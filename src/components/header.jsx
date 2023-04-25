import { FaChessRook } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = ({ account, setAccount }) => {
  const [coinprice,setCoinPrice]=useState();
  const getCoinPrice = async()=>{
    
    try{
        const response = await axios.get('https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-MATIC,%20KRW-xrp');

        console.log(response);
        setCoinPrice([
            {Symbol:"BTC",price:response.data[0].trade_price},
            {Symbol:"MATIC",price:response.data[1].trade_price},        
            {Symbol:"XRP",price:response.data[2].trade_price},   
        ])
    }catch(error){
        console.error(error);
    }}

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }};

    useEffect(() => {
        getCoinPrice();
      }, []);

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <FaChessRook size={28} />
          <div className="ml-1 text-xl">Ble-Chess</div>
        </div>
      </Link>
        <div>
         {coinprice && (
            <ul>
                {coinprice.map((v,i)=>{
                    return(
                        <li key={i} className="ml-2">
                          {v.Symbol}: {(v.price/1000).toLocaleString()}KW
                        </li>);})}
            </ul>)}

         {account ? 
         (
          <div className="flex items-center p-2 bg-gray-800 rounded-full">
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <AiFillHeart />
              </div>
              <div className="ml-2">
                {account.substring(0, 4)}... {account.substring(account.length - 4)}
              </div>
          </div>
         ) : (
          <button className="flex items-center p-2 bg-gray-800 rounded-full m-4"onClick={onClickAccount}>
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>)}
      </div>
    </header>);};

export default Header;