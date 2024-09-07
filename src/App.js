import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Pages/Projects'
import About from './Pages/About'
import Home from './Pages/Home';
import Layout from "./Pages/Layout";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
