import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  //flex: 1 0 24rem;
  & .LinkImage {
    height: 6vw;
    width: 6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    // place-items: center;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 1023px) {
    & .LinkImage {
      height: 100px;
      width: 100px;
    }
  }
`;

export const Xisde = styled.div`
  display: block;
  flex: 1 0 0;
  min-height: 0;
  & img {
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
