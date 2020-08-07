import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from "./sections/CallToAction"
import HeroImage from './sections/HeroImage';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
    <CallToAction />
    <Services />
    <Testimonials />
  </Layout>
)

export default IndexPage
