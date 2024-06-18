import Image from 'next/image'
import styles from "./page.module.css";
import Selfie from "../../public/cropped.webp";
import cpp from "../../public/langs/ISO_C++_Logo.svg";
import py from "../../public/langs/Python-logo-notext.svg";
import ts from "../../public/langs/Typescript.svg";

export default function Home() {
  return (
      <div className={styles.main}>
          <div className={styles.intro}>
              <Image src={Selfie} alt="That's me!" placeholder="blur"></Image>
              <h1>Hi, I'm Somfai Máté</h1>
          </div>
          <div className={styles.about}>
              <p>I'm an amateur programmer studying at  <a href="http://web.lovassy.hu/">Lovassy László High School</a> in Veszprém.</p>
              <p>I began programming when I was 12, but I didn't really get into it until recently.</p>
          </div>
          <div className={styles.languages}>
              <h1>Expertise in these languages:</h1>
              <div className={styles.tiles}>
                  <Image className={styles.tile} src={cpp} alt="C++"></Image>
                  <Image className={styles.tile} src={py} alt="Python"></Image>
                  <Image className={styles.tile} src={ts} alt="Typescript"></Image>
              </div>
          </div>
      </div>
  );
}