import React, { useState } from "react";
import IqLogo from "../../assets/iqcosmos.png";
import { Link, NavLink } from "react-router-dom";
import './Homepage.css';

const PublicTopHeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container-fluid p-0 homebg mt-2">
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <ul className="public-header">
                <li>
                  <Link to={'/'}><img src={IqLogo} alt='iqLogo'/></Link>
                </li>
                <li className="menu-icon" onClick={handleMenuToggle}>
                  <div className="hamburger-bar"></div>
                  <div className="hamburger-bar"></div>
                  <div className="hamburger-bar"></div>
                </li>
                <li className={`menu-items ${showMenu ? 'open' : 'hide-items'}`}>
                  <ul>
                    <li>
                      <NavLink to={'/iq-test'} activeclassname="true">IQ Test Page</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/about-iq'} activeclassname="true">About IQ</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/blog'} activeclassname="true">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/contact-us'} activeclassname="true">Contact US</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicTopHeaderComponent;
