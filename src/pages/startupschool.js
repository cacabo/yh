import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Startup School" keywords={[`todo`]} />
  
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
              Startup School is a semester-long program for the budding entrepreneur to learn about turning an idea into a real product or service
            </h1>
          </div>

          <div className="col-12 col-lg-10">
            <p className="white pad-1">
              Serial entrepreneurs, professors, venture capitalists, and student entrepreneurs teach weekly lessons ranging from ideation to building an MVP to digital marketing and more. At the end of the program, students pitch their business idea to investors.
            </p>
            <p className="white pad-1">
              For more information, contact <a href="mailto:jalisha@wharton.upenn.edu" className="cyan-text">Alisha Joshi</a> or <a href="mailto:rajbhuva@seas.upenn.edu" className="cyan-text">Raj Bhuva.</a>
            </p>
          </div>
          <div className="space-4"></div>
        </div>
      </div>
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
