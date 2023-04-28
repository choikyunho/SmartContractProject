import { useEffect, useState } from "react";
import axios from "axios";

function Coin(account, setAccount){
    const [coinprice, setCoinprice] = useState();

    const getCoinPrice = async (account, setAccount,) => {
        try {
          const response = await axios.get(
            "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-MATIC,%20KRW-xrp"
          );
    
          setCoinprice([
            { Symbol: "BTC", price: response.data[0].trade_price },
            { Symbol: "MATIC", price: response.data[1].trade_price },
            { Symbol: "XRP", price: response.data[2].trade_price },
          ]);
        } catch (error) {
          console.error(error);
        }
      };

      const onClickAccount = async () => {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getCoinPrice();
      }, []);

    return(
        <div className=" font-bold text-black">
        {coinprice && (
          <ul className=" flex ">
            {/* //flex는 하위 묶음 전체에 적용되는게 아니라 한칸 아래 묶음에만 적용된다. */}
            {/* //i값 사용시 key={i} 필요! */}             
            {coinprice.map((v, i) => {
              return (
                <li className="p-1 m-1"key={i}  >
                  {v.Symbol} : {(v.price / 1000).toLocaleString()}kw
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
}
export default Coin;