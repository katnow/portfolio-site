import styles from "./page.module.scss";
import Intro from "@/app/components/Intro";
import Menu from "@/app/components/Menu";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.content}>
            <div className={styles.left}>
                <Intro />
                <Menu />
            </div>
        </div>
    </div>
  );
}
