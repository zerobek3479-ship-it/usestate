import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isDark ? 'dark' : 'light'}`}>
      
      <div className="controls">
        
        <button className="btn toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "❮ Yoping" : "Oching ❯"}
        </button>

       
        <button className="btn mode-btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="menu">
        <div className="menu-item active">
          <span>📋</span>
          {isOpen && <span>Order Line</span>}
        </div>
        
        <div className="menu-item">
          <span>👥</span>
          {isOpen && <span>Customer</span>}
        </div>

        <div className="menu-item">
          <span>⚙️</span>
          {isOpen && <span>Settings</span>}
        </div>
      </div>
        
    </div>
  );
};

export default Sidebar;