import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import PostView from './components/Postview';
import Addpost from './components/Addpost';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/post" element={<PostView/>}></Route>
            <Route path="/addpost" element={<Addpost/>}></Route>        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
