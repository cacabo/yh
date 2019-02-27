import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="About" keywords={[`todo`]} />

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
              YouthHack is a for-purpose organization started in 2014 to help students learn more about technology, startups, and entrepreneurship.
            </h1>
          </div>

          <div className="col-12">
            <p className="white pad-1">
              Through a variety of educational events, workshops and programs, YouthHack has worked with  hundreds of students in the Philippines, Malaysia, Thailand, Korea, Singapore, Hong Kong, Sri Lanka and the US over the past few years. We run startup challenges, code weekends, student incubators, coding bootcamps and more.
            </p>
            <p className="white pad-1">
              We hope to continue building the startup ecosystem across the globe by bringing together the bright young minds of tomorrow and providing them with the network, resources and mentors to help them turn their ideas into reality. Interested? Read our <a className="cyan-text" href="https://medium.com/youthhack-stories/an-open-letter-to-the-friends-of-youthhack-59c3aa1f39c4" target="_blank">Open Letter to the Friends of YouthHack on How We Started.</a>
            </p>
          </div>
          <div className="space-2"></div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 quad">
          <div className="cyan-tint"></div>
          <div className="quad-img background-image" id="bg1"></div>

          <span className="cyan-underline">
            <h2 className="white-text special">
              We invest in our community
            </h2>
          </span>
          <p>
            We believe in solving for our community. In every decision we make, we ask ourselves, how is this going to help our community of student entrepreneurs?
          </p>
        </div>
        <div className="col-12 col-md-6 quad">
          <div className="quad-img background-image" id="bg2"></div>

          <span className="cyan-underline">
            <h2 className="white-text special">
              We combine education with action
            </h2>
          </span>
          <p>
            We believe in equipping students with skills relevant to the 21st century while also providing them with opportunities to put these skills into practice.
          </p>
        </div>
        <div className="col-12 col-md-6 quad">
          <div className="cyan-tint d-lg-none d-xl-none"></div>
          <div className="quad-img background-image" id="bg3"></div>

          <span className="cyan-underline">
            <h2 className="white-text special">
              We are dreamers &amp; doers
            </h2>
          </span>
          <p>
            No idea is too crazy for us to turn into reality. We believe that we’re never too young to make a difference.
          </p>
        </div>
        <div className="col-12 col-md-6 quad">
          <div className="cyan-tint d-none d-lg-block"></div>
          <div className="quad-img background-image" id="bg4"></div>

          <span className="cyan-underline">
            <h2 className="white-text special">
              We focus on impact
            </h2>
          </span>
          <p>
            ‘How can we use our programs and skills to make an impact in our communities?’ is a question we ask ourselves every single day
          </p>
        </div>
      </div>
    </div>

    <div className="center full-width absolute half-up">
      <a data-scroll href="#history" className="no-decoration inline">
        <div className="circle white shade-3 hover">
          <i className="fa fa-chevron-down black-text fa-2x"></i>
        </div>
      </a>
    </div>

    <div className="container" id="history">
      <div className="space-3"></div>
      <div className="row">
        <div className="col-12">
          <h1 className="special marg-bot-1">
            The history of YouthHack
          </h1>
          <p>
            Back in 2014, then 18-year-old high school graduate David Ongchoco had just gotten back from visiting universities in the US where he got the opportunity to attend startup events in Silicon Valley. When he got back to the Philippines, he asked himself why there weren’t any programs for students in the Philippines to get involved and learn more about startups, technology and entrepreneurship. Inspired to bring the culture he witnessed in Silicon Valley, he gathered a team to help organize what would become the first two-day YouthHack Startup Challenge.
          </p>
          <p>
            The success of the first-event would lead to more programs both in the Philippines and in other countries like Singapore, Hong Kong and the US. YouthHack hopes to create a global community of student entrepreneurs and changemakers, and become the go-to platform for students who want to turn their ideas into realities.
          </p>
        </div>
      </div>
    </div>

    <div className="space-3"></div>

    {/* TODO progress bar */}

    <div className="gray-diag background-image parallax" id="timeline">
      <div className="space-4"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="year">
              <span className="cyan-underline">
                <h1 className="special date black-text">
                  2014
                </h1>
              </span>
              <div className="year-content">
                <h2 className="special">
                  YouthHack is born
                </h2>
                <ul>
                  <li>
                    Idea for YouthHack is born.
                  </li>
                  <li>
                    First-ever YouthHack Manila Technopreneurship challenge is held at Gates Professional Schools with over 100 student participants.
                  </li>
                  <li>
                    Second-place team from YouthHack Manila wins Harvard competition and flies to Harvard to pitch their idea.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-spacer"></div>

            <div className="year">
              <span className="cyan-underline">
                <h1 className="special date black-text">
                  2015
                </h1>
              </span>
              <div className="year-content">
                <h2 className="special">
                  YouthHack expands globally
                </h2>
                <ul>
                  <li>
                    YouthHack Chapters are started in Philadelphia, Hong Kong and Singapore.
                  </li>
                  <li>
                    YouthHack launches new programs including the Fellowship program, Code Weekend and FreshStart program in partnership with local and international tech companies including Microsoft, Uber, Wharton, Dreamit Ventures and more.
                  </li>
                  <li>
                    The second YouthHack Manila Startup Challenge attracts over 250 students from all over the Philippines.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-spacer"></div>

            <div className="year">
              <span className="cyan-underline">
                <h1 className="special date black-text">
                  2016
                </h1>
              </span>
              <div className="year-content">
                <h2 className="special">
                  YouthHack launches a Ventures Accelerator program
                </h2>
                <ul>
                  <li>
                    Launch of the YouthHack Ventures Accelerator Program in Philadelphia and Manila with the goal of helping students work on their startup ideas beyond YouthHack events.
                  </li>
                  <li>
                    YouthHack Singapore alum organizes a YouthHack Italy Startup Challenge.
                  </li>
                  <li>
                    YouthHack Chapters are started in Sri Lanka, Malaysia, Thailand and Calabarzon.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-spacer"></div>

            <div className="year">
              <span className="cyan-underline">
                <h1 className="special date black-text">
                  2017
                </h1>
              </span>
              <div className="year-content">
                <h2 className="special">
                  First YouthHack Asia Summit is held in the Philippines
                </h2>
                <ul>
                  <li>
                    First YouthHack Asia Summit is hosted in the Philippine with delegates from all over Asia.
                  </li>
                  <li>
                    YouthHack Global Executive Board is named.
                  </li>
                  <li>
                    YouthHack Alumni Network is formalized.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-2"></div>
            <div className="space-2" id="leaders"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="space-3"></div>
      <div className="row">
        <div className="col-12">
          <h1 className="special marg-bot-2 full-width">
            Meet our team of chapter leaders
          </h1>

          {/* TODO people */}
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
