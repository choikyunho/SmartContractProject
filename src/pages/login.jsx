import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
  const[account,setAccount]=useState("");
    const onClickAccount = async()=>{
        try{
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            // console.log(account);
            setAccount(accounts[0]);

        }catch(error){
            console.error(error);
        }
    };
    return(
        <div className="text-black bg-white min-h-screen grid items-center justify-center">
            {/* <button onClick={onClickAccount}>
               <img className= "w-96" src={`${process.env.PUBLIC_URL}/images/metamask.png`}/>
            </button> */}
            {/* //////////////////////////////////////////////////////////////////////////////// */}
            {account?
          (
            <Link to="/Main">         
             <button onClick={onClickAccount}>
               <img className= "w-96" src={`${process.env.PUBLIC_URL}/images/metamask.png`}/>
             </button>
           </Link>
          )
          :(  <button onClick={onClickAccount}>
               <img className= "w-96" src={`${process.env.PUBLIC_URL}/images/metamask.png`}/>
            </button>
           )} 
        </div>
    );
}
export default Login

