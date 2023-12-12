import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfilePage from './components/Profile/ProfilePage';
import Post from './components/Post/Post';
import NewPost from './components/NewPost/NewPost';

function App() {
  // Sample for posts
  const postsData = [
    { id: 1, content: 'This is the first post', comments: ['First comment', 'Second comment'] },
    { id: 2, content: 'This is the second post', comments: ['Another comment', 'One more comment'] },
  ];

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={
              <div className="posts">
                {postsData.map(post => (
                  <Post key={post.id} content={post.content} comments={post.comments} />
                ))}
              </div>
            } />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/new-post" element={<NewPost />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
