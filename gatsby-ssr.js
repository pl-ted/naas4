/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>,
      <script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" type="text/javascript"></script>,
  ])
  setPostBodyComponents([
      
    
  ])
}


