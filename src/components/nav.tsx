import styles from "@/styles/navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <button className={styles.button}>
                Anonymous Hub
            </button>
        </nav>
    )
}