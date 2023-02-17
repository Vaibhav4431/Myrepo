// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import TextName from './components/TextName';
import Buttons from './components/Buttons';
import Pages from './components/Pages';
import Error from './components/Error';
import AllPages from './components/AllPages';
// import Buttons from './components/Buttons';
// import Navbar from './components/Navbar';
// import TextName from './components/TextName.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TextName' element={<TextName name="Vaibhav"/>}/>
        <Route path='/Buttons' element={<Buttons/>}/>
        <Route path='/Pages' element={<Pages/>}/>
        <Route path='/Pages/:id' element={<AllPages/>}></Route>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
    </BrowserRouter>
        
        
    
   
    </>
  );
}

export default App;
