import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center">
                        <h1>Contact<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                    </div>
                </div>

                <div id="contact" className="section wb">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Need Help? Sure we are Online!</h3>
                            <p className="lead">Let us give you more details about the special offer website you want us. Please fill out the form below. <br />We have million of website owners who happy to work with us!</p>
                        </div>{/* end title */}

                        <div className="row">
                            <div className="offset-1 col-xl-10 col-md-10 col-sm-10">
                                <div className="contact_form">
                                    <div id="message"></div>
                                    <form id="contactform" className="" action="/contact" name="contactform" method="POST">
                                        <div className="row row-fluid">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" name="name" id="first_name" className="form-control" placeholder="Your Name" />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <textarea className="form-control" name="message" id="comments" rows="6" placeholder="Give us more details.."></textarea>
                                            </div>
                                            <div className="text-center pd">
                                                <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">SEND</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-md-12 col-sm-12">
                                <div className="map-box">
                                    <div id="custom-places" className="small-map"></div>
                                </div>
                            </div> */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                <Footer />

            </div>
        )
    }
}

export default Contact