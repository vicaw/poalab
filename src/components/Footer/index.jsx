import React from "react";
import { StyledFooter, Logo } from "./style";
import { ReactComponent as IfrslogoSVG } from "../../assets/images/ifrslogo.svg";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div id="copyright">
        <div id="marca">
          <Logo />
          <h3>
            <b>POA</b>LAB
          </h3>
        </div>
        <div id="endereco">
          <p>R. Cel. Vicente, 281 - Sala 27</p>
          <p>Porto Alegre, RS 90030-041</p>
        </div>
      </div>

      <div id="links">
        <a>Sobre</a>
        <a>Open Day</a>
        <a>Equipamentos</a>
        <a>Utilidades</a>
      </div>

      <div id="contato">
        <div className="contatoItem">
          <MdEmail />
          <p>andre.peres@poa.ifrs.edu.br</p>
        </div>

        <div className="contatoItem">
          <MdPhone />
          <p>(51) 3930-6002</p>
        </div>

        <div className="contatoItem">
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>

      <IfrslogoSVG />
    </StyledFooter>
  );
};

export default Footer;
