import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { LoginCard } from './Components';
import { Category, CommentDetail, Dashboard, EditPost, Home, NewPost, PostDetails, Posts } from './Pages';
import { persistor, store } from './Redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/post/:slug' element={<PostDetails />}/>
              <Route path='/category/:slug' element={<Category />}/>
              <Route path='/admin' element={<LoginCard />} />
              <Route path='/admin/dashboard' element={<Dashboard />}/>
              <Route path='/admin/posts' element={<Posts />}/>
              <Route path='/admin/add-post' element={<NewPost />}/>
              <Route path='/admin/posts/edit/:slug' element={<EditPost />}/>
              <Route path='/admin/dashboard/comments' element={<CommentDetail />}/>
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
