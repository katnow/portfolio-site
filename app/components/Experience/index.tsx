import Position from "@/app/components/Experience/Position";
import styles from './experience.module.scss';

const Experience = () => {
    return <div className={styles.content}>
        <div className={styles.position}>
            <div className={styles.path}></div>
            <Position company="Spinney" dates="march 2023 - august 2024" position="Frontend developer" description="My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time," technologies={['TypeScript', 'JavaScript', 'React', 'Redux', 'CSS', 'SCSS', 'HTML']}  />
        </div>
        <div className={styles.position}>
            <div className={styles.path}></div>
            <Position company="Specprawnik" dates="march 2022 - december 2022" position="Frontend developer"
                      description="My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time,"
                      technologies={['TypeScript', 'JavaScript', 'React', 'Redux', 'CSS', 'SCSS', 'HTML']}/>
        </div>
    </div>
}

export default Experience