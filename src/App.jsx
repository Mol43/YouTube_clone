
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/home/home";
<<<<<<< HEAD
import { Navbar } from "./components/common/navbar";
=======
// import {Sidebar} from "./components/pages/home/"
>>>>>>> 9f4398ec6b3ff374aaa98a14021df70c563889eb

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
