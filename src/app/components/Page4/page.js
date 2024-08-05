import React from "react";
import Styles from "./page4.module.css";
import Image from "next/image";
import i2 from "../../assets/i2.png";
import Link from "next/link";

export default function Page4() {
  return (
    <div className={Styles.main}>
      <div className={Styles.heromain}>
        <div className={Styles.section1}>
          <div className={Styles.picbox2}>
            <Image src={i2} alt="" width={490} height={470}></Image>
          </div>
        </div>
        <div className={Styles.hero_content}>
          <h1 className={Styles.hero_content_h1}>
            Watch your progress every day
          </h1>
          <p>
            Save statistics on your achievements, words learned, and mistakes
          </p>
          <Link href={"/Statistics"}>
            <button id="main-btn">
              Statistics
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className={Styles.svg}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
