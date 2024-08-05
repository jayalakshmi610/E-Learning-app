import React from "react";
import Styles from "./statistics.module.css";
import Image from "next/image";
import h1 from "../assets/h1.png";

export default function Statistics() {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.Section1}>
          <h3>For the day</h3>
          <div className={Styles.Subsection1}>
            <Image
              src={h1}
              alt=""
              width={860}
              height={500}
              className={Styles.img}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
