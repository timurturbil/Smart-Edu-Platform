import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <Header />
                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center">
                        <h1>
                            Timur<span className="m_1">TEACHER</span>
                        </h1>
                    </div>
                </div>

                <div id="overviews" className="section wb">
                    <div className="container">
                        <div className="row">
                            {/* Modal Button */}
                            <div className="col-lg-12 text-center ">
                                <button className="btn btn-lg btn-warning rounded-0 text-white" href="#" data-toggle="modal" data-target="#addCourse"><span>CREATE NEW
                                    COURSE</span></button>
                            </div>

                            <div className="col-lg-12 blog-post-single">
                                <div className="blog-author">
                                    <div className="author-bio">
                                        <h3 className="author_name">COURSE FROM: Timur</h3>
                                    </div>
                                </div>

                            </div>{/* end col */}
                        </div>{/* end row */}
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="course-item mb-5">
                                    <div className="image-blog">
                                        <img src="/assets/images/blog_1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-br">
                                        <div className="course-title">
                                            <h2><a href="/courses/java-bootcamp" title="">java bootcamp</a></h2>
                                        </div>
                                        <div className="course-desc">
                                            <p>java öğrenelim </p>
                                        </div>
                                        <div className="clearfix">
                                            <ul style={{ listStyleType: "none" }}>
                                                <li style={{ float: "left" }}><button className="btn btn-primary rounded-0 text-white" data-toggle="modal" data-target="#updateCourse61853e6dfea59e00151108c4"><span>UPDATE</span></button></li>
                                                <li style={{ float: "right" }}><a /* href="/courses/java-bootcamp?_method=DELETE" */ onClick={() => { if (window.confirm('ARE YOU SURE')) { console.log("course deleted") }; }} className="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* end col */}

                            {/* UPDATE Modal */}
                            <div className="modal fade" id="updateCourse61853e6dfea59e00151108c4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style={{ display: "none" }} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body customer-box">
                                            {/* Tab panes */}
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="Login">
                                                    <form /* method="POST" action="/courses/java-bootcamp?_method=PUT" */ className="form-horizontal">
                                                        <div className="form-group">
                                                            <div className="col-sm-12">
                                                                <input type="text" name="name" value="java bootcamp" className="form-control" placeholder="Course Name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-12">
                                                                <input type="hidden" name="role" className="form-control" value="teacher" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <div className="col-sm-12">
                                                                <textarea rows="8" name="description" className="form-control" placeholder="Course Description" required="">java öğrenelim</textarea>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-12">
                                                                <select className="form-control" name="category">

                                                                    <option value="609ff0460cb1cb8c20bc798d">Programming</option>

                                                                    <option value="609ff08adebd7700158417d7">Web Design</option>

                                                                    <option value="609ff099debd7700158417d8">Branding</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-10">
                                                                <button /* type="submit" */ className="btn btn-light btn-radius btn-brd grd1" style={{ backgroundColor: "#eea412" }}>
                                                                    Submit
                                                                </button>
                                                                <button /* type="submit" */ className="btn btn-light btn-radius btn-brd grd1" data-dismiss="modal" aria-hidden="true" style={{ backgroundColor: "#eea412" }}>
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                {/* ADD Modal */}
                <div className="modal fade" id="addCourse" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body customer-box">
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div className="tab-pane active" id="Login">
                                        <form /* method="POST" action="/courses"  */ className="form-horizontal">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input type="text" name="name" className="form-control" placeholder="Course Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input type="hidden" name="role" className="form-control" value="teacher" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea rows="8" name="description" className="form-control" placeholder="Course Description" required=""></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <select className="form-control" name="category">

                                                        <option value="609ff0460cb1cb8c20bc798d">Programming</option>

                                                        <option value="609ff08adebd7700158417d7">Web Design</option>

                                                        <option value="609ff099debd7700158417d8">Branding</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <button /* type="submit" */ className="btn btn-light btn-radius btn-brd grd1" style={{ backgroundColor: "#eea412" }}>
                                                        Submit
                                                    </button>
                                                    <button /* type="submit" */ className="btn btn-light btn-radius btn-brd grd1" data-dismiss="modal" aria-hidden="true" style={{ backgroundColor: "#eea412" }}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}