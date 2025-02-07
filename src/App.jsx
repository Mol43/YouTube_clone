
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/home/home";
import CategorySlider from "./components/common/CategorySlider";


function App() {
  return (
    <BrowserRouter>
      <Routes>
  

         <Route path="/" element={<CategorySlider/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
