import MenuItem from "../MenuItem";
import Image from "next/image";
import styles from './SideNavigation.module.css'

export default function SideNavigation() {
    return (
        <>
        <div className={styles.sidebar}>
            <div className={styles.description}>
                <Image className={styles.sideNav} src={'/images/me.jpg'} alt="picture" width={200} height={200}/>
                <p className={styles.name}>Callista Chan</p>
                <p>Designer</p>
            </div>
            <div className={styles.items}>
                <MenuItem title="Experience" bgColor="var(--blue)" textColor="white" tabLeft="10px"/>
                <MenuItem title="Education"/>
                <MenuItem title="Projects"/>
                <MenuItem title="Volunteering"/>
                <MenuItem title="Skills"/>
                <MenuItem title="Interests"/>
            </div>

        </div>
        
        </>
    )
  
}