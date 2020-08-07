import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from "./sections/CallToAction"
import HeroImage from './sections/HeroImage';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials'

const IndexPage = () => (
  <Layout>

    <SEO title="About" />

    <HeroImage />
    <CallToAction />
    <Services />
    <Testimonials />
  </Layout>
)

export default IndexPage
