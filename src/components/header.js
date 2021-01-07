import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import imgLogo from "../dist/img/298bb42b-99db-42ce-8b6f-e094442cadb6.png"

const Header = ({ siteTitle }) => (
    <header style={{background: 'white',}}>
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1 d-flex flex-wrap justify-content-center text-center form-inline">
          <div className="col-sm-12 col-md-6">
            <img src={imgLogo} alt="logo" className="logoStyle"></img>
          </div>
          <div className="col-sm-12 col-md-6">
            <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b732fbfb950b10de65e5" data-businessunit-id="5d5131486a32170001c259b5" data-style-height="24px" data-style-width="100%" data-theme="light"> 
            <a href="https://uk.trustpilot.com/review/pension-advisers.co.uk" target="_blank" rel="noopener">Trustpilot</a> 
            </div> 
          </div>
        </div>
      </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
