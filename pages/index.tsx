import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Inicio from "./components/Inicio";
import decorativotop from "./assets/decorativo-top.png";
import Sobre from "./components/Sobre";
import Garantia from "./components/Garantia";

export default function Home() {
  return (
    <div>
      <Inicio />
      <Sobre />
      <Garantia />
    </div>
  );
}
