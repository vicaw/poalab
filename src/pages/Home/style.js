import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import bgimg from "../../assets/images/PLbackground.jpg";

export const Section = styled.section`
  background: url(${bgimg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  color: #fefefe;

  & #cover {
    background: #0f0f0feb;
    height: 100%;
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Gruppo", cursive;
    animation: fadein 1.5s forwards;

    & h1 {
      font-size: clamp(3rem, 5.55vw, 5rem);
      margin: 0;
      font-weight: 500;
    }

    & h3 {
      font-family: "Tajawal", sans-serif;
      font-size: 1.5em;
      font-weight: 400;
      text-align: center;
    }

    & a {
      //position: absolute;
      //bottom: 0;
    }

    & a span {
      position: absolute;
      bottom: 10%;
      left: 50%;
      width: 24px;
      height: 24px;
      margin-left: -12px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: rotate(-45deg);
      animation: sdb05 1.5s infinite;
      box-sizing: border-box;
    }

    @keyframes sdb05 {
      0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
      }
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1023px) {
    scroll-snap-align: start;
  }
`;

export const Logo = styled(LogoSVG)`
  width: clamp(17rem, 19.16vw, 23rem);
`;
