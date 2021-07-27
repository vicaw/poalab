import React, { useState, useEffect } from "react";
import { Section } from "./style";
import wanhao from "../../assets/images/equipamentos/wanhao.png";

const EquipItem = (props) => {
  return (
    <Section id="openday">
      <div id="opendaycover">
        <div id="imgborder">
          <img src={props.img} />
        </div>
      </div>
      <content>{props.children}</content>
    </Section>
  );
};

export default EquipItem;
