import { NavLink } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import "../styles/navbar.scss";

export const NavbarLink = ({ linkURL, linkNum, linkName }) => {
  const windowWidth = useWindowWidth();
  const tabletWidth = 768;
  const mobileWidth = 480;

  return (
    <NavLink to={linkURL} className="navbar-link active">
      <span
        className={
          windowWidth > tabletWidth || windowWidth < mobileWidth
            ? "bold"
            : "hide"
        }
      >
        {linkNum}
      </span>
      {linkName}
    </NavLink>
  );
};
