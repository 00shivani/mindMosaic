import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../../css/Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="sidebar" onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
      <div className="logo">MindMOSAIC</div>
      <nav className={`navigation ${isExpanded ? 'expanded' : ''}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/profile" className="nav-item">Profile</Link>
        <Link to="/settings" className="nav-item">Settings</Link>
        <Link to="/new-post" className="nav-item">New Post</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
