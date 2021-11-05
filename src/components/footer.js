import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>

                <div className="parallax section dbcolor">
                    <div className="container">
                        <div className="row logos">
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_01.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_02.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_03.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_04.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_05.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="/assets/images/logo_06.png" alt="" className="img-repsonsive" /></a>
                            </div>
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>About US</h3>
                                    </div>
                                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                                    <div className="footer-right">
                                        <ul className="footer-links-soi">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>{/* end links */}
                                    </div>
                                </div>{/* end clearfix */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Information Link</h3>
                                    </div>
                                    <ul className="footer-links">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>{/* end links */}
                                </div>{/* end clearfix */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Contact Details</h3>
                                    </div>

                                    <ul className="footer-links">
                                        <li><a href="mailto:#">info@yoursite.com</a></li>
                                        <li><a href="#">www.yoursite.com</a></li>
                                        <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                                        <li>+61 3 8376 6284</li>
                                    </ul>{/* end links */}
                                </div>{/* end clearfix */}
                            </div>{/* end col */}

                        </div>{/* end row */}
                    </div>{/* end container */}
                </footer>{/* end footer */}

                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <div className="footer-center">
                                <p className="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">SmartEDU</a> Design By : <a href="https://html.design/">html design</a></p>
                            </div>
                        </div>
                    </div>{/* end container */}
                </div>{/* end copyrights */}

                <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up"></i></a>
            </div>
        );
    }
}