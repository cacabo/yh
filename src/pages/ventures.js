import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Ventures" keywords={[`todo`]} />

    <div className="background-graphic">
      <div className="background-fade"></div>
      <div className="slice slice-1"></div>
      <div className="slice slice-2"></div>
      <div className="dots"></div>
      <div className="slice slice-3"></div>
      <div className="slice slice-4"></div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="space-4"></div>
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="special marg-bot-1 white pad-1 marg-top-2">
              Our ventures program is an incubator for aspiring student founders
            </h1>
          </div>

          <div className="col-12 col-lg-10">
            <p className="white pad-1">
              Ventures is YouthHacks accelerator, a place where startups can blaze forward with mentors and resources at their fingertips. We focus on providing the community, mentorship, and education that students need to develop their ideas while in school. Our accelerator program consists of a three tiers, as listed below.
            </p>
          </div>
          <div className="space-2"></div>
        </div>
      </div>
    </div>

    <div className="container-fluid pad-sides">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="step pad-1 margin-left-1">
            <div className="number">
              1
            </div>
            <h1 className="special">
              Ideate
            </h1>
            <p>
              Early stage startups that have formed teams, outlined roles, and begun work on their MVP. At this stage, startups will focus on validating their market, learning to work together, and finishing their first draft of a product.
            </p>
          </div>
        </div>

        <div className="space-2 d-block d-md-none"></div>

        <div className="col-12 col-lg-4">
          <div className="step pad-1 margin-left-1">
            <div className="number">
              2
            </div>
            <h1 className="special">
              Build
            </h1>
            <p>
              Startups begin looking for their first clients and small grants and funds available on campus. Startups will focus on fundraising and refining their product to be market-ready.
            </p>
          </div>
        </div>

        <div className="space-2 d-block d-md-none"></div>

        <div className="col-12 col-lg-4">
          <div className="step pad-1 margin-left-1">
            <div className="number">
              3
            </div>
            <h1 className="special">
              Scale
            </h1>
            <p>
              Startups are now ready to move beyond the University ecosystem and seek seed funding and positive revenue streams. These startups will be focusing on networking and perfecting their pitches to both venture capitalists and consumers.
            </p>
          </div>
        </div>
      </div>
      <div className="space-4"></div>
    </div>

    <div className="center full-width absolute half-up">
      <a data-scroll href="#top" className="no-decoration inline">
        <div className="circle white shade-3 hover">
          <i className="fa fa-arrow-up black-text fa-2x"></i>
        </div>
      </a>
    </div>
  </Layout>
)
