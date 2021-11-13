import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import createCourse from '../controllers/course/createCourse';
import deleteCourseFromUser from '../controllers/course_user/deleteCourseFromUser';
import getAllCoursesOfUser from '../controllers/course_user/getAllCourseOfUser';
import { useHistory } from "react-router-dom";
export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [coursesOfUser, setCoursesOfUser] = useState([]);
    const [coursName, setCoursName] = useState([]);
    const [courseDescription, setCourseDescription] = useState([]);
    var dismissModal;
    async function createCourseFunction() {
        await createCourse(
            user._id,
            coursName,
            courseDescription,
            document.getElementById("selectItem").value == "Programming" ? 1 : document.getElementById("selectItem").value == "Web Design" ? 2 : 3, null,
            user.name)
        dismissModal.click();
        pushToPage('courses')
    }
    useEffect(() => {
        getAllCoursesOfUser(user._id).then((courses) => {
            setCoursesOfUser(courses)
        });
    }, [getAllCoursesOfUser]);

    console.log(coursesOfUser + "coursesOfUser")
    let history = useHistory();
    const pushToPage = (page) => {
        history.push({
            pathname: `/${page}`,
            /* search: '?query=abc', */
            /* state: { detail: 'some_value' } */
        });
    };
    return (
        <div>
            <Header />
            <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                <div className="container text-center">
                    <h1>
                        {user.name}<span className="m_1">{user.type == 1 ? "Student" : "Teacher"}</span>
                    </h1>
                </div>
            </div>

            <div id="overviews" className="section wb">
                <div className="container">
                    <div className="row">
                        {/* Modal Button */}
                        {user.type == 1 ? "" : <div className="col-lg-12 text-center ">
                            <button className="btn btn-lg btn-warning rounded-0 text-white" href="#" data-toggle="modal" data-target="#addCourse"><span>CREATE NEW
                                COURSE</span></button>
                        </div>}

                        <div className="col-lg-12 blog-post-single">
                            <div className="blog-author">
                                <div className="author-bio">
                                    {user.type == 1 ? <h3 className="author_name">{"Courses Enrolled by: " + user.name}</h3>
                                        : <h3 className="author_name">{"COURSE FROM: " + user.name}</h3>}
                                </div>
                            </div>

                        </div>{/* end col */}
                    </div>{/* end row */}
                    <div className="row mt-5">
                        {user.type == 1 ? <>
                            {coursesOfUser.map((course, index) => {
                                return (
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="course-item mb-5">
                                            <div className="image-blog">
                                                <img src="/assets/images/blog_1.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a href="/courses/deneme" title="">{course.name} </a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>asdwad </p>

                                                    <input type="hidden" name="course_id" value="618a8c45742505001529e7d8" />
                                                    <button class="btn btn-lg btn-danger text-white" onClick={() => {
                                                        console.log(user._id, course._id)
                                                        deleteCourseFromUser(user._id, course._id).then(() => {
                                                            getAllCoursesOfUser(user._id).then((courses) => {
                                                                setCoursesOfUser(courses)
                                                            });
                                                        })
                                                    }}><span>RELEASE</span></button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );

                            })}</> : <>
                            {coursesOfUser.map((course, index) => {
                                return (
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="course-item mb-5">
                                            <div class="image-blog">
                                                <img src="assets/images/blog_1.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <div class="course-br">
                                                <div class="course-title">
                                                    <h2><a title="">{course.name}</a></h2>
                                                </div>
                                                <div class="course-desc">
                                                    <p>{course.description} </p>
                                                </div>
                                                <div class="clearfix">
                                                    <ul style={{ listStyleType: "none" }}>
                                                        <li style={{ float: "left" }}><button class="btn btn-primary rounded-0 text-white" data-toggle="modal" data-target="#updateCourse61900da88ef7a50015736f8f"><span>UPDATE</span></button></li>
                                                        <li style={{ float: "right" }}><a  onclick="return confirm('ARE YOU SURE')" class="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}</>}

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

                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input type="text" name="name" className="form-control" placeholder="Course Name" onChange={(e) => setCoursName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input type="hidden" name="role" className="form-control" value="teacher" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <textarea rows="8" name="description" className="form-control" placeholder="Course Description" required="" onChange={(e) => setCourseDescription(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <select id="selectItem" className="form-control" name="category">

                                                <option value="609ff0460cb1cb8c20bc798d">Programming</option>

                                                <option value="609ff08adebd7700158417d7">Web Design</option>

                                                <option value="609ff099debd7700158417d8">Branding</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <button className="btn btn-light btn-radius btn-brd grd1" onClick={() => createCourseFunction()} style={{ backgroundColor: "#eea412" }}>
                                                Submit
                                            </button>
                                            <button ref={submitbutton => dismissModal = submitbutton} className="btn btn-light btn-radius btn-brd grd1" data-dismiss="modal" aria-hidden="true" style={{ backgroundColor: "#eea412" }}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
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


{/* <div className="course-br">
                                            <div className="course-title">
                                                <h2><a href="/courses/java-bootcamp" title="">{course.name}</a></h2>
                                            </div>
                                            <div className="course-desc">
                                                <p>{course.description} </p>
                                            </div>
                                            <div className="clearfix">
                                                <ul style={{ listStyleType: "none" }}>
                                                    <li style={{ float: "left" }}><button className="btn btn-primary rounded-0 text-white" data-toggle="modal" data-target="#updateCourse61853e6dfea59e00151108c4"><span>UPDATE</span></button></li>
                                                    <li style={{ float: "right" }}><a  onClick={() => { if (window.confirm('ARE YOU SURE')) { console.log("course deleted") }; }} className="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></li>
                                                </ul>
                                            </div>
                                        </div> */}