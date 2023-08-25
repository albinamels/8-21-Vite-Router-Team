import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export const NavComponent = () => {
  return (
    <Nav>
      <NavItem>
        {/* <Route path="/" element={<Homepage />} /> 
        link to path, that matches and renders <Homepage/>*/}
        <Link to="/">
          <NavLink>Homepage</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contacts">
          <NavLink>Contacts</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/team">
          <NavLink>Our Team</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
};
