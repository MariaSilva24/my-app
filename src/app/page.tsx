import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello, Next.js </h1>
      <h2> title 2 </h2>
      <h3> title 3 </h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
