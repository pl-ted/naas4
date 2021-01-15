/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 'none',
          padding: `0 0rem 0rem`,
        }}
      >
      <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        <main>{children}</main>
        
<footer className="pt-4  pt-md-5 border-top" style={{color: 'white',}}>

<div className="container-fluid p-1 pl-md-5 pr-md-5">
      <div className="row d-flex flex-wrap-reverse">
        <div className="col-10 offset-1 col-sm-9 offset-sm-2 col-md-5 offset-md-1 col-lg-3 offset-lg-1">
          <h5>National Annuity Advisory Service</h5>
          <ul className="list-unstyled text-small">
            <li >NationalAnnuityAdvisoryService.co.uk is a trading name of Performance Leads Ltd, Company Number: 10720622, VAT Number: 276316588, Registered Office: Haggs Farm, Unit 5, Thwaites Barn, Haggs Rd, Harrogate HG3 1EQ.</li>
          </ul>
        </div>
        <div className="col-10 offset-1 col-sm-9 offset-sm-2 col-md-5 offset-md-1 col-lg-3 offset-lg-1">
          <h5>Performance Leads Limited</h5>
          <ul className="list-unstyled text-small">
            <li>Performance Leads Limited is registered with the Information Commissioner&rsquo;s Office, Registration Number ZA247374, <a href="/privacy" style={{color:'#ffffff'}}><u>Privacy.</u></a> Tel: <a href="tel:01423423065" style={{color:'#ffffff',}}><u>01423 423065</u></a>, Email: <a href="mailto:support@performance-leads.co.uk" style={{color:'#ffffff',}}><u>support@performance-leads.co.uk</u></a> &copy; 2015 - 2020 Performance Leads Ltd</li>
          </ul>
        </div>
        <div className="mb-4 col-10 offset-1 col-sm-9 offset-sm-2 col-md-10 offset-md-1 col-lg-3 offset-lg-1" style={{background: '#31455F', border: '5px', padding: '3%', align: 'center',}}>
          <h5>
            If you are a Financial Advisor and would be interested in working with us, <Link to="https://try.performance-leads.co.uk/try/"> Click here to find out more.</Link>   
          </h5>
        </div>
      </div>
    </div> <containerfluid></containerfluid>
  </footer>

        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
