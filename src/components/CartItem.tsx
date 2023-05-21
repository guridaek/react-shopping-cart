import styled from "styled-components";
import QuantityCounter from "components/QuantityCounter";
import React from "react";
import { useSetRecoilState } from "recoil";
import { productSelector } from "recoil/selector";
import { CartProduct } from "types/domain";
import { useQuantity } from "hooks/useQuantity";

const CartItem = (item: CartProduct) => {
  const setProduct = useSetRecoilState(productSelector(item.id));
  const { changeQuantity } = useQuantity(item.id);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...item,
      isChecked: e.currentTarget.checked,
    });
  };

  const removeItem = () => {
    changeQuantity("0");
  };

  return (
    <Wrapper>
      <input type="checkbox" value={item.id} checked={item.isChecked} onChange={handleCheckbox} />
      <img src={item.product.imageUrl} alt={`${item.product.name} 상품 이미지`} />
      <NameBox>{item.product.name}</NameBox>
      <button onClick={removeItem}>🗑️</button>
      <PriceBox>{(item.product.price * item.quantity).toLocaleString()}원</PriceBox>
      <QuantityCounter itemId={item.product.id} />
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
    top: 6%;
    right: 1%;

    cursor: pointer;
  }

  :last-child {
    align-self: center;

    height: 50%;

    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0;
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

export default React.memo(CartItem);
