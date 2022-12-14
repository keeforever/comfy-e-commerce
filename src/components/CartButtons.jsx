import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../context/cart-context";
import { useUserContext } from "../context/user-context";

const CartButtons = ({ closeSidebar }) => {
  const { cart_items } = useCartContext();
  const { isAuthenticated } = useUserContext();
  const { loginWithRedirect, logout } = useAuth0();

  const cartItemCount = cart_items.reduce(
    (total, { selectedQuantity }) => total + selectedQuantity,
    0
  );

  return (
    <Wrapper className="cart-btn-container" cartItemCount={cartItemCount}>
      <Link to="cart" className="nav-btn cart-btn " onClick={closeSidebar}>
        Cart
        <BsFillCartCheckFill className="icon" />
      </Link>
      {!isAuthenticated ? (
        <button
          className="nav-btn"
          onClick={() => {
            loginWithRedirect();
            closeSidebar();
          }}
        >
          Login
          <RiLoginBoxFill className="icon" />
        </button>
      ) : (
        <button
          className="nav-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            closeSidebar();
          }}
        >
          Logout
          <RiLogoutBoxFill className="icon" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-btn {
    margin-right: 1.6rem;
    background-color: transparent;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-2);

    .icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .cart-btn {
    position: relative;

    /* cart items count */
    &::before {
      padding: 0.25rem;
      position: absolute;
      right: -0.8rem;
      top: -0.8rem;
      content: "${({ cartItemCount }) => cartItemCount}";
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--clr-primary-5);
      border-radius: 50%;

      display: grid;
      place-content: center;

      font-size: 0.7rem;
      font-weight: 700;
      color: var(--clr-white);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
export default CartButtons;
