import React from 'react'
import styles from './Section.module.scss'

function Section({ fullWidth = false, children }) {
    return (
        <div className={fullWidth ? styles.wide : styles.normal}>
            <section>
                {children}
            </section>
        </div>
    )
}

export default Section
