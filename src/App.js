import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Pages/Category';
import Home from './Pages/Home';
import PostDetails from './Pages/PostDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:slug' element={<PostDetails />}/>
          <Route path='/category/:slug' element={<Category />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
