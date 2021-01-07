import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import $ from 'jquery';  
window.jQuery = $; 
window.$ = $;

import Layout from "../components/layout"
import SEO from "../components/seo"

import imgTick from "../dist/img/9f778e42-cb98-4ee8-981a-229498b22c12.png"

import imgMarket1 from "../dist/img/36ffcfa5-7b8d-41cf-bef3-200093570d0d.png"
import imgMarket2 from "../dist/img/58d2cef2-b2c0-4eec-b9d4-94d89517b826.png"
import imgMarket3 from "../dist/img/007c3bdd-a636-4853-a7bd-7de7006921c9.png"
import imgMarket4 from "../dist/img/26ee8f4b-bad5-4b4b-a662-b5a211bf2cf2.png"

import imgProcess1 from "../dist/img/2d5faf48-d771-4d4a-a2c5-dce65039154d.jpg"
import imgProcess2 from "../dist/img/06b942cb-8d42-4480-bedf-cbe3ca342088.jpg"
import imgProcess3 from "../dist/img/ddc68430-7456-406c-ac73-658727fda529.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="National Annuity Advisory Service" />

<div>
    <Helmet>
        
    </Helmet>
</div>

<div className="container-fluid" style={{background: '#f7f7f7',}}>
<div className="container marketing">

    <div className="row featurette text-center d-flex flex-wrap-reverse form-inline">
      <div className="col-md-6 pl-1 pr-0" style={{padding: '0px 30px',}}>
       <h1 className="text font-weight-bold pt-3 mb-3" style={{color:'#31455F',}}>Calculate and Compare this Months Best Annuity Rates</h1>
              <div className="row pt-2 pb-2 form-inline">
                <div className="col-2 col-sm-2 col-md-2 p-0 text-right">
                    <i className="fa fa-gbp" style={{baseFontSize:'35px', color:'#31455F',}}></i>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                    <h3 className="text-muted">Get up to 50% More Pension Income</h3>
                </div>
              </div>

              <div className="row pt-2 pb-2 form-inline">
                <div className="col-2 col-sm-2 col-md-2 p-0 text-right">
                    <i className="fa fa-gbp " style={{baseFontSize:'35px', color:'#31455F',}}></i>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                    <h3 className="text-muted">Fast Online Quote Service</h3>
                </div>
              </div>

              <div className="row pt-2 pb-2 form-inline">
                <div className="col-2 col-sm-2 col-md-2 p-0 text-right">
                    <i className="fa fa-gbp" style={{baseFontSize:'35px', color:'#31455F',}}></i>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                    <h3 className="text-muted">All Pension Providers Compared</h3>
                </div>
              </div>
      </div>

      <div className="col-md-6">
        <div className="formContainerBox" id="formContainerBox">
          <form id="form" name="submit" method="post" data-netlify="true" action="/thankyou/index.html">
            <fieldset id="step1" >

            <div className="row form-inline">
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <img src={imgTick} className="rounded" alt="..."></img>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                  <h4 className="text pt-2">Compare Annuity Quotes</h4>
                </div>
              </div>

            <hr style={{background: 'white', border: '1px',}}></hr>


            <div className="form-row col-12">
              <label for="postcode" className="h4 col-12 pb-2 text-center">Postcode</label>
              <input type="text" className="form-control text-left pl-2 pl-sm-2 pl-md-2 pl-lg-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2" name="postcode" id="postcode" placeholder="e.g. HG1" style={{height: '2.2em',}}></input>
            </div>

              <input   type="hidden" id="pl_matchtype" name="pl_matchtype" value=""></input>
              <input type="hidden" id="pl_campaignid" name="pl_campaignid" value=""></input>
              <input type="hidden" id="pl_adgroupid" name="pl_adgroupid" value=""></input>
              <input type="hidden" id="pl_network" name="pl_network" value=""></input>
              <input type="hidden" id="pl_device" name="pl_device" value=""></input>
              <input type="hidden" id="pl_devicemodel" name="pl_devicemodel" value=""></input>
              <input type="hidden" id="pl_creative" name="pl_creative" value=""></input>
              <input type="hidden" id="pl_keyword" name="pl_keyword" value=""></input>
              <input type="hidden" id="pl_adposition" name="pl_adposition" value=""></input>
              <input type="hidden" id="gclid" name="gclid" value=""></input>
              <input type="hidden" id="pl_page" name="pl_page" value=""></input>
              <input type="hidden" id="pl_feeditemid" name="pl_feeditemid" value=""></input>
              <input type="hidden" id="pl_targetid" name="pl_targetid" value=""></input>  
              <input type="hidden" id="pl_loc_physical_ms" name="pl_loc_physical_ms" value=""></input>  
              <input type="hidden" id="pl_loc_interest_ms" name="pl_loc_interest_ms" value=""></input>  

              <input type="hidden" name="pl_siteid" id="pl_siteid" value="19932"></input>
              <input type="hidden" name="typeOfAdvice" id="typeOfAdvice"  value="annuity" ></input>
              <input type="hidden" name="pl_associatedsite" id="pl_associatedsite" value="pensionannuityoptions.co.uk"></input>
              <input type="hidden" name="pl_leadgroupid" id="pl_leadgroupid" value="51530"></input>
              <input type="hidden" name="F_12_PHONE1" id="form1_F_12_PHONE1" value="0" ></input>
              <input type="hidden" name="F_1321_GA_CLIENT_ID" id="F_1321_GA_CLIENT_ID"></input>

  
          <div className="form-row col-12 pt-4 ">
            <button type="button" id="next1" name="next1" className="btn btn-lg btn-primary col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 font-weight-bold" style={{background: '#42CCAD', border: '#42CCAD',}}>NEXT (1 of 2)</button>
          </div>

          <div className="requiredfield" name="requiredfield2" id="requiredfield2">Your postcode is required</div>

        </fieldset>

        <fieldset id="step2">


          <div className="row form-inline">
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <img src={imgTick} className="rounded" alt="..."></img>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                  <h4 className="text pt-2">Compare Annuity Quotes</h4>
                </div>
              </div>

            <hr style={{background: 'white', border: '1px',}}></hr>
         
         
          <div className="form-row col-12">
            <label for="ageText" className="h4 col-12 pt-2 text-center">Age</label>
            <input type="text" className="form-control text-center col-10 col-sm-8 offset-2 col-md-8 offset-md-2" name="ageText" id="form1_ageText" placeholder="e.g. 7" style={{height: '2.2em',}}></input>
          </div>


          <div className="form-row col-12 text-center ">
            <button type="button" id="next2" name="next2" className="btn btn-lg btn-primary col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 mt-3 font-weight-bold" style={{background: '#42CCAD', border: '#42CCAD',}}>Next</button>
          </div>
          
          <div className="requiredfield" name="requiredfield5" id="requiredfield5">All fields are required</div>

          <div className="form-group col-md-4 text-left">
            <button type="button" id="backBtn2" name="backBtn2" className="btn btn-primary btn-md " style={{background: '#31455F', border: '2px solid #42CCAD',}}>Back</button>
          </div>
          
        </fieldset>

        <fieldset id="step3">
              <div className="row form-inline">
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <img src={imgTick} className="rounded" alt="..."></img>
                </div>
                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
                  <h4 className="text pt-2">Compare Annuity Quotes</h4>
                </div>
              </div>

            <hr style={{backgroundcolor: 'white', border: '1px',}}></hr>

              <div>
                  <div className="input">
                      <input type="text" id="firstName" name="firstName" placeholder="First Name"  value=""></input>
                      <div className="error-message"></div>
                  </div>
              </div>            
                            <div>
                  <div className="input">
                      <input type="text" id="lastName" name="lastName" placeholder="Last Name"  value=""></input>
                      <div className="error-message"></div>
                  </div>
              </div>
                            <div>
                  <div className="input">
                      <input type="text" id="email" name="email" placeholder="Email"  value=""></input>
                      <div className="error-message"></div>
                  </div>
              </div>
                            <div>
                  <div className="input">
                      <input type="text" id="phone" name="phone" placeholder="Phone"  value=""></input>
                      <div className="error-message"></div>
                  </div>
              </div>


            <div className="form-row col-12 text-center">
              <button type="submit" id="submit" name="submit" className="btn btn-lg btn-primary col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 mt-3 font-weight-bold" style={{background: '#42CCAD', border: '#42CCAD',}}>Compare Now</button>
            </div>

          <div className="form-group mt-3 col-md-4 text-left">
            <button type="button" id="backBtn3" name="backBtn3" className="btn btn-primary btn-md " style={{background: '#31455F', border: '2px solid #42CCAD',}}>Back</button>
          </div>

        </fieldset>


          </form>
        </div> <formContainerBox></formContainerBox>
      </div>
    </div>

