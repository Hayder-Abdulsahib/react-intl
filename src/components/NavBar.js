import { Logo, NavItem } from "../styles";

import { FormattedMessage } from "react-intl";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <FormattedMessage id="username" defaultMessage="default message" />
      </Logo>
      <div>
        <NavItem to="/products" className="navbar-brand">
          <FormattedMessage id="products" defaultMessage="default message" />
        </NavItem>
        <NavItem to="/contactus" className="navbar-brand">
          <FormattedMessage id="contactus" defaultMessage="default message" />
        </NavItem>
        <NavItem to="/#" className="navbar-brand">
          <FormattedMessage id="signout" defaultMessage="default message" />
        </NavItem>
      </div>
    </div>
  );
};

export default NavBar;
