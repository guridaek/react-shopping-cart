import styled from "styled-components";
import type { Product } from "types/domain";
import QuantityCounter from "components/QuantityCounter";

const CartItem = ({ id, name, price, imageUrl, quantity }: Product) => {
  return (
    <Wrapper>
      <input type="checkbox" />
      <img src={imageUrl} alt={`${name} 상품 이미지`} />
      <NameBox>{name}</NameBox>
      <button>🗑️</button>
      <PriceBox>{(price * Number(quantity)).toLocaleString()}원</PriceBox>
      <QuantityCounter itemId={id} />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;

  position: relative;

  margin-bottom: 10px;

  border-top: 1.5px solid rgba(204, 204, 204, 1);
  padding: 15px 10px 10px 10px;

  & > img {
    width: 20%;
    border-radius: 5px;
  }
  & > input[type="checkbox"] {
    top: 15px;
    width: 40px;
    height: fit-content;

    transform: scale(1.6);
  }

  & > button {
    position: absolute;
    top: 15px;
    right: 10px;
  }

  :last-child {
    align-self: center;

    height: 50%;

    margin-left: auto;
  }
`;

const NameBox = styled.div`
  width: 190px;
  margin: 15px 0 10px 10px;

  font-size: 16px;
  white-space: nowrap;

  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

const PriceBox = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

  height: fit-content;
  font-size: 16px;
`;

export default CartItem;
