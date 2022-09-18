import React from "react";
import styled, { css } from "styled-components/macro";
import ProductQuantity from "../ProductQuantity";
import { MdDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <Wrapper className="table-column-grid">
      <div className="product">
        <img
          src={
            "data:image/png;base64,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"
          }
          alt=""
        />
        <div>
          <h5 className="product-name">title</h5>
          <div className="product-color">
            <p>color :</p>
            <span></span>
          </div>
          <p className="product-price-760">$500</p>
        </div>
      </div>
      <p className="product-price">$500</p>
      <ProductQuantity />
      <p className="product-subtotal">$40000</p>
      <div className="cart-delete">
        <button className="cart-delete-btn">
          <MdDelete className="icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
  }
  margin: 1rem 0;

  .product {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 100px;
      height: 75px;
      border-radius: var(--radius);
    }
  }

  .product-name {
    margin: 0;
    white-space: nowrap;
  }

  .product-color {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      white-space: nowrap;
      margin: 0;
    }

    span {
      width: 1rem;
      height: 1rem;
      border-radius: var(--radius);
      background-color: red;
    }
  }

  .product-price {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-6);
  }

  .product-quantity {
    font-size: 1.6rem;
  }
  .quantity-btn {
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }

  .product-subtotal {
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
  }

  .cart-delete-btn {
    background: var(--clr-red-light);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--radius);
    display: grid;
    place-content: center;

    .icon {
      width: 1rem;
      height: 1rem;
      color: var(--clr-white);
    }
  }

  .product-price-760 {
    display: none;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-6);
  }

  @media screen and (max-width: 760px) {
    .product-price-760 {
      display: block;
    }
    .product-price {
      display: none;
    }
    .product-quantity {
      font-size: 1.3rem;
    }
    .quantity-btn {
      .icon {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    .product-subtotal {
      display: none;
    }
  }
`;

export default CartItem;