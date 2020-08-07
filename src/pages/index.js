import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from "./sections/CallToAction"
import HeroImage from './sections/HeroImage';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: factor => `${0.25 * factor}rem`,
  palette: {
    // primary: { main: '#663399' },
    primary: { main: '#000' },
  }
})


const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <HeroImage />
      <CallToAction />
      <Services />
      <Testimonials />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
