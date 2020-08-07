import React from 'react'
import styles from './NavBar.module.scss'
import { Link } from "gatsby"
function NavBar() {
    return (
        <div className={styles.navBar}>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>Portfolio</li>
                    <li>Policies</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </div >
    )
}

export default NavBar
