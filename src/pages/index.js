import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`TODO`]} />

    {/* TODO HOME HERO */}

    <div className="center full-width absolute half-up">
      <a data-scroll href="#about" className="no-decoration inline">
        <div className="circle white shade-3 hover">
          <i className="fa fa-angle-double-down black-text fa-3x fa"></i>
        </div>
      </a>
    </div>

    <div className="container-fluid pad-sides" id="about">
      <div className="space-1"></div>
      <div className="row marg-top-2">
        <div className="col-12 col-md-4">
          <div className="pad-1 division">
            <img className="branch-img" src="./img/diploma.svg" alt="YouthHack Startup School" />
            <h2 className="special">Startup School</h2>
            <p>
              Come hear from experienced entrepreneurs share their stories and experiences
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="pad-1 division">
            <img className="branch-img" src="./img/rocket.svg" alt="YouthHack Ventures" />
            <h2 className="special">Ventures</h2>
            <p>
              Working on a startup idea? Join our student-focused incubator program
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="pad-1 division">
            <img className="branch-img" src="./img/medal.svg" alt="YouthHack Startup Challenge" />
            <h2 className="special">Startup Challenge</h2>
            <p>
              Dive into the world of startups in one intense action packed weekend challenge
            </p>
          </div>
        </div>
      </div>

      <div className="center">
        <a className="btn special" href="https://medium.com/youthhack-stories" target="_blank">
          Read what we've been up to
        </a>

        {/* TODO render links*/}
        <a href="{{ APPLICATIONS_LINK }}" target="blank" className="btn special">
          Apply to the Core Team or Startup School
        </a>

        <a href="{{ VENTURES_LINK }}" target="blank" className="btn special">
          Apply to YH Ventures
        </a>
      </div>

      <div className="space-2"></div>
    </div>

    {/* TODO progress bar */}

    {/* TODO stats */}

    {/* TODO carousel */}

    {/* TODO press */}

    {/* TODO progress */}

    {/* TODO partners */}

    <div className="space-2"></div>

    <div className="gradient-2 background-image parallax" id="contact">
      <div className="overlay">
        <div className="container">
          <div className="space-2"></div>
          <div className="space-2 d-none d-md-block"></div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="white pad-2">
                <h2 className="special marg-bot-2">Contact us</h2>

                {/* TODO contact form */}
              </div>
            </div>
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </div>

    {/* TODO back to top */}
  </Layout>
)

export default IndexPage
