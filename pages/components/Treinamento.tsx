// @flow
import * as React from "react";
import Image from "next/image";

import cabelo01 from "../assets/cabelo01.jpg";
import cabelo02 from "../assets/cabelo02.jpg";
import cabelo03 from "../assets/cabelo03.jpg";

const Treinamento = () => {
  return (
    <div id="part2" className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="flex justify-center w-full">
          <h1
            id="kanit"
            className="w-[900px] text-5xl xl:text-5xl md:text-4xl text-center py-10"
          >
            Treinamento{" "}
            <span className="text-[#ff00e5] font-medium">Liso Premium</span>
          </h1>
        </div>
        <h3
          id="kanit"
          className="text-2xl md:text-4xl w-[700px] text-center p-5"
        >
          Aprenda a fazer o verdadeiro Liso espelhado com as misturinhas mágicas
          e fature de 3 a 5 mil reais por mês... mesmo que você seja uma
          iniciante !
        </h3>
        <h3
          id="kanit"
          className="text-2xl md:text-4xl w-[700px] text-center p-5"
        >
          Tenha acesso ao passo a passo que me faz ter lista de espera de
          clientes e melhor sem gastar com produtos caros
        </h3>
      </div>
      {/* <div className="flex justify-center mt-20">
        <h3 id="kanit" className="text-4xl w-[700px] text-center">
          PROGRESSIVA{" "}
        </h3>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-20 md:p-28 gap-12">
        <div>
          <Image src={cabelo01} alt="cabelo01" />
        </div>
        <div>
          <Image src={cabelo02} alt="cabelo01" />
        </div>
        {/* <div>
          <Image src={cabelo03} alt="cabelo01" />
        </div> */}
      </div>
      <div className="flex justify-center pb-20">
        <h3 id="kanit" className="text-2xl md:text-4xl text-center">
          e melhor sem gastar horrores com produtos.
        </h3>
      </div>
    </div>
  );
};

export default Treinamento;
