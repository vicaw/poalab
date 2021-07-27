import React, { useState, useEffect } from "react";
import { Section } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cma6040 from "../../assets/images/equipamentos/cma6040.png";
import filabot from "../../assets/images/equipamentos/filabot.png";
import plotterhp from "../../assets/images/equipamentos/plotterhp.png";
import plottersaga from "../../assets/images/equipamentos/plottersaga.png";
import printrbot from "../../assets/images/equipamentos/printrbot.png";
import wanhao from "../../assets/images/equipamentos/wanhao.png";
import EquipItem from "../../components/EquipItem";

const settings = {
  infinite: true,
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  //slidesToScroll: 1,
};

const Equipamentos = () => {
  return (
    <Section id="equipamentos">
      <h2>EQUIPAMENTOS</h2>
      <div id="sliderwrap">
        <Slider {...settings}>
          <EquipItem img={wanhao}>
            <h2>Impressora 3D Wanhao</h2>
            <p>2 Extrusores</p>
            <p>Filamento 1.75mm</p>
            <p>Camada entre 0.1 e 0.5mm</p>
            <p>Área: 225mm x 145mm x 150mm</p>
            <p>Base aquecida</p>
          </EquipItem>

          <EquipItem img={printrbot}>
            <h2>Impressora 3D Printrbot</h2>
            <p>Filamento de 1.75mm</p>
            <p>Resolução de camada entre 0.1 e 0.5mm</p>
            <p>Área de trabalho: 152mm x 152mm x 152mm</p>
          </EquipItem>

          <EquipItem img={cma6040}>
            <h2>Cortadora Laser CMA6040</h2>
            <p>Área de corte de 60cm x 40cm</p>
            <p>Potência do laser: 70-80W</p>
            <p>Espessura do corte: 0-25mm para acrílico</p>
            <p>Precisão: 0.01mm</p>
          </EquipItem>

          <EquipItem img={filabot}>
            <h2>Extrusora de Filamento Filabot WEE</h2>
            <p>Bico de extrusão de 1.75mm</p>
            <p>Adequado para ABS e PLA</p>
            <p>Taxa de extrusão entre 13 e 51 cm por minuto</p>
          </EquipItem>

          <EquipItem img={plottersaga}>
            <h2>Plotter de Recorte SAGA 720i</h2>
            <p>Largura máxima da mídia: 72cm</p>
            <p>Largura máxima de corte: 62cm</p>
            <p>Laser point</p>
            <p>Velocidade: 600mm/s</p>
            <p>Precisão de repetição: 0.082mm</p>
          </EquipItem>

          <EquipItem img={plotterhp}>
            <h2>Plotter de Impressão HP T520</h2>
            <p>Alimentação por rolo ou folha</p>
            <p>Largura de impressão: 61cm</p>
            <p>Espessura: até 11.8 milésimos de polegada</p>
            <p>Resolução de impressão: 2400 x 1200 dpi</p>
          </EquipItem>
        </Slider>
      </div>
    </Section>
  );
};

export default Equipamentos;
