import styled from "styled-components/macro";
import { CartItem, Checkout } from "./Cart";
import FlatButton from "./FlatButton";
import FlattenLinkButton from "./FlattenLinkButton";
import { useCartContext } from "../context/cart-context";

const CartSection = () => {
  const { cart_items, clearCart } = useCartContext();

  return (
    <Wrapper className="section-center">
      <div className="cart-table-head table-column-grid">
        <p>item</p>
        <p className="head-price">price</p>
        <p>quantity</p>
        <p className="head-subtotal">subtotal</p>
        <p></p>
      </div>
      <hr className="table-top-hr" />
      {cart_items.map((item) => {
        return <CartItem key={item.itemId} {...item} />;
      })}
      <hr className="table-bottom-hr" />
      <div className="shopping-btns-container">
        <FlattenLinkButton
          to="/products"
          css={`
            background-color: var(--clr-primary-5);
            color: var(--clr-white);
          `}
        >
          continue shopping
        </FlattenLinkButton>
        <FlatButton
          css={`
            background-color: var(--clr-black);
            color: var(--clr-white);
          `}
          onClick={() => clearCart()}
        >
          clear shopping cart
        </FlatButton>
      </div>
      <div className="checkout-card-wrapper">
        <Checkout />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  .table-column-grid {
    display: grid;
    grid-template-columns: 200px auto auto;
    place-items: center;
  }

  .cart-table-head {
    p {
      text-transform: capitalize;
      color: var(--clr-grey-6);
      letter-spacing: var(--spacing);
    }
  }
  .head-price,
  .head-subtotal {
    display: none;
  }

  .shopping-btns-container {
    margin: 1.2rem 0 0;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .checkout-card-wrapper {
    margin: 2.5rem 0 3rem;
    display: flex;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 530px) {
    .table-column-grid {
      grid-template-columns: 260px auto auto;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 760px) {
    .table-column-grid {
      grid-template-columns: 260px auto auto auto auto;
      gap: 1rem;
    }
    .head-price,
    .head-subtotal {
      display: block;
    }
  }
`;

export default CartSection;
