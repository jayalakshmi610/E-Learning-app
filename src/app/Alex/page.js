import React from "react";
import Styles from "./user.module.css";
import Image from "next/image";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";

export default function Alex() {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.frame1}>
          <div className={Styles.Section1}>
            <Image
              src={a1}
              alt="img"
              width={"auto"}
              height={"auto"}
              priority
            ></Image>
          </div>
          <div className={Styles.Section2}>
            <div className={Styles.titlebox1}>
              <h1>Alex</h1>
              <button className={Styles.btn}>github</button>
            </div>
            <div className={Styles.subtitle}>
              <p>
                Made design, api queries, statistics, sprint game, did some
                layout and supervised development.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.frame2}>
          <div className={Styles.Section1}>
            <Image
              src={a2}
              alt=""
              className={Styles.img}
              width={"auto"}
              height={"auto"}
            ></Image>
          </div>
          <div className={Styles.Section2}>
            <div className={Styles.titlebox1}>
              <h1>Gabriel</h1>
              <button className={Styles.btn}>github</button>
            </div>
            <div className={Styles.subtitle}>
              <p>
                Authorization / registration module, Audio Challenge game,
                collection of statistics, routing, typing of the studied words.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.frame3}>
          <div className={Styles.Section1}>
            <Image src={a3} alt="" width={"auto"} height={"auto"}></Image>{" "}
          </div>
          <div className={Styles.Section2}>
            <div className={Styles.titlebox1}>
              <h1>Marcus</h1>
              <button className={Styles.btn}>github</button>
            </div>
            <div className={Styles.subtitle}>
              <p>
                Made the application home page, e-textbook, layout, and
                adaptive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
