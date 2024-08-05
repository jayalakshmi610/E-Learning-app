"use Client";
import React from "react";
import Styles from "./Page2.module.css";
import Image from "next/image";
import g1 from "../../assets/image 8.png";
import f3 from "../../assets/Frame 3.png";
import shoe from "../../assets/image 10.png";
import mic from "../../assets/image 11.png";
import f6 from "../../assets/Frame 6.png";
import Link from "next/link";

export default function Page2() {
  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <div className={Styles.section1}>
          <Image
            src={g1}
            alt=""
            width={420}
            height={470}
            placeholder="blur"
            className={Styles.img}
          ></Image>
        </div>
        <div className={Styles.section2}>
          <h1 className={Styles.box1}>Learn a language in a playful way</h1>
          <p className={Styles.box2}>
            Make learning words more fun with mini-games
          </p>
          <div className={Styles.footer}>
            <div className={Styles.section2_footer1}>
              <Link href={"/Sprint"}>
                <Image
                  src={shoe}
                  alt=""
                  width={149}
                  className={Styles.img1}
                ></Image>
              </Link>
              <Image
                src={f3}
                alt=""
                width={179}
                className={Styles.img2}
              ></Image>
            </div>
            <div className={Styles.section2_footer2}>
              <Link href={"/Audiocall"}>
                <Image
                  src={mic}
                  alt=""
                  width={142}
                  height={140}
                  className={Styles.img3}
                ></Image>
                <Image
                  src={f6}
                  alt=""
                  width={189}
                  className={Styles.img4}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
