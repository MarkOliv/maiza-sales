// @flow
import * as React from "react";
type Props = {};

import FOTO02 from "../assets/FOTO2.png";
import Image from "next/image";

const ParaQuem = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 id="kanit" className="text-5xl text-center py-10 px-3">
        O Liso Premium é para você
        <br /> <span className="text-[#ff00e5] font-medium">que</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          id="fotoMobile"
          className="flex justify-center items-center md:hidden block"
        >
          <Image src={FOTO02} alt="foto maiza" />
        </div>
        <div id="texto" className="grid grid-cols-1 p-10">
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Fica aí gastando horrores em produtos caros e mesmo assim os seus
            ALISAMENTOS não ficam perfeitos?(Eu passo minha lista secreta de
            fornecedor para você comprar produtos muito bons e baratos )
          </p>
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Não sabe qual o tempo de pausa para cada espessura de fio de cabelo
            ?(Eu te ensino a analisar cada fio e saber qual o tempo para cada
            tipo de cabelo)
          </p>
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Não sabe como não afinar os fios..(Eu te ensino a misturinha
            manipulada pra recuperação)
          </p>
          <div className="flex lg:justify-end justify-center md:p-20">
            <a
              target="_blank"
              href="https://pay.hotmart.com/A69854210Q?checkoutMode=10"
              id="kanit"
              className="rounded-3xl md:px-14 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-4xl text-3xl font-semibold md:mt-3 mt-14 text-center hover:brightness-75"
            >
              EU QUERO
            </a>
          </div>
        </div>
        <div
          id="foto"
          className="flex justify-center items-center md:block hidden"
        >
          <Image src={FOTO02} alt="foto maiza" />
        </div>
      </div>
    </div>
  );
};

export default ParaQuem;
