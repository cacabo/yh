import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="dots-wrapper" id="contact">
      <div className="gray-diag-2 background-image parallax">
        <div className="container">
          <div className="space-2"></div>
          <div className="space-4 d-none d-md-block"></div>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="space-1"></div>
              <div className="white pad-1">
                <h4 className="special">
                  Oops! The page you were looking for does not exist
                </h4>
                <p>Please check the URL and refresh the page. If you think this is a mistake, <a href="/get-involved#contact">contact us</a> and let us know.</p>
                <a href="/" className="btn special">
                  ← Back to home
                </a>
              </div>
            </div>
          </div>
          <div className="space-2"></div>
          <div className="space-4 d-none d-md-block"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
