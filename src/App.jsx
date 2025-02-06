
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/home/home";
// import {Sidebar} from "./components/pages/home/"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Sidebar/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
