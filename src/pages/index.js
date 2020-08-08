import React from "react"

import SEO from "../components/Seo"
import CallToAction from "./sections/CallToAction"
import HeroImage from './sections/HeroImage';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroImage />
    <CallToAction />
    <Services />
    <Testimonials />
  </>
)

export default IndexPage
