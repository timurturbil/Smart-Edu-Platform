import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

class Pricing extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center">
                        <h1>Pricing<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                    </div>
                </div>

                <div id="pricing-box" className="section wb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="pricingTable">
                                    <div className="pricingTable-header">
                                        <span className="heading">
                                            <h3>Standard</h3>
                                        </span>
                                        <span className="price-value">$15<span className="month">month</span> <span>Lorem ipsum </span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div className="pricingContent">
                                        <i className="fa fa-adjust"></i>
                                        <ul>
                                            <li>50GB Disk Space</li>
                                            <li>50 Email Accounts</li>
                                            <li>50GB Monthly Bandwidth</li>
                                            <li>10 subdomains</li>
                                            <li>50 Domains</li>
                                        </ul>
                                    </div>{/* /  CONTENT BOX*/}

                                    <div className="pricingTable-sign-up">
                                        <a href="#" className="hover-btn-new orange"><span>sign up</span></a>
                                    </div>{/* BUTTON BOX*/}
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="pricingTable pink">
                                    <div className="pricingTable-header">
                                        <span className="heading">
                                            <h3>Business</h3>
                                        </span>
                                        <span className="price-value">$30<span className="month">month</span> <span>Lorem ipsum</span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div className="pricingContent">
                                        <i className="fa fa-briefcase"></i>
                                        <ul>
                                            <li>70GB Disk Space</li>
                                            <li>70 Email Accounts</li>
                                            <li>70GB Monthly Bandwidth</li>
                                            <li>30 subdomains</li>
                                            <li>70 Domains</li>
                                        </ul>
                                    </div>{/* /  CONTENT BOX*/}

                                    <div className="pricingTable-sign-up">
                                        <a href="#" className="hover-btn-new orange"><span>sign up</span></a>
                                    </div>{/* BUTTON BOX*/}
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="pricingTable orange">
                                    <div className="pricingTable-header">
                                        <span className="heading">
                                            <h3>Premium</h3>
                                        </span>
                                        <span className="price-value">$45<span className="month">month</span> <span>Lorem ipsum</span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div className="pricingContent">
                                        <i className="fa fa-cube"></i>
                                        <ul>
                                            <li>80GB Disk Space</li>
                                            <li>80 Email Accounts</li>
                                            <li>80GB Monthly Bandwidth</li>
                                            <li>40 subdomains</li>
                                            <li>80 Domains</li>
                                        </ul>
                                    </div>{/* /  CONTENT BOX*/}

                                    <div className="pricingTable-sign-up">
                                        <a href="#" className="hover-btn-new orange"><span>sign up</span></a>
                                    </div>{/* BUTTON BOX*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* end section */}

                <div id="testimonials" className="parallax section db parallax-off" style={{ backgroundImage: "url('/assets/images/parallax_04.jpg')" }}>
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Testimonials</h3>
                            <p>Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>{/* end title */}

                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="testi-carousel owl-carousel owl-theme">
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_01.png" alt="" className="img-fluid" />
                                            <h4>James Fernando </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                                            <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}

                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_02.png" alt="" className="img-fluid" />
                                            <h4>Jacques Philips </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                                            <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}

                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_03.png" alt="" className="img-fluid " />
                                            <h4>Venanda Mercy </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                            <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_01.png" alt="" className="img-fluid" />
                                            <h4>James Fernando </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                                            <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}

                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_02.png" alt="" className="img-fluid" />
                                            <h4>Jacques Philips </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                                            <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}

                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="/assets/images/testi_03.png" alt="" className="img-fluid" />
                                            <h4>Venanda Mercy </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                            <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>{/* end testimonial */}
                                </div>{/* end carousel */}
                            </div>{/* end col */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                <Footer />

            </div>
        )
    }
}

export default Pricing