import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Post from './Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Create from './components/Create';
import Login from './Pages/Login';
import './App.css';
import Bpost from './components/Bpost';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Pages/Protected';
import EditPost from './Pages/Editpost';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Bloglist from './components/Bloglist';

// Main content component with tracking
const TrackedAppContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path='/blog/:id' element={<Bpost />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/others" element={<Bloglist />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/blog/create' element={<Create />} />
            <Route path="/blog/:id/edit" element={<EditPost />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Main App component with Router
const App = () => {
  return (
    <Router>
      <TrackedAppContent />
    </Router>
  );
};

export default App;