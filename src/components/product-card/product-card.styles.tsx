import styled from "styled-components";

export const ProductCartContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  // height: 350px;
  align-items: center;
  position: relative;
  border: 5px solid #fff;

  img {
    width: 100%;
    // height: 90%;
    height: 350px;
    object-fit: cover;
    // margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const Footer = styled.div`
  width: 100%;
  // height: 10%;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  font-size: 18px;
  color: white;
  background-color: black;
  margin: 0;
  padding: 12px 10px;
`;

export const Name = styled.div`
  width: 90%;
  // margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: 1.2px;
  font-size: 1rem;
`;

export const Price = styled.div`
  width: 10%;
`;
