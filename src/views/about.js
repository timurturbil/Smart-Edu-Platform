import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center" >
                        <h1>About Us<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                    </div>
                </div>

                <div id="overviews" className="section lb">
                    <div className="container">
                        <div className="section-title row text-center">
                            <div className="col-md-8 offset-md-2">
                                <h3>About</h3>
                                <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                            </div>
                        </div>{/* end title */}

                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="message-box">
                                    <h4>2018 BEST SmartEDU education school</h4>
                                    <h2>Awards Winner Support Center</h2>
                                    <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

                                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque. </p>

                                    <a href="#" className="hover-btn-new orange"><span>Learn More</span></a>
                                </div>{/* end messagebox */}
                            </div>{/* end col */}

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="post-media wow fadeIn">
                                    <img src="/assets/images/about_02.jpg" alt="" className="img-fluid img-rounded" />
                                </div>{/* end media */}
                            </div>{/* end col */}
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="post-media wow fadeIn">
                                    <img src="/assets/images/about_03.jpg" alt="" className="img-fluid img-rounded" />
                                </div>{/* end media */}
                            </div>{/* end col */}

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="message-box">
                                    <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum.</p>

                                    <a href="#" className="hover-btn-new orange"><span>Learn More</span></a>
                                </div>{/* end messagebox */}
                            </div>{/* end col */}

                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                <div className="hmv-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv"><i className="flaticon-achievement"></i></div>
                                    <h3>Mission</h3>
                                    <div className="tr-pa">M</div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv"><i className="flaticon-eye"></i></div>
                                    <h3>Vision</h3>
                                    <div className="tr-pa">V</div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv"><i className="flaticon-history"></i></div>
                                    <h3>History</h3>
                                    <div className="tr-pa">H</div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="testimonials" className="parallax section db parallax-off" style={{ backgroundImage: "url('assets/images/parallax_04.jpg')" }}>
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

export default About