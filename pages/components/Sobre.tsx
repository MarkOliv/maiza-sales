// @flow
import * as React from "react";
type Props = {};
import certificado from "../assets/certificado.png";
import Image from "next/image";

const Sobre = (props: Props) => {
  return (
    <div id="part2" className="container mx-auto">
      <h1 id="kanit" className="text-5xl text-center py-10">
        Mais Sobre o<br /> Treinamento{" "}
        <span className="text-[#ff00e5] font-medium">Liso Premium</span>
      </h1>
      <div className="grid grid-cols-1 grid-rows-3 px-10 my-10">
        <div className="flex flex-wrap md:flex-nowrap my-10 md:justify-start justify-center ">
          <div className="flex justify-center w-full md:w-auto">
            <div className="h-32 w-32 rounded-full bg-white m-5" />
          </div>
          <h1
            id="kanit"
            className="flex justify-center items-center md:text-3xl"
          >
            Você vai aprender a atrair e recuperar <br /> clientes pelo Whatsapp
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap my-10 md:justify-end justify-center ">
          <div className="flex justify-center w-full md:w-auto md:hidden block">
            <div className="h-32 w-32 rounded-full bg-white m-5" />
          </div>
          <h1
            id="kanit"
            className="flex justify-center items-center md:text-3xl"
          >
            Domine o Botox capilar
          </h1>
          <div className="flex justify-center w-full md:w-auto md:block hidden">
            <div className="h-32 w-32 rounded-full bg-white m-5" />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap my-10 md:justify-start justify-center ">
          <div className="flex justify-center w-full md:w-auto">
            <div className="h-32 w-32 rounded-full bg-white m-5" />
          </div>
          <h1
            id="kanit"
            className="flex justify-center items-center md:text-3xl"
          >
            Tenha acesso ao Grupo de alunos com <br />
            suporte personalizado
          </h1>
        </div>
      </div>
      <div
        id="certificado"
        className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#B768C3] to-[#FF00E5] py-7 px-7"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-xl md:text-2xl md:leading-[70px] font-bold my-5 md:text-left text-center">
            Incluso esse Maravilhoso <br />
            <span className="text-3xl md:text-5xl font-bold">
              CERTIFICADO DE <br />
              CONCLUSÃO!
            </span>
          </h1>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-[500px]">
            <Image src={certificado} alt="certificado de conclusão" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
