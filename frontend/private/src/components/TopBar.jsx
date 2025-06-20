import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({ userName, userImage }) => {
  return (
    <div className="topbar">
      <div className="left-section" /> {/* Espacio para balancear el centro */}

      <div className="center-section">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search your" />
        </div>
      </div>

      <div className="right-section">
        <div className="icon-circle">
          <FaBell className="icon" />
        </div>
        <NavLink to="/ajustes" className="profile-link">
          <img
            src={userImage || "/chaeee.png"}
            alt="Profile"
            className="profile-pic"
          />
          <span className="profile-name">{userName || "Kim Chaewon"}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;

