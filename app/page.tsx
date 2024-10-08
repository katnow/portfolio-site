import styles from "./page.module.scss";
import Intro from "@/app/components/Intro";
import Menu from "@/app/components/Menu";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.content}>
            <div className={styles.left}>
                <Intro />
                <Menu />
            </div>
            <div className={styles.right}>
                <About/>
                <Experience />
                <Projects />
            </div>
        </div>
    </div>
  );
}
