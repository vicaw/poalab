import React, { useState, useEffect } from "react";
import { Section } from "./style";
import Footer from "../../components/Footer";
import LinkItem from "../../components/LinkItem";

import Impressao3D from "../../assets/images/links/Pilha3.png";
import Thingiverse from "../../assets/images/links/thingiverse.png";
import Instructables from "../../assets/images/links/InstructablesRobot.png";
import Opendesk from "../../assets/images/links/opendesk.png";
import FabAcademy from "../../assets/images/links/fabacademy.png";
import FabFoundation from "../../assets/images/links/fabfoundation.png";
import FabCity from "../../assets/images/links/fabcity.png";
import MakeMagazine from "../../assets/images/links/make.png";
import Tinkercad from "../../assets/images/links/tinkercad.png";
import Inkscape from "../../assets/images/links/inkscape.png";
import MakerCase from "../../assets/images/links/makercase.png";
import RBAC from "../../assets/images/links/rbac.png";
import MakePoa from "../../assets/images/links/makepoa.png";
import NativosFabbers from "../../assets/images/links/nativosfabbers.png";

const Utilidades = () => {
  return (
    <Section id="Utilidades">
      <h2>LINKS ÚTEIS</h2>
      <div className="LinkList">
        <LinkItem
          name="Impressão 3D"
          img={Impressao3D}
          link="https://cta-ifrs.github.io/Text2Braille3d/"
        />

        <LinkItem
          name="Thingiverse"
          img={Thingiverse}
          link="https://www.thingiverse.com/"
        />

        <LinkItem
          name="Instructables"
          img={Instructables}
          link="https://www.instructables.com/"
        />

        <LinkItem
          name="Opendesk"
          img={Opendesk}
          link="https://www.opendesk.cc/"
        />

        <LinkItem
          name="Fab Academy"
          img={FabAcademy}
          link="http://fabacademy.org/"
        />

        <LinkItem
          name="Fab Foundation"
          img={FabFoundation}
          link="https://fabfoundation.org/"
        />

        <LinkItem name="Fab City" img={FabCity} link="https://fab.city/" />

        <LinkItem
          name="Make Magazine"
          img={MakeMagazine}
          link="https://makezine.com/"
        />

        <LinkItem
          name="Tinkercad"
          img={Tinkercad}
          link="https://www.tinkercad.com/"
        />

        <LinkItem
          name="Inkscape"
          img={Inkscape}
          link="https://inkscape.org/pt-br/"
        />

        <LinkItem
          name="MakerCase"
          img={MakerCase}
          link="https://www.makercase.com/"
        />

        <LinkItem
          name="RBAC"
          img={RBAC}
          link="https://aprendizagemcriativa.org/pt-br"
        />

        <LinkItem
          name="POA Mini Maker Faire"
          img={MakePoa}
          link="https://portoalegre.makerfaire.com/"
        />

        <LinkItem
          name="Nativos Fabbers"
          img={NativosFabbers}
          link="https://poalab.net.br/fabbernatives/"
        />
      </div>

      <Footer />
    </Section>
  );
};

export default Utilidades;
