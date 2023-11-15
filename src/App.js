import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,
Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import BlogDetail from './components/BlogDetails';
import Delete from './components/Delete';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/blogs/:id' element={<BlogDetail/>}/>
            <Route path='/delete' element={<Delete/>}/>
          </Routes>
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
