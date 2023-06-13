// @flow
import * as React from "react";
type Props = {};

import FOTO3 from "../assets/FOTO3.png";

import SELO from "../assets/SELO.png";
import Image from "next/image";

const Conteudos = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 id="kanit" className="text-3xl text-center py-10">
        O que você vai encontrar <br /> dentro do{" "}
        <span className="text-[#ff00e5] font-medium">Treinamento</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div id="foto" className="flex justify-center items-center ">
          <Image src={FOTO3} alt="foto maiza" />
        </div>

        <div id="texto" className="grid grid-cols-1 p-10">
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • O QUE VAI TE DIFERENCIAR DOS SEUS CONCORRENTES. 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • ANALISE DOS FIOS HIGIENIZAÇÃO DOS FIOS 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • CRISTALIZAÇÃO APLICAÇÃO DO PRODUTO 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • TEMPO DE PAUSA PARA CADA TIPO DE CABELO 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • RETIRADA DO PRODUTO SECAGEM E SECAGEM EXPRESS
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • CHAPINHA CRIATIVA
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • ALISAMENTO NO CABELO TODO
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • RETOQUE DE RAIZ E CRISTALIZAÇÃO
          </p>

          <div className="flex lg:justify-start justify-center p-20">
            <a
              href="https://pay.hotmart.com/A69854210Q"
              id="kanit"
              className="rounded-3xl md:px-14 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-4xl text-3xl font-semibold md:mt-3 mt-14 text-center hover:brightness-75"
            >
              QUERO PARTICIPAR
            </a>
          </div>
        </div>
      </div>
      <div
        id="GARANTIA"
        className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r to-[#B768C3] from-[#FF00E5] py-7 px-7"
      >
        <div className=" flex justify-center items-center">
          <div className="w-[500px]">
            <Image src={SELO} alt="certificado de conclusão" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="text-xl md:text-2xl md:leading-[70px] font-bold my-5 md:text-left text-center">
            Relaxe
            <br />
            <span className="text-3xl md:text-5xl font-bold">
              GARANTIA DE <br />7 DIAS !
            </span>
            <p className="text-xl md:text-2xl font-semibold my-5 md:text-left text-center">
              Fique tranquila! Se não gostar do conteúdo nós devolveremos cada
              centavo! Se por algum motivo você não gostar do treinamento poderá
              solicitar reembolso total do valor do curso a qualquer momento
              dentro do prazo de 7 dias após a compra.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Conteudos;
