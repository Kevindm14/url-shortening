import React, { useState } from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const showNav = () => setMenu(!menu);

    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <img src="/logo.svg" alt="logo" className={styles.logo}/>
                <div className={styles.links_web}>
                    <a href="/">Features</a>
                    <a href="/">Pricing</a>
                    <a href="/">Resources</a>
                </div>
            </div>
            <button className={styles.btn_menu} onClick={showNav}><i className="fas fa-bars"></i></button>
            <div className={styles.links_login}>
                <a href="/">Login</a>
                <a href="/">Sign up</a>
            </div>

            { menu && 
                <div className={styles.active}>
                    <div className={styles.linkss}>
                        <div className={styles.links2}>
                            <a href="/">Features</a>
                            <a href="/">Pricing</a>
                            <a href="/">Resources</a>
                        </div>
                        <div className={styles.links_login2}>
                            <a href="/">Login</a>
                            <a href="/">Sign up</a>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar;