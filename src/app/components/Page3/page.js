import React from "react";
import Styles from "./page3.module.css";
import Image from "next/image";
import p2 from "../../assets/image 2.png";
import Link from "next/link";

export default function Page3() {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.heromain}>
          <div className={Styles.hero_content}>
            <h1 className={Styles.hero_content_h1}>Increase your vocabulary</h1>
            <p>Traditional and new effective approaches to word study</p>
            <Link href={"/TextBook"}>
              {" "}
              <button id="main-btn">
                TextBook
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
          <div className={Styles.section1}>
            <div className={Styles.picbox2}>
              <Image src={p2} alt="" width={"auto"} height={"auto"}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
