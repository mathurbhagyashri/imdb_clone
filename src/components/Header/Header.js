import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <span className="header"> 🎥 IMDB Hub🎬</span> */}
      <div className="header">
        <div className="headerLeft">
          <Link to="/" >
            <img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width='80px' style={{padding:"10px"}} alt="Imdb logo"/>
          </Link>
          <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
          {/* <Link to="/movies/top-rated" style={{textDecoration:"none"}}><span>Top rated</span></Link> */}
          <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
      </div>
    </>
  );
};

export default Header;
