import React, { useState, useEffect } from "react";
import { Section, Logo } from "./style";

const Home = () => {
  return (
    <Section id="inicio">
      <div id="cover">
        <Logo />
        <h1>
          <b>POA</b>LAB
        </h1>
        <h3>Rede brasileira de aprendizagem criativa</h3>
        <a href="#inicio">
          <span />
        </a>
      </div>
    </Section>
  );
};

export default Home;
