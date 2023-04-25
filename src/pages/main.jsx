import Intro from "../components/intro";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web.3.config";
import { useEffect, useState } from "react";
import Nfts from "../components/nfts";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
// console.log(contract);

const Main = ({account})=>{
   const[totalnft, setTotalNft]=useState(0);
   const[mintedNft, setMintedNft]=useState(0);
   const[myNft, setMyNft]=useState(0); 
   const[page, setPage]=useState("1");   

    const getTotalNft =async()=>{
        try{
            if (!contract) return;
            const response = await contract.methods.totalNft().call();
            // console.log(response);
            setTotalNft(response);

        }catch(error){
            console.error(error);
        }};

    const getMintedNft =async()=>{
         try{
            if(!contract) return;
    
            const response= await contract.methods.totalSupply().call();
            setMintedNft(response);
            setPage(parseInt((parseInt(response) - 1) / 2) + 1);
    
        }catch(error){
            console.error(error);
        }};
 

    const getMyNft =async()=>{
        try{

            if(!contract || !account) return;

            const response= await contract.methods.balanceOf(account).call();
            setMyNft(response);
        }catch(error){
            console.error(error);
        }};

        useEffect(() => {
            getTotalNft();
            getMintedNft();
          }, []);

          useEffect(() => {
            getMyNft();
          }, [account]);

    return (
        <div>
            <Intro totalNft={totalnft} mintedNft={mintedNft} myNft={myNft}/>
            <Nfts page={page}/>
        </div>

    );

};
export default Main;