import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { AiOutlineSearch } from 'react-icons/ai';
class Courses extends React.Component {
    render() {
        return (
            <div >

                <Header />
                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center">
                        <h1>Course Grid 2<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                    </div>
                </div>

                <div id="overviews" className="section wb">
                    <div className="container">
                        <div class="row">

                            <div class="col-lg-9 blog-post-single">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="course-item mb-5">
                                            <div class="image-blog">
                                                <img src="/assets/images/blog_1.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a href="/courses/zeynep-kurs" title="">Zeynep Kurs</a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>Kurs acıklmaa...</p>
                                                </div>
                                            </div>
                                            <div class="course-meta-bot">
                                                <ul>
                                                    <li><i class="fa fa-user" aria-hidden="true"></i>Zeynep Test</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="course-item mb-5">
                                            <div class="image-blog">
                                                <img src="/assets/images/blog_2.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a href="/courses/java-bootcamp" title="">java bootcamp</a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>java öğrenelim...</p>
                                                </div>
                                            </div>
                                            <div class="course-meta-bot">
                                                <ul>
                                                    <li><i class="fa fa-user" aria-hidden="true"></i>Timur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="course-item mb-5">
                                            <div class="image-blog">
                                                <img src="/assets/images/blog_3.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a href="/courses/test2" title="">test2 </a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>test2...</p>
                                                </div>
                                            </div>
                                            <div class="course-meta-bot">
                                                <ul>
                                                    <li><i class="fa fa-user" aria-hidden="true"></i>test teacher</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="course-item mb-5">
                                            <div class="image-blog">
                                                <img src="/assets/images/blog_4.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a href="/courses/test-course" title="">test course</a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>test course...</p>
                                                </div>
                                            </div>
                                            <div class="course-meta-bot">
                                                <ul>
                                                    <li><i class="fa fa-user" aria-hidden="true"></i>test teacher</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                            <div class="col-lg-3 col-12 right-single">
                                <div class="widget-search">
                                    <div class="site-search-area">
                                        <form /* method="GET" */ id="site-searchform"/*  action="/courses" */>
                                            <div>
                                                <input class="input-text form-control" name="search" id="search-k" placeholder="Search..." type="text" />
                                                <button id="searchsubmit" value="Search" type="submit"></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="widget-categories">
                                    <h3 class="widget-title">Categories</h3>
                                    <ul>

                                        <li><a href="#">Programming</a></li>

                                        <li><a href="#">Web Design</a></li>

                                        <li><a href="#">Branding</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>{/* end container */}
                </div>{/* end section */}

                <Footer />
            </div>
        )
    }
}

export default Courses