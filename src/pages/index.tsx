import React, { Fragment } from 'react'

import {
  AboutSection,
  CTASection,
  ContactSection,
  Masthead,
  ServicesSection,
  SustainabilitySection,
} from '../components/indexPageComponents/'
import { Layout } from '../components/layout/'
import { Meta } from '../components/shared/'

const IndexPage = () => (
  <Fragment>
    <Meta />
    <Layout>
      <Masthead />
      <CTASection />
      <ServicesSection />
      <SustainabilitySection />
      <AboutSection />
      <ContactSection />
    </Layout>
  </Fragment>
)

export default IndexPage

export const Head = () => <Meta/>
