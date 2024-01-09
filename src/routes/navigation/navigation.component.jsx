import { Fragment, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  LogoTextContainer,
  Glitch,
  Glow,
  ScanLines,
} from "./navigation.styles";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartIconRef = useRef();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  // const setIsCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !cartIconRef?.current.contains(event.target)
        ) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref]);

    return ref;
  };

  const handleClickOutside = () => {
    setIsCartOpen(false);
  };

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const ref = useOutsideClick(toggleIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoTextContainer onClick={() => navigate("/")}>
          <Glitch data-text="GUILLAO">GUILLAO'</Glitch>
          <Glow>ELISABÉTH</Glow>
          {/* <ScanLines></ScanLines> */}
        </LogoTextContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <div ref={cartIconRef}>
            <CartIcon />
          </div>
        </NavLinks>
        {isCartOpen && (
          <div ref={ref}>
            <CartDropdown />
          </div>
        )}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
