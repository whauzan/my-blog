import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginCard } from './Components';
import { Category, Dashboard, Home, NewPost, PostDetails, Posts } from './Pages';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:slug' element={<PostDetails />}/>
          <Route path='/category/:slug' element={<Category />}/>
          <Route path='/admin' element={<LoginCard />} />
          <Route path='/admin/dashboard' element={<Dashboard />}/>
          <Route path='/admin/posts' element={<Posts />}/>
          <Route path='/admin/add-post' element={<NewPost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
