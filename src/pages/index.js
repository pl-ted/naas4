import React from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

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



class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      postcode: '',
      firstname: '',
      lastname: '',
      email:  '',
      phone: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1? 2: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <div className="form-group mt-3 col-md-4 text-left">
           <button type="button" id="backBtn2" name="backBtn2" onClick={this._prev} className="btn btn-primary btn-md " style={{background: '#31455F', border: '2px solid #42CCAD',}}>Back</button>
      </div>
    )
  }
  return null;
}

next1Button(){
  let currentStep = this.state.currentStep;
  if(currentStep <2){
    return (  
      <div className="form-row col-12 text-center">
           <button type="button" onClick={this._next} id="next2" name="next2" className="btn btn-lg btn-primary col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 mt-3 font-weight-bold" style={{background: '#42CCAD', border: '#42CCAD',}}>NEXT (1 of 2)</button>
      </div>    
    )
  }
  return null;
}

submitButton(){
  let currentStep = this.state.currentStep;
  if(currentStep ===2){
    return (  
      <div className="form-row col-12 text-center">
           <button type="submit" id="submit" name="submit" className="btn btn-lg btn-primary col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 mt-3 font-weight-bold" style={{background: '#42CCAD', border: '#42CCAD',}}>Compare Now</button>
      </div>
    )
  }
  return null;
}


  render() {
    return (

  <Layout>
    <SEO title="National Annuity Advisory Service" />


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
	          
	        <div className="container p-4">
				<React.Fragment>
				    <div className="row form-inline">
		                <div className="col-2 col-sm-2 col-md-2 text-right">
		                    <img src={imgTick} className="rounded" alt="..."></img>
		                </div>
		                <div className="col-10 offset-0 col-sm-10 offset-sm-0 col-md-10   offset-md-0 text-left">
		                  <h4 className="text pt-2">Compare Annuity Quotes</h4>
		                </div>
	              	</div>

	            	<hr style={{background: 'white', border: '1px',}}></hr>

			        <form name="nationalannuityadvisoryservice" action="thankyou" method="post" netlify-honeypot="bot-field" data-netlify="true" >
					<input type="hidden" name="bot-field" />
			        <input type="hidden" name="form-name" value="nationalannuityadvisoryservice" />
			      {/* 
			        render the form steps and pass required props in
			      */}
			        <Step1 
			          currentStep={this.state.currentStep} 
			          handleChange={this.handleChange}
			          email={this.state.email}
			        />
			        <Step2 
			          currentStep={this.state.currentStep} 
			          handleChange={this.handleChange}
			          firstname={this.state.firstname}
			          lastname={this.state.lastname}
			          email={this.state.email}
			          phone={this.state.phone}
			        />
			        
			        {this.next1Button()}
			        {this.submitButton()}
			        {this.previousButton()}

			      </form>
				</React.Fragment>
			</div>


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
 
</div>

  </Layout>


    );
  }
}


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Param({name, value}) {
  return <input type="hidden" id={name} name={name} value={value} ></input>;
}
function Pl_campaignid() {
  return (  < Param name="pl_campaignid" value={useQuery().get("pl_campaignid")}  /> );
}
function Pl_adgroupid() {
  return (  < Param name="pl_adgroupid" value={useQuery().get("pl_adgroupid")}  /> );
}
function Pl_network() {
  return (  < Param name="pl_network" value={useQuery().get("pl_network")}  /> );
}
function Pl_device() {
  return (  < Param name="pl_device" value={useQuery().get("pl_device")}  /> );
}
function Pl_devicemodel() {
  return (  < Param name="pl_devicemodel" value={useQuery().get("pl_devicemodel")}  /> );
}
function Pl_creative() {
  return (  < Param name="pl_creative" value={useQuery().get("pl_creative")}  /> );
}
function Pl_keyword() {
  return (  < Param name="pl_keyword" value={useQuery().get("pl_keyword")}  /> );
}
function Pl_adposition() {
  return (  < Param name="pl_adposition" value={useQuery().get("pl_adposition")}  /> );
}
function Gclid() {
  return (  < Param name="gclid" value={useQuery().get("gclid")}  /> );
}
function Pl_page() {
  return (  < Param name="pl_page" value={useQuery().get("pl_page")}  /> );
}
function Pl_feeditemid() {
  return (  < Param name="pl_feeditemid" value={useQuery().get("pl_feeditemid")}  /> );
}
function Pl_targetid() {
  return (  < Param name="pl_targetid" value={useQuery().get("pl_targetid")}  /> );
}
function Pl_loc_physical_ms() {
  return (  < Param name="pl_loc_physical_ms" value={useQuery().get("pl_loc_physical_ms")}  /> );
}
function Pl_loc_interest_ms() {
  return (  < Param name="pl_loc_interest_ms" value={useQuery().get("pl_loc_interest_ms")}  /> );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="postcode" className="h4 col-12 pb-2 text-center">Enter Your Postcode</label>
      <input
        className="form-control text-left pl-2 pl-sm-2 pl-md-2 pl-lg-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2"
        id="postcode"
        name="postcode"
        type="text"
        placeholder="Postcode"
        value={props.postcode}
        onChange={props.handleChange}
        />

	        <Router><Pl_campaignid /></Router>
			<Router><Pl_adgroupid /></Router>
			<Router><Pl_network /></Router>
			<Router><Pl_device /></Router>
			<Router><Pl_devicemodel /></Router>
			<Router><Pl_creative /></Router>
			<Router><Pl_keyword /></Router>
			<Router><Pl_adposition /></Router>
			<Router><Gclid /></Router>
			<Router><Pl_page /></Router>
			<Router><Pl_feeditemid /></Router>
			<Router><Pl_targetid /></Router>
			<Router><Pl_loc_physical_ms /></Router>
			<Router><Pl_loc_interest_ms /></Router>

	      <input type="hidden" name="pl_siteid" id="pl_siteid" value="19932"></input>
	      <input type="hidden" name="typeOfAdvice" id="typeOfAdvice"  value="annuity" ></input>
	      <input type="hidden" name="pl_associatedsite" id="pl_associatedsite" value="pensionannuityoptions.co.uk"></input>
	      <input type="hidden" name="pl_leadgroupid" id="pl_leadgroupid" value="51530"></input>
	      <input type="hidden" name="F_12_PHONE1" id="form1_F_12_PHONE1" value="0" ></input>
	      <input type="hidden" name="F_1321_GA_CLIENT_ID" id="F_1321_GA_CLIENT_ID"></input>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <React.Fragment>
      <div>
      	  <div className="input">
		      <input
		        id="firstname"
		        name="firstname"
		        type="text"
		        placeholder="First Name"
		        value={props.firstname}
		        onChange={props.handleChange}
		        />
	      </div>
      </div>

	  <div>
	  	  <div className="input">
		      <input
		        id="lastname"
		        name="lastname"
		        type="text"
		        placeholder="Last Name"
		        value={props.lastname}
		        onChange={props.handleChange}
		        /> 
	      </div> 
	  </div>

      <div>
      	  <div className="input">
		      <input
		        id="email"
		        name="email"
		        type="text"
		        placeholder="Email"
		        value={props.email}
		        onChange={props.handleChange}
		        /> 
	      </div>
      </div> 

      <div>
      	  <div className="input">
		      <input
		        id="phone"
		        name="phone"
		        type="text"
		        placeholder="Phone"
		        value={props.phone}
		        onChange={props.handleChange}
		        /> 
	       </div>
       </div>        

    </React.Fragment>
  );
}

const element = MainPage;

export default element




