import React from "react";
import Styles from "./sprint.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import E1 from "../assets/E1.png";

export default function Sprint() {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.Section1}>
          <div className={Styles.Frame1}>
            <Image
              src={s1}
              alt=""
              width={350}
              height={400}
              className={Styles.img}
              priority
            ></Image>
          </div>
          <div className={Styles.SubFrame1}>
            <Image src={E1} alt="" width={120}></Image>
          </div>
          <div className={Styles.Frame2}>
            <div className={Styles.title}>
              <div className={Styles.titlebox1}>
                <h1>Sprint</h1>
                <button className={Styles.btn}>speed task</button>
              </div>
            </div>
            <div className={Styles.subtitle}>
              <p>
                Trains the skill of fast translation. You have to choose if the
                translation corresponds to the suggested word.
              </p>
              <p className={Styles.subtitletext}>Choose a level:</p>
              <div className={Styles.levelbtn}>
                <button className={Styles.btn1}>A1</button>
                <button className={Styles.btn2}>A2</button>
                <button className={Styles.btn3}>B1</button>
                <button className={Styles.btn4}>B2</button>
                <button className={Styles.btn5}>C1</button>
                <button className={Styles.btn6}>C2</button>
              </div>
              <button className={Styles.subtitlebtngreen}>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
