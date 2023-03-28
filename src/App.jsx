import { Canvas } from "@react-three/fiber";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TopSection,
  ImageDetec
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-repeat">
          <Navbar />
          <div  style={{height:'800px'}}>
          <Canvas  >
            <Hero />
          </Canvas>
          </div>
          
          <Routes>
            <Route path="/" element={<TopSection/>}/>
            <Route path="/function" element={<ImageDetec/>}/>

            
          </Routes>
          <TopSection/>
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
