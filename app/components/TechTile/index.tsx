import styles from './techTile.module.scss'

const TechTile = ({name}: {name: string}) => <div className={styles.tile}>{name}</div>

export default TechTile