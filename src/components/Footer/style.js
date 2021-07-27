import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/logowhite.svg";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  //margin-top: clamp(33px, 3.33vw, 48px);
  background: linear-gradient(
    140deg,
    rgb(124 181 90) 0%,
    rgb(135 187 104) 100%
  );
  width: 100%;
  color: white;
  padding: 2.75vw 3.75vw;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #0000004d;

  p {
    margin: 0;
  }

  & .contatoItem {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & #copyright {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    #marca {
      font-family: "Gruppo", cursive;
      display: flex;
      gap: 0.5rem;
      width: 160px;

      h3 {
        font-weight: 500;
        font-size: 1.8rem;
        margin: auto;
      }
    }
  }

  & #links {
    display: flex;
    flex-direction: column;
  }

  & #contato {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div:last-child {
      margin-top: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    gap: 2rem;

    * {
      align-items: center;
    }

    & #links {
      visibility: hidden;
      position: absolute;
    }

    & #contato {
      div:last-child {
        margin-top: 0;
      }
    }
  }
`;

export const Logo = styled(LogoSVG)`
  //width: clamp(17rem, 19.16vw, 23rem);
  fill: white;
`;
