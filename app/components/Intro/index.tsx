import styles from './intro.module.scss';
import {Linkedin} from "../icons";

const Intro  = () => {
    return <div className={styles.intro}>
        <div className={styles.nameGroup}>
            <Linkedin className={styles.linkedin}/>
            <h1 className={styles.name}>Katarzyna Nowogrodzka</h1>
            <h6 className={styles.title}>Frontend Developer</h6>
        </div>
        <p className={styles.description}>Passionate about creating engaging, pixel perfect interfaces</p>
    </div>
}

export default Intro;