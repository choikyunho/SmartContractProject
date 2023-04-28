import Intro from "../components/intro";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web.3.config";
import { useEffect, useState } from "react";
import Nfts from "../components/nfts";
import Header from "../components/header";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
// console.log(contract);

const ranNum1 = Math.floor(Math.random() * 15) + 1;
const ranNum2 = Math.floor(Math.random() * 30) + 1;

const imgSrc1 = `${process.env.REACT_APP_IMAGE_URL}/${ranNum1}.png`;
const imgSrc2 = `${process.env.REACT_APP_IMAGE_URL}/${ranNum2}.png`;


function Main({ account, setAccount }) {
    const [totalNft, setTotalNft] = useState(0);
    const [mintedNft, setMintedNft] = useState(0);
    const [myNft, setMyNft] = useState(0);
      // console.log(myNft);
    const [page, setPage] = useState(2);
    // console.log(page);
    const getTotalNft = async () => {
      try {
        if (!contract) return;
        const response = await contract.methods.totalNft().call();
        // console.log(totalNft);
        setTotalNft(response);
      } catch (error) {
        console.error(error);
      }
    };
    /////////////////////////////////////////////
    const getMintNft = async () => {
      try {
        if (!contract) return;
        const response = await contract.methods.totalSupply().call();
        setMintedNft(response);
        setPage(parseInt((parseInt(response)-1)/5) + 1);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    /////////////////////////////////////////////
    const getMyNft = async () => {
      try {
        if (!contract || !account) return;
        const response = await contract.methods.balanceOf(account).call();
        setMyNft(response);
      } catch (error) {
        console.error(error);
      }
    };
    /////////////////////////////////////////////
    useEffect(() => {
      getTotalNft();
      getMintNft();
    }, []);
    
    useEffect(() => {
      getMyNft();
    }, [account]);
  
    return (
      <div>
        <Header account={account} setAccount={setAccount} />
        <Intro ranNum1={ranNum1} ranNum2={ranNum2} imgSrc1={imgSrc1} imgSrc2={imgSrc2}/>
        <Nfts
          totalNft={totalNft}
          mintedNft={mintedNft}
          myNft={myNft}
          account={account}
          setAccount={setAccount}
          page={page} 
          ranNum1={ranNum1} ranNum2={ranNum2}
        />
      </div>
    );
  }
  export default Main;
  