import PropTypes from "prop-types"
import React, { Component } from "react"

import imgLogo from "../dist/img/298bb42b-99db-42ce-8b6f-e094442cadb6.png"

const TrustBox = ({ trustBoxRef }) => (
    
    <div
         ref={trustBoxRef} // We need a reference to this element to load the TrustBox in componentDidMount.
         className="trustpilot-widget" // Renamed this to className.
         data-locale="en-GB" 
         data-template-id="5419b732fbfb950b10de65e5" 
         data-businessunit-id="5d5131486a32170001c259b5" 
         data-style-height="24px" 
         data-style-width="100%" 
         data-theme="light"
    >
    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
    <a
      href="https://www.trustpilot.com/review/pension-advisers.co.uk"
      target="_blank"
      rel="noopener noreferrer"
    >
      Trustpilot
    </a>

  </div>
);

class TrustBoxContainer extends Component {
    constructor(props) {
    super(props);
    this.trustBoxRef = React.createRef();
  }

  componentDidMount() {
  // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
  // If it's not, it means the script you pasted into <head /> isn't loaded just yet.
  // When it is, it will automatically load the TrustBox.
  if (window.Trustpilot) {
    window.Trustpilot.loadFromElement(this.trustBoxRef.current, true);
  }
    }
    render() {
        return <TrustBox trustBoxRef={this.trustBoxRef} />;
    }
}



const Header = ({ siteTitle }) => (
    <header style={{background: 'white',}}>
      <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 d-flex flex-wrap justify-content-center text-center form-inline">
            <div className="col-sm-12 col-md-6">
                <img src={imgLogo} alt="logo" className="logoStyle"></img>
            </div>
            <div className="col-sm-12 col-md-6">
                <TrustBoxContainer />
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
