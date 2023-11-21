
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { AddStudent } from './components/AddStudent';
import { EditStudent } from './components/EditStudent';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/add" element={<AddStudent/>}/>
         <Route path="/edit/:id" element={<EditStudent/>}/>
       </Routes>
    </div>
  );  
}

export default App;
