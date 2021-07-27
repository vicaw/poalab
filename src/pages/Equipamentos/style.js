import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  justify-content: center;
  height: 100vh;
  color: #808080;
  margin: auto 3.75vw;

  font-family: "Titillium Web", sans-serif;

  & h2 {
    font-size: clamp(2rem, 3.3vw, 3rem);
    margin-bottom: 1rem;
    color: #4a991b;
  }

  & #equipamentos {
    & div {
      text-align: center;
      background: teal;
    }
  }

  & #sliderwrap {
    width: 100%;
    //height: 100%;
    margin: auto;

    .slick-prev:before,
    .slick-next:before {
      color: #4a991b;
    }

    .slick-track {
      display: flex;
    }

    .slick-slide {
      height: auto;
    }

    .slick-slide > div {
      height: 100%;
    }

    .slick-dots li.slick-active button:before {
      opacity: 0.75;
      color: #4a991b;
    }

    .slick-dots li button:before {
      color: #4a991b;
    }

    .slick-dots {
      bottom: -15%;
    }

    & img {
      max-width: 100%;
      max-height: 100%;
    }

    & .slider {
      //height: 100%;
      //max-width: 100%;

      & img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    padding: 2rem;
    gap: 2rem;
    height: fit-content;
    & #sliderwrap {
      .slick-dots {
        bottom: -10%;
      }
    }
  }
`;
