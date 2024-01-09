import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 40px;
`;

export const DirectoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const HeaderContainer = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;

  h3,
  p {
    margin: 5px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @keyframes drop {
    0% {
      transform: translateY(-200px) scaleY(0.9);
      opacity: 0;
    }
    5% {
      opacity: 0.7;
    }
    50% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px) scaleY(0.9);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px) scaleY(0.9);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
    }
  }
`;

export const First = styled.div`
  opacity: 0;
  animation: drop 0.4s linear forwards;
  // margin-left: -20px;
`;

export const Second = styled.div`
  opacity: 0;
  animation: drop 0.4s linear forwards 0.2s;
  // margin-left: 10px;
`;

export const Third = styled.div`
  opacity: 0;
  animation: drop 0.4s linear forwards 0.4s;
  display: block;
  // margin-left: 25%;
`;

export const Fourth = styled.div`
  opacity: 0;
  animation: drop 0.4s linear forwards 0.6s;
  // margin-left: 100px;
`;

export const Fifth = styled.div`
  opacity: 0;
  animation: drop 0.4s linear forwards 0.8s;
  // margin-left: 120px;
`;
