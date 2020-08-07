import React from 'react'
import styles from './NavBar.module.scss'
function NavBar() {
    return (
        <div className={styles.navBar}>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Policies</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </div >
    )
}

export default NavBar
