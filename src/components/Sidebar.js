import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profileimage.png";

const Sidebar = () => {
  return (
    <aside>
      <div className="top">
        <img src={profileImage} alt="profileimg" />
      </div>
      <hr />

      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/books" className="link">
            <li>
              <i className="fa-solid fa-book"></i>
              <span>All Books</span>
            </li>
          </Link>

          <Link to="/mybooks" className="link">
            <li>
              <i className="fa-solid fa-book"></i>
              <span>My Books</span>
            </li>
          </Link>

          <Link to="/books/add" className="link">
            <li>
              <i className="fa-solid fa-book"></i>
              <span>Add Books</span>
            </li>
          </Link>

          <Link to="/transaction" className="link">
            <li>
              <i className="fa-solid fa-t"></i>
              <span> Transaction </span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profile" className="link">
            <li>
              <i className="fa-solid fa-user"></i>
              <span> Profile </span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