</div> <containermarketing></containermarketing> 
</div> <containerfluid></containerfluid>


<div className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1">
  <div className="container p-4">

    <div className="row featurette justify-content-center" style={{paddingtop:'5%',}}>
      <h1 className=" text-center font-weight-bold pt-2" style={{color:'#31455F',}}>Compare the best rates from the whole UK market</h1>
    </div>
    <div className="row featurette justify-content-center" style={{paddingbottom:'5%',}}>
        <div className="d-flex flex-wrap form-inline justify-content-center">
            <img src={imgMarket1} className="mt-2 mb-2 ml-3 mr-3" style={{width: '188px', height: '78px', }} alt="Logo"></img>
            <img src={imgMarket2} className="mt-2 mb-2 ml-4 mr-4 " style={{width: '119px', height: '66px', }} alt="Logo"></img>
            <img src={imgMarket3} className="mt-3 mb-3 ml-3 mr-3" style={{width: '132px', height: '66px', }} alt="Logo"></img>
            <img src={imgMarket4} className="mt-2 mb-2 ml-3 mr-3" style={{width: '106px', height: '67px', }} alt="Logo"></img>
        </div>
    </div>
  </div>
</div> 

<div id="expert" className="container-fluid" style={{background: '#31455F', paddingbottom: '5%',}}>
<div className="container">

<div className="row featurette justify-content-center mb-2" style={{color: 'white',}}>
    <h1 className="text-center font-weight-bold pt-5" style={{color:'white',paddingbottom:'20px',}}>Our Process</h1>  
</div> <rowfeaturette></rowfeaturette>

<div className="d-flex flex-wrap justify-content-center text-center">
  <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4">
    <div className="bg-white" style={{height: '375px',}}>
      <img src={imgProcess1} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title ">Tell us who you are</h5>
        <p className="card-text">By completing our form online you enable us to compare the market for the best possible rates for you.</p>
      </div>
    </div>
  </div>

  <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4">
    <div className="bg-white" style={{height: '375px',}}>
      <img src={imgProcess2} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title ">Speak to our team of experts</h5>
        <p className="card-text">Get a truly personalised quote</p>
      </div>
    </div>
  </div>

  <div className="p-2  col-12 col-sm-6 col-md-6 col-lg-4">
    <div className="bg-white" style={{height: '375px',}}>
      <img src={imgProcess3} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title ">Maximise your Pension Income in Retirement</h5>
        <p className="card-text">Achieve up to 50% more income by engaging with our advisors</p>
      </div>
    </div>
  </div>

</div>

</div>  <container></container>
</div> <containerfluid></containerfluid>
<div>
<Helmet>

</Helmet>
</div>

  </Layout>
)

export default IndexPage
