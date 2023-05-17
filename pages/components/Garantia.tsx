// @flow
import * as React from "react";
type Props = {};

import SELO from "../assets/SELO.png";
import Image from "next/image";

const Garantia = (props: Props) => {
  return (
    <div id="part3" className="container mx-auto">
      <div className="flex justify-center py-10 px-20">
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-[#DE80EC] to-[#FF00E5] md:rounded-[150px] rounded-[70px] py-32 px-20 mt-20 md:mt-52">
          <div className="flex justify-center items-center w-52 md:w-auto">
            {" "}
            <Image src={SELO} alt="" />
          </div>
          <div>
            <h1
              id="kanit"
              className="text-3xl md:text-7xl font-semibold my-10 md:text-left text-center"
            >
              GARANTIA DE <br /> 7 DIAS
            </h1>
            <p
              id="kanit"
              className="font-light	md:text-3xl w-auto md:w-[600px] md:leading-[50px] md:text-left text-center text-xl"
            >
              Fique tranquila! Se não gostar do conteúdo nós devolveremos cada
              centavo! Se por algum motivo você não gostar do treinamento poderá
              solicitar reembolso total do valor do curso a qualquer momento
              (dentro do prazo de 7 dias após a compra).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Garantia;
