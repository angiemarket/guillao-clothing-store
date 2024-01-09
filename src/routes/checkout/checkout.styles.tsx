import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 40px 0;
  height: 100%;
  overflow-y: scroll;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutGrid = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 49% 49%;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  // width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
