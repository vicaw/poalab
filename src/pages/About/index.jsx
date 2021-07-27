import React, { useState, useEffect } from "react";
import { Section } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from "react-responsive-carousel";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/images/espaco/img1.jpg";
import img2 from "../../assets/images/espaco/img2.jpg";
import img3 from "../../assets/images/espaco/img3.jpg";
import img4 from "../../assets/images/espaco/img4.jpg";
import img5 from "../../assets/images/espaco/img5.jpg";
import img6 from "../../assets/images/espaco/img6.jpg";
import img7 from "../../assets/images/espaco/img7.jpg";
import img8 from "../../assets/images/espaco/img8.jpg";
import img9 from "../../assets/images/espaco/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const About = () => {
  const carouselSettings = {
    showThumbs: false,
    showStatus: false,
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
  };

  const lightboxSettings = {
    buttons: {
      showDownloadButton: false,
    },
  };

  return (
    <Section id="about">
      <content>
        <h2>POALAB</h2>
        <p>
          O POALAB é um laboratório de fabricação digital e está conectado à
          rede mundial de Fab Labs. Opera como um programa de extensão do IFRS
          campus Porto Alegre.
        </p>
        <p>
          Temos como missão popularizar o acesso e letramento na fabricação
          digital, funcionando como uma plataforma de criatividade, aprendizagem
          e invenção.
        </p>
        <p>
          Ser um Fab Lab significa estar conectado a uma comunidade mundial de
          alunos, educadores, técnicos, pesquisadores e inovadores e desenvolver
          atividades dentro da filosofia do conhecimento aberto.
        </p>
      </content>
      <div id="sliderwrap">
        <div id="tes">
          <div className="slider">
            <SRLWrapper options={lightboxSettings}>
              <Carousel {...carouselSettings}>
                {images.map((img, idx) => (
                  <div>
                    <img src={img} alt="Foto do ambiente do Poalab" />
                  </div>
                ))}
              </Carousel>
            </SRLWrapper>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
