import React, { useState } from "react";
import "./App.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="sidebar-menu-button" onClick={toggleSidebar}>
        <span className="material-symbols-rounded">menu</span>
      </button>

      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        
        <header className="sidebar-header">
          <a href="#" className="header-logo">
            <img
              src="https://via.placeholder.com/50"
              alt="logo"
            />
          </a>

          <button className="sidebar-toggler" onClick={toggleSidebar}>
            <span className="material-symbols-rounded">
              chevron_left
            </span>
          </button>
        </header>

        <nav className="sidebar-nav">
          
          <ul className="nav-list primary-nav">

            {/* Dashboard */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">dashboard</span>
                <span className="nav-label">Dashboard</span>
              </a>
            </li>

            {/* Services Dropdown */}
            <li className={`nav-item dropdown-container ${openDropdown === "services" ? "open" : ""}`}>
              <div className="nav-link dropdown-toggle" onClick={() => toggleDropdown("services")}>
                <span className="material-symbols-rounded">calendar_today</span>
                <span className="nav-label">Services</span>
                <span className="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
              </div>

              <ul className="dropdown-menu" style={{ height: openDropdown === "services" ? "auto" : "0px" }}>
                <li className="nav-item"><span className="nav-link dropdown-title">Services</span></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">IT Consulting</a></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">Cloud Solutions</a></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">Mobile Apps</a></li>
              </ul>
            </li>

            {/* Bookmarks Dropdown */}
            <li className={`nav-item dropdown-container ${openDropdown === "bookmarks" ? "open" : ""}`}>
              <div className="nav-link dropdown-toggle" onClick={() => toggleDropdown("bookmarks")}>
                <span className="material-symbols-rounded">star</span>
                <span className="nav-label">Bookmarks</span>
                <span className="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
              </div>

              <ul className="dropdown-menu" style={{ height: openDropdown === "bookmarks" ? "auto" : "0px" }}>
                <li className="nav-item"><span className="nav-link dropdown-title">Bookmarks</span></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">Saved Tutorials</a></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">Favorite Blogs</a></li>
                <li className="nav-item"><a href="#" className="nav-link dropdown-link">Resource Guides</a></li>
              </ul>
            </li>

            {/* Simple Items */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">settings</span>
                <span className="nav-label">Settings</span>
              </a>
            </li>

          </ul>

          {/* Bottom Section */}
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">help</span>
                <span className="nav-label">Support</span>
              </a>
            </li>
          </ul>

        </nav>
      </aside>
    </>
  );
}

export default App;