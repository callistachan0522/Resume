import styles from './MenuItem.module.css'
export default function MenuItem({
    title="",
    bgColor="",
    textColor="",
    tabLeft=""

}) {
   
    return (
        <div className={styles.menu} style={{
            backgroundColor: bgColor,
            color: textColor,
            paddingLeft: tabLeft,

        }}>
        {title}
        </div>
    )
}