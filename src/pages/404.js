import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Thankyou extends React.Component {

  render() {
    return (

  <Layout>
    <SEO title="National Annuity Advisory Service" />

<div className="container-fluid bg-light">
    <div className="container featurette-heading text-dark text-center pt-0 pb-0 mt-3 pt-md-1 pb-md-5 pl-md-5 pr-md-5 ">    
        
        <div className=" h3 font-weight-bold p-2 p-md-3 col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 ">
            Thank you, we have received your enquiry. 
        </div>
        <div class=" h5 font-weight-bold p-2 p-md-3 col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 ">
           Someone will be in touch with you soon to check some additional details so we can get you the best Annuity quote possible.
        </div>
        <div className=" h5 font-weight-bold p-2 p-md-3 col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 ">
           And remember, you only get once chance to buy your Annuity. Make sure you answer the call and ensure you maximise your income in retirement. The
           quote is FREE and without obligation. If you do choose to proceed with our quote, we offer some of the cheapest fees available. 
        </div>
        <div className=" h5 font-weight-bold p-2 p-md-3 col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 ">
           Don't regret not taking this call, shop around and check the deal from your provider before you make a decision. 
        </div>
    </div>
</div>

<div id="expert" className="container-fluid" style={{background: '#31455F', paddingbottom: '5%',}}>
<div className="container">

<div className="row featurette justify-content-center p-3 mb-4"> 
  <div className="h3 featurette-heading font-weight-bold" style={{paddingbottom:'20px', color: 'white',}}>For now, just put the kettle on and wait for your call...</div>
      

<div className="d-flex flex-wrap justify-content-center text-center">
    <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="bg-white" style={{height: '200px',}}>
            <div className="card-body">

            <p className="card-text">We have texted and emailed you details of your matched broker. They will be in touch soon, or you can call them now if you wish.</p>
            </div>
        </div>
    </div>
    <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="bg-white" style={{height: '200px',}}>
            <div className="card-body">

            <p className="card-text">Have your FREE phone consultation with your broker to establish your needs in more detail.</p>
            </div>
        </div>
    </div>
    <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="bg-white" style={{height: '200px',}}>
            <div className="card-body">

            <p className="card-text">If you are unsure at any time, please call us again and we'll endeavour to resolve any issue, or find you an alternative broker free of charge.</p>
            </div>
        </div>
    </div>
</div>

</div> 


</div></div>




  </Layout>


    )
  }
}


const elementThankyou = Thankyou;

export default elementThankyou




