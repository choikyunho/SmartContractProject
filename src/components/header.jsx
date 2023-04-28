import { ImHappy } from "react-icons/im";
import { Link } from "react-router-dom";

function Header({ account, setAccount }) {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      // console.log(account);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setAccount("");
  };

  return (
    <div>
      <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
        <div className="flex mt-1">
          <ImHappy size={32} />
          <div className="mr-2 ml-2 font-bold text-2xl">
            Part2 Final Project
          </div>
          <ImHappy size={32} />
        </div>
        {/* ///////////////////////////////////////////////////////////////////// */}
        <div>
          {account ? (
            <div className="mr-2 ml-2 font-bold text-2xl mt-1">
              <Link to="/">
                <button onClick={onClickLogOut}>{account}</button>
              </Link>
            </div>
          ) : (
            <button onClick={onClickAccount}>
              <div className="mr-5 ml-2 font-bold text-2xl mt-1">
                지갑주소 확인
              </div>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
export default Header;
