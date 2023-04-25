import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/header";

function App(){

  return (
    <BrowserRouter>
    <div className="bg-red-100">
      <Header/>
      <Routes>
       <Route path="/" element={<Main/>} />
       <Route path=":tokenId"  element={<Detail/>} />
      </Routes>
    </div>;
    </BrowserRouter>
  );}

export default App;
