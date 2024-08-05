"use Client";
import React from "react";
import styles from "../TextBook/textbook.module.css";
import Image from "next/image";
import t2 from "../assets/t2.png";
import t4 from "../assets/t4.png";
import b2 from "../assets/b2.png";
import p1 from "../assets/p1.png";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import p2 from "../assets/p2.png";
import Link from "next/link";

export default function TextBook() {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Header}>
          <div className={styles.Section1}>
            <div className={styles.Subsection1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
              >
                <path
                  d="M6.66667 23.6667V18.6454L12.08 22.1827C13.2456 22.9442 14.6077 23.3498 16 23.3498C17.3923 23.3498 18.7544 22.9442 19.92 22.1827L25.3333 18.6454V23.6667C25.3333 23.8831 25.2632 24.0936 25.1333 24.2667L25.132 24.268L25.1307 24.2707L25.1267 24.276L25.1147 24.2893L25.0987 24.3107L25.0813 24.3333L24.9667 24.468C24.8321 24.6207 24.6911 24.7675 24.544 24.908C24.1747 25.264 23.624 25.7267 22.8773 26.1853C21.3827 27.1053 19.1187 28 16 28C12.8813 28 10.6187 27.1067 9.12133 26.1853C8.52218 25.8202 7.96349 25.3925 7.45467 24.9093C7.25281 24.7146 7.0627 24.508 6.88533 24.2907L6.87333 24.2773L6.86933 24.2707V24.268C6.73872 24.0947 6.66763 23.8837 6.66667 23.6667ZM29.5467 13.504L18.8267 20.508C17.9862 21.0573 17.004 21.3498 16 21.3498C14.996 21.3498 14.0138 21.0573 13.1733 20.508L4 14.5147V21.6667C4 21.9319 3.89464 22.1863 3.70711 22.3738C3.51957 22.5613 3.26522 22.6667 3 22.6667C2.73478 22.6667 2.48043 22.5613 2.29289 22.3738C2.10536 22.1863 2 21.9319 2 21.6667V13.3333C2 13.216 2.02 13.104 2.05733 13C1.98224 12.7875 1.98116 12.5558 2.05425 12.3426C2.12734 12.1294 2.27032 11.9471 2.46 11.8253L13.212 4.93202C14.0441 4.3987 15.0117 4.11523 16 4.11523C16.9883 4.11523 17.9559 4.3987 18.788 4.93202L29.54 11.8253C29.6804 11.9155 29.7961 12.0394 29.8764 12.1857C29.9566 12.3319 29.9991 12.496 29.9997 12.6629C30.0004 12.8297 29.9593 12.9941 29.8801 13.141C29.801 13.288 29.6864 13.4127 29.5467 13.504Z"
                  fill="black"
                />
              </svg>
              <h3>Textbook</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="32"
                viewBox="0 0 2 32"
                fill="white"
              >
                <path d="M1 0V32" stroke="#E0E0E0" strokeWidth="1.21942" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M12.64 4.62498C10.3819 3.54686 7.22563 3.01873 3 2.99998C2.60148 2.99457 2.21078 3.11078 1.88 3.33311C1.6085 3.51663 1.38624 3.76405 1.2328 4.05362C1.07935 4.34319 0.999407 4.66602 1 4.99373V22.875C1 24.0837 1.86 24.9956 3 24.9956C7.44188 24.9956 11.8975 25.4106 14.5663 27.9331C14.6028 27.9678 14.6486 27.9909 14.6982 27.9998C14.7478 28.0086 14.7988 28.0026 14.8451 27.9826C14.8913 27.9626 14.9306 27.9295 14.9581 27.8874C14.9857 27.8453 15.0002 27.796 15 27.7456V6.67623C15.0001 6.53408 14.9697 6.39356 14.9108 6.26417C14.852 6.13478 14.766 6.01954 14.6588 5.92623C14.0474 5.40363 13.3684 4.96593 12.64 4.62498ZM30.12 3.33123C29.7891 3.10946 29.3983 2.9939 29 2.99998C24.7744 3.01873 21.6181 3.54436 19.36 4.62498C18.6316 4.96531 17.9524 5.40215 17.3406 5.92373C17.2336 6.0172 17.1479 6.13249 17.0891 6.26186C17.0304 6.39122 17 6.53166 17 6.67373V27.7444C17 27.7927 17.0142 27.84 17.041 27.8804C17.0677 27.9207 17.1058 27.9522 17.1504 27.9709C17.195 27.9897 17.2441 27.9949 17.2916 27.9858C17.3392 27.9767 17.3829 27.9538 17.4175 27.92C19.0219 26.3262 21.8375 24.9937 29.0025 24.9944C29.5329 24.9944 30.0416 24.7836 30.4167 24.4086C30.7918 24.0335 31.0025 23.5248 31.0025 22.9944V4.99436C31.0032 4.666 30.9231 4.34251 30.7692 4.05246C30.6153 3.7624 30.3923 3.5147 30.12 3.33123Z"
                  fill="#BABABA"
                />
              </svg>
              <h3 className={styles.text}>Dictionary</h3>
            </div>
            <div className={styles.Subsection2}>
              <div className={styles.picbox1}>
                <Image src={t2} alt="" className={styles.img}></Image>
                <Link href={"/Sprint"}>
                  <button className={styles.btn}>Sprint</button>
                </Link>
              </div>
              <div className={styles.picbox2}>
                <Link href={"/Audiocall"}>
                  <Image src={t4} alt="" className={styles.img1}></Image>
                  <button className={styles.btn1}>Audio-call</button>
                </Link>
              </div>

              <div className={styles.picbox3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="White"
                  className={styles.svg}
                >
                  <path
                    d="M17.449 18.2857L18.124 17.6152C21.247 17.7172 21.295 17.6077 21.4322 17.2867L22.2902 15.198L22.354 15L22.2842 14.8267C22.2475 14.7352 22.1342 14.4622 20.1842 12.603V11.625C22.4342 9.45748 22.3862 9.34648 22.258 9.02923L21.4037 6.91873C21.2755 6.60223 21.2267 6.47848 18.1262 6.56323L17.4512 5.86573C17.5209 4.83831 17.4855 3.80645 17.3455 2.78623L17.2585 2.58898L15.028 1.61398C14.6995 1.46398 14.584 1.40998 12.478 3.70348L11.5315 3.68923C9.36323 1.37473 9.26048 1.41673 8.93573 1.54798L6.86198 2.38648C6.53723 2.51773 6.42248 2.56423 6.54848 5.71423L5.87873 6.38173C2.75723 6.27973 2.70923 6.39073 2.57348 6.71023L1.71398 8.79973L1.64648 8.99998L1.71698 9.17398C1.75373 9.26398 1.86248 9.53398 3.81698 11.3955V12.3705C1.56698 14.538 1.61573 14.649 1.74473 14.967L2.59823 17.0797C2.72873 17.403 2.77523 17.5177 5.87498 17.4367L6.54998 18.138C6.48002 19.1638 6.51445 20.1941 6.65273 21.213L6.73973 21.4117L8.98448 22.3927C9.31073 22.5292 9.42398 22.578 11.524 20.2927L12.4705 20.3047C14.6417 22.6222 14.7527 22.5772 15.07 22.449L17.1392 21.6127C17.4662 21.483 17.5802 21.4372 17.449 18.2857ZM8.55548 13.3927C8.29378 12.7088 8.23989 11.9628 8.4006 11.2483C8.5613 10.5338 8.92943 9.88272 9.4588 9.37669C9.98817 8.87067 10.6552 8.53225 11.3762 8.40391C12.0972 8.27557 12.84 8.36302 13.5115 8.65529C14.1829 8.94756 14.7531 9.43162 15.1505 10.0468C15.5479 10.6619 15.7548 11.3807 15.7452 12.1129C15.7355 12.8452 15.5099 13.5583 15.0965 14.1628C14.6831 14.7673 14.1004 15.2362 13.4215 15.5107C12.4952 15.873 11.4631 15.8535 10.5511 15.4565C9.63917 15.0596 8.9216 14.3175 8.55548 13.3927Z"
                    fill="current color"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.Section2}>
            <div className={styles.bigbox1}>
              <div className={styles.box1}>
                <h3>A1</h3>
                <button className={styles.btn2}>Easy</button>
              </div>
              <div className={styles.box2}>
                <h3 className={styles.text1}>A1</h3>
                <button className={styles.btn3}>Easy</button>
              </div>
              <div className={styles.box3}>
                <h3 className={styles.text1}>B1</h3>
                <button className={styles.btn4}>Medium</button>
              </div>
              <div className={styles.box3}>
                <h3 className={styles.text1}>B2</h3>
                <button className={styles.btn4}>Medium</button>
              </div>
            </div>
            <div className={styles.box4}>
              <Image src={b2} alt="" width={350}></Image>
            </div>
          </div>
          <div className={styles.Section3}>
            <div className={styles.Container1}>
              <div className={styles.Frame1}>
                <Image src={p1} alt="" className={styles.p1}></Image>
                <div className={styles.innerbox}>
                  <div className={styles.Vectorbox1}>
                    <Image src={v1} alt="" className={styles.v1}></Image>
                    <p>124</p>
                  </div>
                  <div className={styles.Vectorbox2}>
                    <Image src={v2} alt="" className={styles.v2}></Image>
                    <p>5</p>
                  </div>
                  <div className={styles.Vectorbox3}>
                    <Image src={v3} alt="" className={styles.v3}></Image>
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className={styles.Frame2}>
                <div className={styles.title}>
                  <div className={styles.titlebox1}>
                    <h1>remark</h1>
                    <h1 className={styles.f2h1}>/</h1>
                    <h1 className={styles.f2h2}>note</h1>
                  </div>
                  <div className={styles.titlebox2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.184 3.6192C19.1558 3.44999 19.0917 3.2888 18.9959 3.14648C18.9001 3.00416 18.7749 2.88403 18.6288 2.79419C18.4827 2.70435 18.319 2.64688 18.1488 2.62567C17.9785 2.60445 17.8057 2.61998 17.642 2.6712L9.24201 5.2956C8.99776 5.37185 8.78428 5.52418 8.63273 5.73035C8.48118 5.93651 8.3995 6.18573 8.39961 6.4416V16.2C7.85897 15.7945 7.19725 15.5835 6.52167 15.601C5.84609 15.6186 5.19622 15.8637 4.67737 16.2967C4.15852 16.7298 3.80107 17.3253 3.66294 17.9868C3.52482 18.6484 3.6141 19.3372 3.91633 19.9416C4.21856 20.5461 4.71603 21.0308 5.32814 21.3172C5.94025 21.6037 6.63114 21.675 7.28887 21.5197C7.9466 21.3645 8.53264 20.9917 8.95203 20.4618C9.37143 19.9318 9.59961 19.2758 9.59961 18.6V10.0416L17.9996 7.416V10.8276C18.4112 10.8636 18.8132 10.9392 19.1996 11.0484V3.816C19.1996 3.7488 19.1936 3.684 19.184 3.6192ZM22.7996 17.4C22.7996 18.8322 22.2307 20.2057 21.218 21.2184C20.2053 22.2311 18.8318 22.8 17.3996 22.8C15.9674 22.8 14.5939 22.2311 13.5812 21.2184C12.5685 20.2057 11.9996 18.8322 11.9996 17.4C11.9996 15.9678 12.5685 14.5943 13.5812 13.5816C14.5939 12.5689 15.9674 12 17.3996 12C18.8318 12 20.2053 12.5689 21.218 13.5816C22.2307 14.5943 22.7996 15.9678 22.7996 17.4ZM20.084 16.878L16.4912 14.898C16.3999 14.8475 16.297 14.8217 16.1927 14.8231C16.0884 14.8245 15.9862 14.8531 15.8963 14.906C15.8064 14.959 15.7319 15.0345 15.6801 15.125C15.6282 15.2156 15.6009 15.3181 15.6008 15.4224V19.3824C15.6007 19.4868 15.6279 19.5895 15.6796 19.6802C15.7314 19.7709 15.8059 19.8466 15.8958 19.8997C15.9857 19.9527 16.088 19.9814 16.1924 19.9829C16.2968 19.9844 16.3998 19.9585 16.4912 19.908L20.084 17.928C20.1778 17.8761 20.256 17.8001 20.3104 17.7077C20.3648 17.6154 20.3935 17.5102 20.3935 17.403C20.3935 17.2958 20.3648 17.1906 20.3104 17.0983C20.256 17.0059 20.1778 16.9299 20.084 16.878Z"
                        fill="#BABABA"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.subtitle}>
                  <h3>[rimɑ́ːrk]</h3>
                  <button className={styles.subtitlebtn}>compound</button>
                </div>
                <div className={styles.subtitletext}>
                  <p>
                    To remark is to say something. - Remarquer, c'est dire
                    quelque chose
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="516"
                    height="2"
                    viewBox="0 0 516 2"
                    fill="none"
                  >
                    <path
                      d="M516 1L-2.38419e-06 0.999977"
                      stroke="#E0E0E0"
                      strokeWidth="1.21942"
                    />
                  </svg>
                </div>
                <div className={styles.subtitletext1}>
                  <p>
                    The teacher remarked on how quickly the students were
                    learning. L'enseignant a noté la rapidité avec laquelle les
                    élèves apprenaient.
                  </p>
                </div>
                <div className={styles.subtitlebtnbox}>
                  <Link href={"/Statistics"}>
                    <button className={styles.subtitlebtn1}>
                      Add to learned
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className={styles.subtitlebtn2}>
                      Remove from dictionary
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.Container2}>
              <div className={styles.Frame3}>
                <Image src={p2} alt="" className={styles.p2}></Image>
                <div className={styles.innerbox1}>
                  <div className={styles.Vectorbox1}>
                    <Image src={v1} alt="" className={styles.v1}></Image>
                    <p>5 encountered</p>
                  </div>
                  <div className={styles.Vectorbox2}>
                    <Image src={v2} alt="" className={styles.v2}></Image>
                    <p>1 learned</p>
                  </div>
                  <div className={styles.Vectorbox3}>
                    <Image src={v3} alt="" className={styles.v3}></Image>
                    <p>0 best series</p>
                  </div>
                </div>
              </div>
              <div className={styles.Frame4}>
                <div className={styles.title}>
                  <div className={styles.titlebox1}>
                    <h1>awful</h1>
                    <h1 className={styles.f2h1}>/</h1>
                    <h1 className={styles.f2h2}>terrible</h1>
                  </div>
                  <div className={styles.titlebox2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.184 3.6192C19.1558 3.44999 19.0917 3.2888 18.9959 3.14648C18.9001 3.00416 18.7749 2.88403 18.6288 2.79419C18.4827 2.70435 18.319 2.64688 18.1488 2.62567C17.9785 2.60445 17.8057 2.61998 17.642 2.6712L9.24201 5.2956C8.99776 5.37185 8.78428 5.52418 8.63273 5.73035C8.48118 5.93651 8.3995 6.18573 8.39961 6.4416V16.2C7.85897 15.7945 7.19725 15.5835 6.52167 15.601C5.84609 15.6186 5.19622 15.8637 4.67737 16.2967C4.15852 16.7298 3.80107 17.3253 3.66294 17.9868C3.52482 18.6484 3.6141 19.3372 3.91633 19.9416C4.21856 20.5461 4.71603 21.0308 5.32814 21.3172C5.94025 21.6037 6.63114 21.675 7.28887 21.5197C7.9466 21.3645 8.53264 20.9917 8.95203 20.4618C9.37143 19.9318 9.59961 19.2758 9.59961 18.6V10.0416L17.9996 7.416V10.8276C18.4112 10.8636 18.8132 10.9392 19.1996 11.0484V3.816C19.1996 3.7488 19.1936 3.684 19.184 3.6192ZM22.7996 17.4C22.7996 18.8322 22.2307 20.2057 21.218 21.2184C20.2053 22.2311 18.8318 22.8 17.3996 22.8C15.9674 22.8 14.5939 22.2311 13.5812 21.2184C12.5685 20.2057 11.9996 18.8322 11.9996 17.4C11.9996 15.9678 12.5685 14.5943 13.5812 13.5816C14.5939 12.5689 15.9674 12 17.3996 12C18.8318 12 20.2053 12.5689 21.218 13.5816C22.2307 14.5943 22.7996 15.9678 22.7996 17.4ZM20.084 16.878L16.4912 14.898C16.3999 14.8475 16.297 14.8217 16.1927 14.8231C16.0884 14.8245 15.9862 14.8531 15.8963 14.906C15.8064 14.959 15.7319 15.0345 15.6801 15.125C15.6282 15.2156 15.6009 15.3181 15.6008 15.4224V19.3824C15.6007 19.4868 15.6279 19.5895 15.6796 19.6802C15.7314 19.7709 15.8059 19.8466 15.8958 19.8997C15.9857 19.9527 16.088 19.9814 16.1924 19.9829C16.2968 19.9844 16.3998 19.9585 16.4912 19.908L20.084 17.928C20.1778 17.8761 20.256 17.8001 20.3104 17.7077C20.3648 17.6154 20.3935 17.5102 20.3935 17.403C20.3935 17.2958 20.3648 17.1906 20.3104 17.0983C20.256 17.0059 20.1778 16.9299 20.084 16.878Z"
                        fill="#BABABA"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.subtitle}>
                  <h3>[ɔ́ːfəl]</h3>
                  <button className={styles.subtitlebtngreen}>learned</button>
                </div>
                <div className={styles.subtitletext}>
                  <p>
                    To remark is to say something. - Remarquer, c'est dire
                    quelque chose
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="516"
                    height="2"
                    viewBox="0 0 516 2"
                    fill="none"
                  >
                    <path
                      d="M516 1L-2.38419e-06 0.999977"
                      stroke="#E0E0E0"
                      strokeWidth="1.21942"
                    />
                  </svg>
                </div>
                <div className={styles.subtitletext1}>
                  <p>
                    The teacher remarked on how quickly the students were
                    learning. L'enseignant a noté la rapidité avec laquelle les
                    élèves apprenaient.
                  </p>
                </div>
                <div className={styles.subtitlebtnbox}>
                  <Link href={"/"}>
                    <button className={styles.subtitlebtn3}>
                      Remove from learned
                    </button>
                  </Link>
                  <Link href={"/Statistics"}>
                    <button className={styles.subtitlebtn4}>
                      Add to dictionary
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.Container1}>
              <div className={styles.Frame1}>
                <Image src={p1} alt="" className={styles.p1}></Image>
                <div className={styles.innerbox}>
                  <div className={styles.Vectorbox1}>
                    <Image src={v1} alt="" className={styles.v1}></Image>
                    <p>124</p>
                  </div>
                  <div className={styles.Vectorbox2}>
                    <Image src={v2} alt="" className={styles.v2}></Image>
                    <p>5</p>
                  </div>
                  <div className={styles.Vectorbox3}>
                    <Image src={v3} alt="" className={styles.v3}></Image>
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className={styles.Frame2}>
                <div className={styles.title}>
                  <div className={styles.titlebox1}>
                    <h1>remark</h1>
                    <h1 className={styles.f2h1}>/</h1>
                    <h1 className={styles.f2h2}>note</h1>
                  </div>
                  <div className={styles.titlebox2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.184 3.6192C19.1558 3.44999 19.0917 3.2888 18.9959 3.14648C18.9001 3.00416 18.7749 2.88403 18.6288 2.79419C18.4827 2.70435 18.319 2.64688 18.1488 2.62567C17.9785 2.60445 17.8057 2.61998 17.642 2.6712L9.24201 5.2956C8.99776 5.37185 8.78428 5.52418 8.63273 5.73035C8.48118 5.93651 8.3995 6.18573 8.39961 6.4416V16.2C7.85897 15.7945 7.19725 15.5835 6.52167 15.601C5.84609 15.6186 5.19622 15.8637 4.67737 16.2967C4.15852 16.7298 3.80107 17.3253 3.66294 17.9868C3.52482 18.6484 3.6141 19.3372 3.91633 19.9416C4.21856 20.5461 4.71603 21.0308 5.32814 21.3172C5.94025 21.6037 6.63114 21.675 7.28887 21.5197C7.9466 21.3645 8.53264 20.9917 8.95203 20.4618C9.37143 19.9318 9.59961 19.2758 9.59961 18.6V10.0416L17.9996 7.416V10.8276C18.4112 10.8636 18.8132 10.9392 19.1996 11.0484V3.816C19.1996 3.7488 19.1936 3.684 19.184 3.6192ZM22.7996 17.4C22.7996 18.8322 22.2307 20.2057 21.218 21.2184C20.2053 22.2311 18.8318 22.8 17.3996 22.8C15.9674 22.8 14.5939 22.2311 13.5812 21.2184C12.5685 20.2057 11.9996 18.8322 11.9996 17.4C11.9996 15.9678 12.5685 14.5943 13.5812 13.5816C14.5939 12.5689 15.9674 12 17.3996 12C18.8318 12 20.2053 12.5689 21.218 13.5816C22.2307 14.5943 22.7996 15.9678 22.7996 17.4ZM20.084 16.878L16.4912 14.898C16.3999 14.8475 16.297 14.8217 16.1927 14.8231C16.0884 14.8245 15.9862 14.8531 15.8963 14.906C15.8064 14.959 15.7319 15.0345 15.6801 15.125C15.6282 15.2156 15.6009 15.3181 15.6008 15.4224V19.3824C15.6007 19.4868 15.6279 19.5895 15.6796 19.6802C15.7314 19.7709 15.8059 19.8466 15.8958 19.8997C15.9857 19.9527 16.088 19.9814 16.1924 19.9829C16.2968 19.9844 16.3998 19.9585 16.4912 19.908L20.084 17.928C20.1778 17.8761 20.256 17.8001 20.3104 17.7077C20.3648 17.6154 20.3935 17.5102 20.3935 17.403C20.3935 17.2958 20.3648 17.1906 20.3104 17.0983C20.256 17.0059 20.1778 16.9299 20.084 16.878Z"
                        fill="#BABABA"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.subtitle}>
                  <h3>[rimɑ́ːrk]</h3>
                  <button className={styles.subtitlebtn}>compound</button>
                </div>
                <div className={styles.subtitletext}>
                  <p>
                    To remark is to say something. - Remarquer, c'est dire
                    quelque chose
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="516"
                    height="2"
                    viewBox="0 0 516 2"
                    fill="none"
                  >
                    <path
                      d="M516 1L-2.38419e-06 0.999977"
                      stroke="#E0E0E0"
                      strokeWidth="1.21942"
                    />
                  </svg>
                </div>
                <div className={styles.subtitletext1}>
                  <p>
                    The teacher remarked on how quickly the students were
                    learning. L'enseignant a noté la rapidité avec laquelle les
                    élèves apprenaient.
                  </p>
                </div>
                <div className={styles.subtitlebtnbox}>
                  <Link href={"/Statistics"}>
                    <button className={styles.subtitlebtn1}>
                      Add to learned
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className={styles.subtitlebtn2}>
                      Remove from dictionary
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.Section4}>
              <div className={styles.pagebtn}>
                <Link href={"/"}>
                  <button className={styles.pagebtn1}>←</button>
                </Link>
                <Link href={"/"}>
                  <button className={styles.pagebtn1}>1</button>
                </Link>
                <Link href={"/TextBook"}>
                  <button className={styles.pagebtn1}>2</button>
                </Link>

                <Link href={"/Statistics"}>
                  <button className={styles.pagebtn1}>3</button>
                </Link>
                <Link href={"/"}>
                  <button className={styles.pagebtn1}>...</button>
                </Link>
                <Link href={"/Sprint"}>
                  <button className={styles.pagebtn1}>27</button>
                </Link>
                <Link href={"/TextBook"}>
                  <button className={styles.pagebtn1}>28</button>
                </Link>
                <Link href={"/Audiocall"}>
                  <button className={styles.pagebtn1}>29</button>
                </Link>
                <Link href={"/Alex"}>
                  <button className={styles.pagebtn1}>→</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
