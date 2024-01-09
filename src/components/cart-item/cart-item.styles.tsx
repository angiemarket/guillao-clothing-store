import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 20px;

  div {
    font-size: 16px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div`
  font-weight: bold;
`;
