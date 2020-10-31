import React from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <img src="/logo.svg" alt="logo" className={styles.logo}/>
            </div>
            <button className={styles.btn_menu}><i className="fas fa-bars"></i></button>
            <div className={styles.links_login}>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar;