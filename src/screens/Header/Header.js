import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ShoeImg from '../../assets/shoe.png';
import BrandLogo from '../../assets/nike.png';

import './Header.css';

export const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="d-flex flex-column justify-content-center text-center position-relative">
        <img src={BrandLogo} className="brandLogo" alt="brand_logo" />
        <span className="headerSubHeading">BRAND BY</span>
        <span className="headerHeading">ShoesInc.</span>
        <img src={ShoeImg} className="headerImg" alt="main_logo" />
        <Link to="products">
          <Button className="headerBtn">
            SHOP NOW
          </Button></Link>
      </div>
    </div>
  );
}