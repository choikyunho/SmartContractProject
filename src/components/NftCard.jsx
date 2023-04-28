import { FaChessRook } from "react-icons/fa";
import { Link } from "react-router-dom";

const NftCard = ({tokenId,metadata,mintedNft,ranNum1,ranNum2})=>{
  console.log(ranNum1);
  console.log(ranNum2);
    return(
    <div className="relative rounded-2xl bg-gray-800 pb-4">
        {parseInt(mintedNft)<tokenId &&(ranNum1!==ranNum2) && (
                  <div className="absolute bg-black w-full h-full bg-opacity-50 
                    rounded-2xl flex justify-center items-center text-4xl font-bold">
                        Not minted.
                  </div>)}
                  
      <div >
        <img className="rounded-t-2xl w-[300px]" src={metadata.image} alt={metadata.name} />
        <div className="mt-4 text-3xl font-bold px-4"> #{tokenId}</div>
      </div>

          <div className="mt-4 text-2xl font-bold flex justify-center items-center px-4 text-gray-300">
            This Eagle Owl NFT!
            <div className="bg-white w-7 h-6 rounded-full flex justify-center 
                            items-center ml-2 text-black">
              <FaChessRook size={16} />
            </div>
         </div>
         {/* <div className="mt-4 text-2xl font-bold px-4"> #{tokenId}</div> */}
         <div className="mt-4 text-xl flex justify-end px-4">
           <Link to={`${tokenId}`}>
            <button disabled={parseInt(mintedNft)<tokenId} className="bg-gray-50 text-gray-950 px-4 py-2 rounded-xl
                                               hover:bg-gray-500">
                Detail
            </button>
           </Link>
         </div>
    </div>
)};
export default NftCard;
