import Image from "next/image";
import styles from './projects.module.scss';
import TechTile from "@/app/components/TechTile";

const projects = [
    {
        name: 'Izery Waste Disposal',
        role: 'Product owner | UX Designer | Frontend, Mobile Developer',
        date: 'march 2024 - now',
        description: 'My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time',
        photo: '/assets/images/Izery.png',
        technologies: ['TypeScript', 'React', 'React Native', 'Node.js', 'SCSS', 'CSS'],
    },
    {
        name: 'SimpleClouds',
        role: 'Frontend Developer',
        date: 'march 2023 - august 2024',
        description: 'My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time',
        photo: '/assets/images/SimpleClouds.png',
        technologies: ['TypeScript', 'JavaScript', 'React', 'Redux', 'CSS'],
    },
    {
        name: 'Specprawnik',
        role: 'Frontend Developer',
        date: 'march 2022 - december 2024',
        description: 'My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time',
        photo: '/assets/images/Specprawnik.png',
        technologies: ['TypeScript', 'JavaScript', 'React', 'Redux', 'CSS'],
    },
]

const Projects = () => {
    return <div className={styles.projects}>
        {projects.map(project => (
                <div className={styles.project}>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <Image objectPosition={'top'} layout={'fill'} objectFit={'contain'}src={project.photo} alt={project.name}/>
                        </div>
                        <div>
                            <div className={styles.title}>
                                <h1 className={styles.name}>{project.name}</h1>
                                <span className={styles.date}>{project.date}</span>
                            </div>
                            <p className={styles.role}>{project.role}</p>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.technologies}>{project.technologies.map(tech => <TechTile
                                name={tech}/>)}</div>
                        </div>
                    </div>
                </div>
        ))
        }
    </div>
}

export default Projects;