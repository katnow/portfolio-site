'use client'
import {useState} from "react";
import Tab from "@/app/components/Menu/Tab";
import styles from './menu.module.scss';


const tabs = [
    { value: 'about', label: 'About me'},
    { value: 'experience', label: 'Experience'},
    { value: 'education', label: 'Education'},
    { value: 'projects', label: 'Projects'}
]

const Menu = () => {
    const [activeTab, setActiveTab] = useState(tabs[0])

    return <div className={styles.menu}>
        {tabs.map(tab => <Tab key={tab.value} tab={tab} active={activeTab.value === tab.value} onClick={() => setActiveTab(tab)}/>)}
    </div>
}

export default Menu