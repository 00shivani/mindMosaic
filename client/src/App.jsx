import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignUpForm from './_auth/forms/SignUpForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/sign-in" element={<SigninForm />} />
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