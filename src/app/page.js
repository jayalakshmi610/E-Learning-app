import { Heropage } from "./components/Hero/Page";
import Page3 from "./components/Page3/page";
import Page4 from "./components/Page4/page";
import Page2 from "./components/page2/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heropage />
      <Page2 />
      <Page3 />
      <Page4 />
    </main>
  );
}
