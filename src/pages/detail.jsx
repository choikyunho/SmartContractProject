import axios from "axios";
import { useEffect, useState } from "react";
import { FaChessRook } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  return (
    <div className="flex flex-col xl: justify-center items-center py-16 bg-gray-900 mt-0">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img className="rounded-t-2xl w-[500px]" src={metadata.image} alt="NFT" />
            <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600 rounded-b-2xl text-center w-[500px]">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4">
                    <div>{v.trait_type}</div>
                    <div className="mt-0 border-t-2 font-bold ">{v.value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-3">
            <div className="text-4xl flex items-center ">
              <div className="">{metadata.name}</div>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center ml-2 text-gray-950">
                <FaChessRook size={18} />
              </div>
            </div>
            <div className="flex justify-center items-center mt-3 text-xl">{metadata.description}</div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail;