/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from './src/components/Layout'

const theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`,
    palette: {
        // primary: { main: '#663399' },
        primary: { main: '#663399' }, // rebeccapurple
        secondary: { main: '#23994A' } // Green
    }
})

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
    )
}



export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

// You can delete this file if you're not using it
