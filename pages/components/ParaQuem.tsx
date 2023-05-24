// @flow
import * as React from "react";
type Props = {};

import FOTO02 from "../assets/FOTO2.png";
import Image from "next/image";

const ParaQuem = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 id="kanit" className="text-5xl text-center py-10">
        Para quem é o<br />{" "}
        <span className="text-[#ff00e5] font-medium">Curso</span>
      </h1>

      <div className="grid grid-cols-2">
        <div id="texto" className="grid grid-cols-1 p-10">
          <p id="kanit" className="text-2xl text-right">
            Cabelereira iniciantes Quer aprender da maneira certa a criar o LISO
            PREMIUN em qualquer cabelo...
          </p>
          <p id="kanit" className="text-2xl text-right">
            Deseja faturar mais de $3.000.00 sendo Especialista em Alisamento
            com pouco investimento..
          </p>
          <p id="kanit" className="text-2xl text-right">
            Amaria ter seu próprio Salão de Beleza e ser referência
          </p>
        </div>
        <div id="foto" className="flex justify-center items-center">
          <Image src={FOTO02} alt="foto maiza" />
        </div>
      </div>
    </div>
  );
};

export default ParaQuem;
