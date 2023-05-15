import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Inicio from "./components/Inicio";
import decorativotop from "./assets/decorativo-top.png";

export default function Home() {
  return (
    <div>
      <Inicio />
    </div>
  );
}
