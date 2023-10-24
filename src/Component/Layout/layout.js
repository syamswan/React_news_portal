import { React } from "react";
import Logo from "../../Images/Logo.png";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const layout = () => {

  const nowDateTime = {
    curDT: new Date().toLocaleString(),
  };

  return (
    <>
      <nav>
        <div id="topnav">
          <div id="date" className="topsidebars">
            {nowDateTime.curDT}
          </div>
          <img src={Logo} alt="logo" />
          <div className="topsidebars"> Weather 20degree</div>
        </div>

        <ul className="listNav">
          <li>
            <Link to="/">India</Link>
          </li>
          <li>
            <Link to="/world">World</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/politics">Politics</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default layout;
