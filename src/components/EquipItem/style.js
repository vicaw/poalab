import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  background: white;
  justify-content: center;
  height: 100%;

  & #opendaycover {
    height: 100%;
    width: 100%;
    #imgborder {
      position: relative;
      display: grid;
      height: 100%;
      width: 100%;
      ::before {
        //z-index: 0;
        content: ".";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #4a991b85;
        background-size: cover;
        background-position: top;
        //clip-path: polygon(25% 0%, 93% 0%, 75% 100%, 7% 100%);
        clip-path: polygon(25% 0%, 95% 0%, 75% 100%, 5% 100%);
        //clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
    }
    & img {
      max-width: 50%;
      margin: auto;
      display: block;
      position: relative;
      z-index: 1;
      padding: 10px;
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    }
  }

  & content {
    display: flex;
    flex-direction: column;
    //gap: 1rem;
    font-family: "Titillium Web", sans-serif;
    max-width: 90ch;
    width: fit-content;
    margin: auto;

    & h2 {
      font-size: clamp(2rem, 3.3vw, 3rem);
      margin-top: 0;
      color: #4a991b;
    }
    & p {
      margin: 0;
      font-size: clamp(1.1rem, 1.33vw, 1.6rem);
    }
  }

  @media only screen and (max-width: 639px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    //gap: 2rem;
    //margin: 3.75vw;
    // margin-top: 4rem;

    & content {
      margin: 0;
      text-align: center;

      & h2 {
        margin: 0;
      }
    }

    & #opendaycover {
      //margin: 0;
      //border: 4px solid #4a991b;
      #imgborder {
        ::before {
          //visibility: hidden;
        }
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
