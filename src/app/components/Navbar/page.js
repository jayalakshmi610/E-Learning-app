"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const Togglesidebar = () => {
    setSidebar(!sidebar);
    console.log(`I am toggling ${sidebar}`);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo_group}>
          <div>
            <h1 className={styles.logo}>
              <a href="/">GlobalTalk</a>
            </h1>
          </div>
          <div>
            <ul className={styles.list}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/TextBook">TextBook</a>
              </li>
              <li>
                <a href="/Statistics">Statistics</a>
              </li>
              <li>
                <a href="/Sprint" className={styles.gamedrop}>
                  Games
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M3.81213 6.60889L7.27431 10.0713L10.7367 6.60889"
                      stroke="#757575"
                      strokeWidth="1.6"
                    />
                  </svg>
                </a>
                <ul className={styles.dropdown_content}>
                  <li>
                    <a href="/Sprint">Sprint</a>
                  </li>
                  <li>
                    <a href="/Audio-call">Audio-call</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.btngroup}>
          <div className={styles.usertag}>
            <div className={styles.avatar_tex}>A</div>
            <h4>
              <a href="/Alex">Alex</a>
            </h4>
          </div>
          <h3>
            <a href="/Alex">Sign up</a>
          </h3>
        </div>
      </nav>
      <div className={styles.mobilenavbar}>
        <div className={styles.mobileheader}>
          <div className={styles.frame1}>
            <h2>Kubic </h2>
            <div className={styles.svgbox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="19"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M0.95813 5.21463H3.36586V8.74878H0.95813V5.21463Z"
                  fill="black"
                />
                <path
                  d="M5.77358 2.85854H8.18131V8.74878H5.77358V2.85854Z"
                  fill="black"
                />
                <path
                  d="M10.589 0.502441H12.9968V8.74878H10.589V0.502441Z"
                  fill="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="29"
                viewBox="0 0 3 11"
                fill="none"
              >
                <path
                  d="M0.315796 0.25293H2.72352V10.7488H0.315796V0.25293Z"
                  fill="#CBCBCB"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="49"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M11.0467 10.2657L9.34412 11.915L7.64164 10.2657C8.58194 9.35484 10.1065 9.35484 11.0467 10.2657Z"
                  fill="black"
                />
                <path
                  d="M14.4516 6.96719C11.6308 4.2346 7.0574 4.2346 4.23651 6.96719L5.93907 8.61645C7.81959 6.79473 10.8686 6.79473 12.7492 8.61645L14.4516 6.96719Z"
                  fill="black"
                />
                <path
                  d="M17.8567 3.66866C13.1554 -0.885648 5.53296 -0.885648 0.831543 3.66866L2.5341 5.31794C6.29522 1.67447 12.3931 1.67447 16.1543 5.31794L17.8567 3.66866Z"
                  fill="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="29"
                viewBox="0 0 25 11"
                fill="none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="11"
                  viewBox="0 0 12 7"
                  fill="none"
                >
                  <path
                    d="M0.330444 1.68147C0.330444 1.03085 0.869432 0.503418 1.53431 0.503418H9.96135C10.6262 0.503418 11.1652 1.03085 11.1652 1.68147V5.21561C11.1652 5.86623 10.6262 6.39366 9.96135 6.39366H1.53431C0.869432 6.39366 0.330444 5.86623 0.330444 5.21561V1.68147Z"
                    fill="black"
                  />
                </svg>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.53432 0.147339C2.53969 0.147339 0.922729 1.72962 0.922729 3.68148V7.21563C0.922729 9.16749 2.53969 10.7498 4.53432 10.7498H18.9807C20.9753 10.7498 22.5923 9.16749 22.5923 7.21563V3.68148C22.5923 1.72962 20.9753 0.147339 18.9807 0.147339H4.53432ZM4.53432 1.32539C3.20459 1.32539 2.12659 2.38025 2.12659 3.68148V7.21563C2.12659 8.51686 3.20459 9.57172 4.53432 9.57172H18.9807C20.3104 9.57172 21.3884 8.51686 21.3884 7.21563V3.68148C21.3884 2.38025 20.3104 1.32539 18.9807 1.32539H4.53432Z"
                  fill="#959595"
                />
                <path
                  d="M21.3884 3.68148H23.1942C24.1915 3.68148 25 4.47263 25 5.44855C25 6.42448 24.1915 7.21563 23.1942 7.21563H21.3884V3.68148Z"
                  fill="#959595"
                />
              </svg>
            </div>
          </div>
          <div className={styles.frame2}>
            <div className={styles.frame2head}>
              <h4>A</h4>
              <h1 className={styles.frame2content}>A</h1>
            </div>
            <div className={styles.frame2body}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="23"
                viewBox="0 0 11 13"
                fill="none"
                className={styles.lock}
              >
                <path
                  d="M10.5 6.20216V12.4394C10.5 12.8131 10.3167 13 9.95017 13H1.04983C0.683276 13 0.5 12.8131 0.5 12.4394V6.20216C0.5 6.08535 0.517182 5.98899 0.551546 5.91307C0.585911 5.83715 0.626002 5.77875 0.671821 5.73787C0.71764 5.69699 0.786369 5.66779 0.878007 5.65027C0.969645 5.63275 1.0441 5.62107 1.10137 5.61523C1.15865 5.60939 1.24742 5.60939 1.3677 5.61523C1.48797 5.62107 1.57102 5.62399 1.61684 5.62399V3.39892H1.63402C1.73711 2.38275 2.16094 1.56222 2.9055 0.937331C3.65006 0.312444 4.52635 0 5.53436 0C6.54238 0 7.40722 0.365004 8.12887 1.09501C8.85052 1.82502 9.25716 2.70979 9.3488 3.74933H9.36598L9.40034 5.62399C9.44616 5.62399 9.52921 5.62107 9.64948 5.61523C9.76976 5.60939 9.85567 5.60939 9.90722 5.61523C9.95876 5.62107 10.0332 5.63275 10.1306 5.65027C10.2279 5.66779 10.2967 5.69699 10.3368 5.73787C10.3769 5.77875 10.4141 5.83715 10.4485 5.91307C10.4828 5.98899 10.5 6.08535 10.5 6.20216ZM7.73368 3.36388C7.73368 2.76819 7.52176 2.33603 7.09794 2.06739C6.67411 1.79874 6.15292 1.66442 5.53436 1.66442C4.92726 1.66442 4.40034 1.81334 3.95361 2.11119C3.50687 2.40903 3.28351 2.8558 3.28351 3.45148V5.62399H7.73368V3.36388Z"
                  fill="black"
                />
              </svg>
              <p className={styles.frame2text}>
                <a href="/">globaltalk.com</a>
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="39"
              viewBox="0 0 18 19"
              fill="none"
              className={styles.refresh}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.38525 15.9988C5.79857 15.9328 2.93583 13.0495 3.00109 9.57136C3.06461 6.12397 5.51578 3.53997 9.0607 3.56021L9.0607 2.14324C9.25212 1.95225 9.82293 1.95225 10.0144 2.14324L11.5441 3.82513C11.5899 3.86994 11.6263 3.92361 11.6512 3.98296C11.6761 4.0423 11.6889 4.10611 11.6889 4.17057C11.6889 4.23503 11.6761 4.29883 11.6512 4.35818C11.6263 4.41753 11.5899 4.4712 11.5441 4.51601L10.0144 6.20582C9.82293 6.39856 9.25212 6.39856 9.06069 6.20582L9.0607 4.78356C6.15619 4.76244 4.23581 6.77085 4.18447 9.59424C4.13053 12.4388 6.47292 14.7974 9.40701 14.8529C12.2976 14.9075 14.6948 12.701 14.8157 9.91284L16 9.91284C15.8791 13.3435 12.9363 16.0657 9.38525 15.9988Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={styles.description}>
          <button onClick={Togglesidebar} className={styles.hamburger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 7L22 7"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
              <path
                d="M2 12.5L16 12.5"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
              <path
                d="M2 18L8 18"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
            </svg>
          </button>
          <div>
            <h1 className={styles.logo}>
              {" "}
              <a href="/">GlobalTalk</a>
            </h1>
          </div>
          <div className={styles.btngroup}>
            <div className={styles.usertag}>
              <div className={styles.avatar_text}>
                <a href="/Alex">A</a>
              </div>
              <h4 className={styles.usertag_h4}>
                <Link href="/Alex">
                  Alex
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M3.81213 6.60889L7.27431 10.0713L10.7367 6.60889"
                      stroke="#757575"
                      strokeWidth="1.6"
                    />
                  </svg>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={`${!sidebar ? styles.sidebar : styles.open}`}>
        <button className={styles.closebtn} onClick={Togglesidebar}>
          X
        </button>
        <ul className={styles.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/TextBook">TextBook</a>
          </li>
          <li>
            <a href="/Statistics">Statistics</a>
          </li>
          <li>
            <a href="/Audiocall" className={styles.gamedrop}>
              Games
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M3.81213 6.60889L7.27431 10.0713L10.7367 6.60889"
                  stroke="#757575"
                  strokeWidth="1.6"
                />
              </svg>
            </a>
            <ul className={styles.dropdown_content}>
              <li>
                <a href="/Sprint">Sprint</a>
              </li>
              <li>
                <a href="/Audiocall">Audio-call</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
