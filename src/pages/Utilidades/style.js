import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  justify-content: space-between;
  height: 100vh;
  color: #808080;
  padding: 0 3.75vw;

  font-family: "Titillium Web", sans-serif;

  & h2 {
    font-size: clamp(2rem, 3.3vw, 3rem);
    margin-bottom: 1rem;
    color: #4a991b;
  }

  & .LinkList {
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    margin: auto;
  }

  @media only screen and (max-width: 1023px) {
    gap: 2rem;
    margin-top: 4rem;
  }
`;
