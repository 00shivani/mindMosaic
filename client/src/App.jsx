import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignUpForm from './_auth/forms/SignUpForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';
import NewPost from './components/ui/NewPost';
import ProfilePage from './components/ui/ProfilePage';
import Post from './components/ui/Post';
import Sidebar from './components/ui/Sidebar';
import './css/App.css';

const App = () => {
  const postsData = [
    { id: 1, content: 'This is the first post', comments: ['First comment', 'Second comment'] },
    { id: 2, content: 'This is the second post', comments: ['Another comment', 'One more comment'] },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex h-screen">
      <Sidebar />
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route exact path="/" element={
              <div className="posts">
                {postsData.map(post => (
                  <Post key={post.id} content={post.content} comments={post.comments} />
                ))}
              </div>
            } />
            </Route>
            
            {/* private routes */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
    </ThemeProvider>
  );
};

export default App;