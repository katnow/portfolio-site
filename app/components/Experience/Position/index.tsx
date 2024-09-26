import styles from './position.module.scss';
import TechTile from "@/app/components/TechTile";

interface Props {
    company: string;
    dates: string;
    position: string;
    description: string;
    technologies: string[];
}

const Position = ({company, dates, position, description, technologies}: Props) => {
    return <div>
        <div className={styles.title}>
            <h1 className={styles.company}>{company}</h1>
            <span className={styles.dates}>{dates}</span>
        </div>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
            {technologies.map(tech => <TechTile name={tech} />)}
        </div>
    </div>
}

export default Position;