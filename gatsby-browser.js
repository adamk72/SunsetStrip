/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`,
    palette: {
        // primary: { main: '#663399' },
        primary: { main: '#000' },
    }
})

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
    )
}



// You can delete this file if you're not using it
