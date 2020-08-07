import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

function Section({ fullWidth = false, children }) {
    if (fullWidth) document.documentElement.style.setProperty('--containerWidth', '100%')
    return (
        <section>
            {children}
        </section>
    )
}

export default Section
