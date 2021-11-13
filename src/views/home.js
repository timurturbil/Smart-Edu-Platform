import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import getAllCourses from '../controllers/course/getAllCourses';
export default function Home() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getAllCourses().then((courses) => {
            setCourses(courses)
        });
    }, [getAllCourses]);
    return (
        <div>
            <Header />
            <div id="carouselExampleControls" className="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox" style={{ height: "700px" }}>
                    <div className="carousel-item active">
                        <div id="home" className="first-section" style={{ backgroundImage: "url('/assets/images/slider-01.jpg')" }}>
                            <div className="dtab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 text-right">
                                            <div className="big-tagline">
                                                <h2><strong>SmartEDU </strong> education College</h2>
                                                <p className="lead">With Landigoo responsive landing page template, you can promote your all hosting, domain and email services. </p>
                                                <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                            </div>
                                        </div>
                                    </div>{/* end row */}
                                </div>{/* end container */}
                            </div>
                        </div>{/* end section */}
                    </div>
                    <div className="carousel-item">
                        <div id="home" className="first-section" style={{ backgroundImage: "url('/assets/images/slider-02.jpg')" }}>
                            <div className="dtab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 text-left">
                                            <div className="big-tagline">
                                                <h2 data-animation="animated zoomInRight">SmartEDU <strong>education school</strong></h2>
                                                <p className="lead" data-animation="animated fadeInLeft">With Landigoo responsive landing page template, you can promote your all hosting, domain and email services. </p>
                                                <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                            </div>
                                        </div>
                                    </div>{/* end row */}
                                </div>{/* end container */}
                            </div>
                        </div>{/* end section */}
                    </div>
                    <div className="carousel-item">
                        <div id="home" className="first-section" style={{ backgroundImage: "url('/assets/images/slider-03.jpg')" }}>
                            <div className="dtab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 text-center">
                                            <div className="big-tagline">
                                                <h2 data-animation="animated zoomInRight"><strong>VPS Servers</strong> Company</h2>
                                                <p className="lead" data-animation="animated fadeInLeft">1 IP included with each server
                                                    Your Choice of any OS (CentOS, Windows, Debian, Fedora)
                                                    FREE Reboots</p>
                                                <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                            </div>
                                        </div>
                                    </div>{/* end row */}
                                </div>{/* end container */}
                            </div>
                        </div>{/* end section */}
                    </div>
                    {/* Left Control */}
                    <a className="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    {/* Right Control */}
                    <a className="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div id="overviews" className="section wb">
                <div className="container">
                    <div className="section-title row text-center">
                        <div className="col-md-8 offset-md-2">
                            <h3>About</h3>
                            <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                        </div>
                    </div>
                    {courses.map((course, index) => {
                        if(index > 1) return "";
                        return (
                            <div className="row align-items-center" key={index}>
                                {index % 2 !== 0 ? <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="post-media wow fadeIn">
                                        <img src={`/assets/images/about_0${index + 2}.jpg`} alt="" className="img-fluid img-rounded" />
                                    </div>
                                </div> : ""}
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="message-box">
                                        <h2>{course.name}</h2>
                                        <p>{course.description}</p>
                                        <a href="#" className="hover-btn-new orange"><span>Learn More</span></a>
                                    </div>
                                </div>

                                {index % 2 === 0 ? <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="post-media wow fadeIn">
                                        <img src={`/assets/images/about_0${index + 2}.jpg`} alt="" className="img-fluid img-rounded" />
                                    </div>
                                </div> : ""}
                            </div>
                        );
                    })}


                </div>{/* end container */}
            </div>



            <div className="section cl">
                <div className="container">
                    <div className="row text-left stat-wrap">
                        <div className="col-md-4 col-sm-4 col-xs-12" style={{ backgroundColor: "#eea412" }}>
                            <span className="global-radius icon_wrap effect-1 alignleft" style={{ backgroundColor: "white", color: "black" }} ><i className="flaticon-study"></i></span>
                            <p className="stat_count">12000</p>
                            <h2 style={{ color: "white" }}>Students</h2>
                        </div>{/* end col */}

                        <div className="col-md-4 col-sm-4 col-xs-12" style={{ backgroundColor: "#eea412" }}>
                            <span data-scroll className="global-radius icon_wrap effect-1 alignleft" style={{ backgroundColor: "white", color: "black" }}><i className="flaticon-online"></i></span>
                            <p className="stat_count">240</p>
                            <h2 style={{ color: "white" }}>Courses</h2>
                        </div>{/* end col */}

                        <div className="col-md-4 col-sm-4 col-xs-12" style={{ backgroundColor: "#eea412" }}>
                            <span data-scroll className="global-radius icon_wrap effect-1 alignleft" style={{ backgroundColor: "white", color: "black" }}><i className="flaticon-years"></i></span>
                            <p className="stat_count">55</p>
                            <h2 style={{ color: "white" }}>Years Completed</h2>
                        </div>{/* end col */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </div>{/* end section */}
            <Footer />
        </div>
    );
}


