import styles from './menu.module.scss';
import classNames from "classnames";

interface TabType {
    value: string;
    label: string;
}

const Tab = ({tab, active, onClick}: {tab: TabType, active: boolean, onClick: () => void}) => {
    return <button onClick={onClick} className={classNames(styles.tab, {
        active
    })}>{tab.label}</button>
}

export default Tab;