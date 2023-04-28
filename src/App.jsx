import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";

import { useState } from "react";
import Login from "./pages/login";

function App(){
  const [account,setAccount] = useState("");

    return (
      <BrowserRouter>
        <div className="bg-gray-950 min-h-screen text-white">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route
              path="/Main"
              element={<Main account={account} setAccount={setAccount} />}
            />
            <Route path="/Main/:tokenId" element={<Detail />} />
          </Routes>
        </div>
        ;
      </BrowserRouter>

  );}

export default App;
