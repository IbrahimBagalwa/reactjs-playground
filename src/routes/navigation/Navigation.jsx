import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/card-icon/CartIcon";
import { signOutUser } from "../../utils/firebase.util";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { useSelector } from "react-redux";
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.styles";
import { selectCurrentUser } from "../../redux/store/user/user.selector";
import { selectCartIsOpen } from "../../redux/store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartIsOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
