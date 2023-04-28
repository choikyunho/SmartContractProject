
function Nftdata({totalNft, mintedNft,myNft}){
    return(
    <div className="flex text-center">
        <div className="flex w-[250px] justify-between">
        <div className="font-bold text-black ml-2">
          <div className=""> {totalNft}</div>
          <div className="">총 NFT</div>
        </div>
        {/* ///////////////////////////////////// */}
        <div className="font-bold text-black pl-0">
          <div className=""> {mintedNft}</div>
          <div className="">발행된 NFT</div>
        </div>
        {/* ///////////////////////////////////// */}
        <div className="font-bold text-black">
          <div className=""> {mintedNft}</div>
          <div className=""> 내 NFT</div>
        </div>
        </div>
    </div>
    );
}
export default Nftdata;