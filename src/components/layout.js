import React from "react"
import PropTypes from "prop-types"

import { Header, Footer } from '../fragments'
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />

    <div
      style={{
        width: '100%',
      }}
    >
      <main>
        {children}
      </main>

      <Footer />
    </div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
      integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
      crossOrigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
      integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
      crossOrigin="anonymous"
    />
    <script src="https://cdn.jsdelivr.net/jquery.autosize/3.0.20/autosize.min.js" />

    {/* TODO other scripts */}

    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105686107-1" />

    {/*<script> // TODO GOOGLE ANALYTICS
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments)
      };
      gtag('js', new Date());

      gtag('config', 'UA-105686107-1');
    </script>*/}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
