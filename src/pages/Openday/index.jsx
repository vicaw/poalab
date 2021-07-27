import React, { useState, useEffect } from "react";
import { Section } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
};

const Openday = () => {
  return (
    <Section id="openday">
      <div id="opendaycover">
        <div id="imgborder">
          <img src="https://www.poalab.net.br/fabbernatives/images/visitas/dep2.jpg" />
        </div>
      </div>
      <content>
        <h2>OPEN DAY</h2>
        <p>
          Os Open Days ocorrem nas sextas-feiras, das 14h às 18h, e são um dos
          requisitos para a existência de um fab lab. Nestes dias, a comunidade
          externa têm a possibilidade de conhecer as ferramentas existentes no
          lab e aprender sobre fabricação digital.
        </p>
        <p>
          Não existe custo para acessar o lab ou utilizar as máquinas e não é
          necessário realizar reservas.
        </p>
        <p>
          Temos material, equipamento, pessoal e disposição para atender a
          todos.
        </p>
        <p>
          O objetivo do lab é o de disseminar conhecimento. Se você não tem
          nenhuma experiência com fabricação digital, o lab foi feito pra você!
        </p>
      </content>
    </Section>
  );
};

export default Openday;
