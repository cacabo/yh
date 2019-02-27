import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Get Involved" keywords={[`todo`]} />

    <div className="dots-wrapper">
      <div className="slice slice-5"></div>
      <div className="slice slice-6"></div>
      <div className="slice slice-7"></div>

      <div className="container">
        <div className="space-4"></div>

        <div className="row">
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="special white pad-1 marg-bot-1">
              Passionate people make YouthHack the global community it is today
            </h1>
          </div>

          <div className="col-12 col-md-9 col-lg-7">
            <p className="white pad-1 bigger">
              Whether you're an aspiring entrepreneur or a seasoned venture capitalist, you can learn from and contribute to YouthHack's global community.
            </p>
          </div>
        </div>

        <div className="space-3"></div>
      </div>
    </div>

    <div className="center full-width absolute half-up">
      <a data-scroll href="#methods" className="no-decoration inline">
        <div className="circle white shade-3 hover">
          <i className="fa fa-caret-down black-text fa-2x"></i>
        </div>
      </a>
    </div>

    <div className="white" id="methods">
      <div className="container">
        <div className="space-3"></div>

        <div className="row">
          <div className="col-12 col-md-6 method">
            <h2 className="special">
              Start a chapter
            </h2>
            <p>
              To date, we've started chapters in Philadelphia, Manila, Calabarzon, Singapore, Colombo, Bangkok, Kuala Lumpur, and Seoul. Chapters are where driven individuals collaborate, learn, and grow via YouthHack year-long. Interested in building a chapter of your own?
              <br />
              <a data-scroll href="#contact" className="cyan-text">
                Let's start something.
              </a>
            </p>
          </div>

          <div className="col-12 col-md-6 method">
            <h2 className="special">
              Join the Core Team
            </h2>
            <p>
              Our Core Team is a tight-knit community of entrepreneurs, academics, marketing-enthusiasts, consultants, developers, and designers. Each member contributes their unique skillset to advance YouthHack's mission: empowering students to turn their ideas into reality.
              <br />
              <a data-scroll href="#contact" className="cyan-text">Be a part of our community.</a>
            </p>
          </div>

          <div className="col-12 col-md-6 method">
            <h2 className="special">
              Become a mentor
            </h2>
            <p>
              Mentors give meaningful direction to our student entrepreneurs. We welcome mentors from all industries from sales, to venture capital, to software development. They contribute unique perspectives and experiences that are invaluable to our students.
              <br />
              <a data-scroll href="#contact" className="cyan-text">Share your knowledge.</a>
            </p>
          </div>

          <div className="col-12 col-md-6 method">
            <h2 className="special">
              Become a sponsor or partner
            </h2>
            <p>
              Sponsors and partners contribute resources and funding which enable YouthHack to grow and host events around the world. We've worked with various tech companies, startups, and venture capital firms to inspire our students to build high-impact products.
              <br />
              <a data-scroll href="#contact" className="cyan-text">Support YouthHack's mission.</a>
            </p>
          </div>

          <div className="center">
            <div className="space-1"></div>

            {/* TODO rendering links */}

            <a href="{{APPLICATIONS_LINK}}" target="blank" className="btn special">
              Apply to the Core Team or Startup School
            </a>
            <a href="{{VENTURES_LINK}}" target="blank" className="btn special">
              Apply to YH Ventures
            </a>

            <div className="space-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-2"></div>

    {/* TODO progress bar */}

    <div className="dots-wrapper" id="contact">
      <div className="gray-diag-2 background-image parallax">
        <div className="container">
          <div className="space-2"></div>
          <div className="space-2 d-none d-md-block"></div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="white pad-2">
                <h2 className="special marg-bot-1">Contact us</h2>
                <p>
                  Have an idea for how you can get involved in YouthHack? Shoot us a message and we'll be prompt in our response.
                </p>
                <p>
                  Want to reach out to someone in particular? <a href="./about.html#leaders" className="cyan-text">Check this out.</a>
                </p>

                <div className="space-1"></div>

                {/* TODO contact form */}
              </div>
            </div>
          </div>
        </div>
        <div className="space-4"></div>
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
