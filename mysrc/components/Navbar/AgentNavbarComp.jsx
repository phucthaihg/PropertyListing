
import { Link,useLocation } from "react-router-dom";
import MyAccountComp from "./MyAccountComp";

const AgentNavbarComp = ({ float = "" }) => {

  const { pathname } = useLocation()

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >


      <li className="last">
        <Link
          to="/my-dashboard"
          className={pathname === "/my-dashboard" ? "ui-active" : undefined}
        >
          Dashboard
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <img
             
              className="rounded-circle"
              src="/assets/images/team/e1.png"
              alt="e1.png"
            />
            <span className="dn-1199 ms-1">Ali Tufan</span>
          </a>
          <div className="dropdown-menu">
            <MyAccountComp />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link to="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Create Listing</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default AgentNavbarComp;
