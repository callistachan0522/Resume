import styles from "./Header.module.css"
export default function Header() {
    return (
        <>
            <header className={styles.Header}>
                <h1 className={styles.dashboard}>Dashboard</h1>
                <div className={styles.Image}>
                    <h1 className={styles.Friday}><img src="Bell.png" alt="bell" width={35} height={35}/>Friday</h1>
                </div>
            </header>

        
        </>
        
    )
}