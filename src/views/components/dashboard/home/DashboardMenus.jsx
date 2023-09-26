import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { signout } from "../../../../utilities/helper";
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { MdWeb, MdReviews } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { FaQuestionCircle, FaUsers } from "react-icons/fa";
import { useState } from "react";
const DashboardMenus = () => {
  let location = useLocation();
  let initialPart = location.pathname.split("/")[2];
  const [activeMenu, setActiveMenu] = useState(initialPart);
  const navigate = useNavigate();
  const { user, setUser, isLoading, setIsLoading } = useAuth();

  const handelNavigation = (path) => {
    location.pathname = path;
    navigate(`/dashboard${path}`);
    setActiveMenu(path);
  };

  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
      navigate("/login", { replace: true });
    });
  };
  return (
    <div className="sidebar-menus">
      <div
        onClick={() => handelNavigation("/")}
        className={`sidebar-menu ${activeMenu === "/" ? "menu-active" : ""}`}
      >
        <span className="menu-icon">
          <IoHome className="menuIcon" />
        </span>
        <p className="menu">Dashboard</p>
      </div>
      <div
        onClick={() => handelNavigation("/test-taken-list")}
        className={`sidebar-menu ${
          activeMenu === "/test-list" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <FaUsers className="menuIcon" />
        </span>
        <p className="menu">Test taken list from user</p>
      </div>
      <div
        onClick={() => handelNavigation("/test-list")}
        className={`sidebar-menu ${
          activeMenu === "/test-list" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <FaUsers className="menuIcon" />
        </span>
        <p className="menu">Test List</p>
      </div>
      <div
        onClick={() => handelNavigation("/upload-system")}
        className={`sidebar-menu ${
          activeMenu === "/upload-system" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <FiUpload className="menuIcon" />
        </span>
        <p className="menu">Test upload system</p>
      </div>
      <div
        onClick={() => handelNavigation("/user-manager")}
        className={`sidebar-menu ${
          activeMenu === "/user-manager" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <FaUserCog className="menuIcon" />
        </span>
        <p className="menu">User manager</p>
      </div>
      <div
        onClick={() => handelNavigation("/website-CMS")}
        className={`sidebar-menu ${
          activeMenu === "/website-CMS" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <MdWeb className="menuIcon" />
        </span>
        <p className="menu">Website CMS</p>
      </div>
      <div
        onClick={() => handelNavigation("/reports")}
        className={`sidebar-menu ${
          activeMenu === "/reports" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <TbReportAnalytics className="menuIcon" />
        </span>
        <p className="menu">Reports</p>
      </div>
      <div
        onClick={() => handelNavigation("/reviews")}
        className={`sidebar-menu ${
          activeMenu === "/reviews" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <MdReviews className="menuIcon" />
        </span>
        <p className="menu">Reviews</p>
      </div>
      <div
        onClick={() => handelNavigation("/supports")}
        className={`sidebar-menu ${
          activeMenu === "/supports" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <BiSupport className="menuIcon" />
        </span>
        <p className="menu">Supports</p>
      </div>
      <div
        onClick={() => handelNavigation("/blogs")}
        className={`sidebar-menu ${
          activeMenu === "/blogs" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <ImNewspaper className="menuIcon" />
        </span>
        <p className="menu">NEWS/blogs</p>
      </div>
      <div
        onClick={() => handelNavigation("/blog-list")}
        className={`sidebar-menu ${
          activeMenu === "/blog-list" ? "menu-active" : ""
        }`}
      >
        <span className="menu-icon">
          <ImNewspaper className="menuIcon" />
        </span>
        <p className="menu">Blogs List</p>
      </div>

      <div
        onClick={() => handelNavigation("/faq")}
        className={`sidebar-menu ${activeMenu === "/faq" ? "menu-active" : ""}`}
      >
        <span className="menu-icon">
          <FaQuestionCircle className="menuIcon" />
        </span>
        <p className="menu">FAQ</p>
      </div>
      <div onClick={logout} className="sidebar-menu">
        <span className="menu-icon">
          <IoIosLogIn className="menuIcon" />
        </span>
        <p className="menu">Log out</p>
      </div>
    </div>
  );
};

export default DashboardMenus;
