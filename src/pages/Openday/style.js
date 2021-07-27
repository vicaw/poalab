import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  background: white;
  justify-content: center;
  min-height: 100vh;

  & #opendaycover {
    #imgborder {
      position: relative;
      height: 100%;
      width: 100%;
      ::before {
        //z-index: -1;
        content: ".";
        top: -1%;
        left: -1%;
        position: absolute;
        height: 102%;
        width: 102%;
        background-color: #4a991b;
        background-size: cover;
        background-position: top;
        clip-path: polygon(0 0, 100% 0, 79% 100%, 0% 101%);
      }
    }
    & img {
      max-width: 100%;
      clip-path: polygon(0 0, 100% 0, 79% 100%, 0% 101%);
      display: block;
    }
  }

  & content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: "Titillium Web", sans-serif;
    max-width: 90ch;
    margin: auto 3.75vw;

    & h2 {
      font-size: clamp(2rem, 3.3vw, 3rem);
      margin-top: 0;
      color: #4a991b;
    }
    & p {
      margin: 0;
      font-size: clamp(1.1rem, 1.459vw, 1.3rem);
    }
  }

  @media only screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    margin: 3.75vw;
    margin-top: 4rem;

    & content {
      margin: 0;
      text-align: center;

      & h2 {
        margin: 0;
      }
    }

    & #opendaycover {
      margin: 0;
      border: 4px solid #4a991b;
      #imgborder {
        ::before {
          visibility: hidden;
        }
      }
      & img {
        clip-path: none;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    // padding: 5rem;
  }

  @media only screen and (max-width: 768px) {
    //padding: 2rem;
    // & #openday {
    //   & h2 {
    //     margin: 0;
    //   }
    // }
  }

  @media only screen and (max-width: 549px) {
    //text-align: center;
  }
`;
