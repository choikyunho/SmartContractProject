import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";
import Coin from "./coin";
import Nftdata from "./nftdata";

const Nfts = ({totalNft,myNft,page,mintedNft, account, setAccount, ranNum1,ranNum2})=>{
    const [selectedPage, setSelectedPage] = useState(1);
    const [nfts, setNfts]=useState();

    const getNfts = async(p)=>{
        try{
            let nftArray=[];
            
            setNfts();
/////화면에 나타낼 nft 개수 조절////////////////
            for(let i =0; i<8; i++){
                const tokenId = i+1 +(p-1)*8;

                let response = await axios.get(
                    `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
                );
                console.log(response);
                nftArray.push({tokenId, metadata: response.data});
            }
            setNfts(nftArray);

        }catch(error){
            console.log(error);
        }
    };

    const onClickPage =(p)=>()=>{
        setSelectedPage(p);
        getNfts(p);
    };

    const pageComp =()=>{
        let pageArray = [];

        for(let i =0; i<page; i++){
            pageArray.push(
                <button
                key={i}
                className={`ml-4 text-2xl font-bold hover:text-white ${
                  i + 1 === selectedPage ? "text-black" : "text-white"
                }`}
                onClick={onClickPage(i+1)}
              >
                {i + 1} <span className="text-base">페이지</span>
              </button>
            );
        }
        return pageArray;};

        useEffect(() => {
            console.log(nfts);
          }, [nfts]);
          
        useEffect(() => {
            getNfts(1);
          }, []);

    return (
    <div className="bg-gradient-to-b from-white to-blue-300 ">
     <div className="max-w-screen-xl mx-auto pt-4 ">
        <div className="flex justify-between">
          <div className="ml-5"><Nftdata totalNft={totalNft}mintedNft={mintedNft} myNft={myNft}/></div>
          <div className="mr-5 mt-2"> <Coin account={account} setAccount={setAccount} /></div>
        </div>
{/* //////////////////////////////화면에 나타난 nft css 조정//////////////////////////////  */}
        <ul className="mt-0 p-6 grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-3">
          {nfts ? (nfts.map((v, i) => {return <NftCard key={i} tokenId={v.tokenId}
                                        metadata={v.metadata} mintedNft={mintedNft} ranNum1={ranNum1} ranNum2={ranNum2} />;})) 
          : (<div>로딩중입니다...</div>)}
      </ul>
      <div className="flex justify-center pb-5">{pageComp()}</div>
      </div>
     </div>
    );
}
export default Nfts;