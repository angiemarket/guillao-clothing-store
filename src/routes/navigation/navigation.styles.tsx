import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const LogoTextContainer = styled.div`
  position: relative;
  bottom: 30px;
  font-family: "Genos", sans-serif;
  cursor: pointer;
`;

export const Glitch = styled.div`
  color: #ffcc00;
  position: relative;
  font-size: 6vw;
  animation: glitch 5s 5s infinite;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 black;
    // background: black;
    overflow: hidden;
    top: 0;
    animation: noise-1 3s linear infinite alternate-reverse,
      glitch 5s 5.05s infinite;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 darkgrey;
    overflow: hidden;
    top: 0;
    animation: noise-2 3s linear infinite alternate-reverse,
      glitch 5s 5s infinite;
  }

  @keyframes glitch {
    1% {
      transform: rotateX(10deg) skewX(90deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }

  @keyframes noise-1 {
    $steps: 30;
    @for $i from 1 through $steps {
      #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
    }
  }

  @keyframes noise-2 {
    $steps: 30;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
    }
  }
`;

export const Glow = styled.div`
  @extend .glitch;
  // text-shadow: 0 0 1000px rgb(223, 191, 191);
  text-shadow: 0 0 1000px lightgrey;
  color: transparent;
  position: absolute;
  top: 0;
`;

export const ScanLines = styled.div`
  overflow: hidden;
  mix-blend-mode: difference;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 0.5%,
      transparent 1%
    );

    animation: fudge 7s ease-in-out alternate infinite;

    @keyframes fudge {
      from {
        transform: translate(0px, 0px);
      }
      to {
        transform: translate(0px, 2%);
      }
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 1rem;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
