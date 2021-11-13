import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { AiOutlineSearch } from 'react-icons/ai';
import getAllCourses from '../controllers/course/getAllCourses';

import { useHistory } from "react-router-dom";
import setCourseDetail from '../controllers/course/setCourseDetail';
export default function Courses() {
    let history = useHistory();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getAllCourses().then((courses) => {
            setCourses(courses)
        });
    }, [getAllCourses]);

    const pushToPage = event => {
        history.push({
            pathname: '/course-detail',
            /* search: '?query=abc', */
            /* state: { detail: 'some_value' } */
        });
    };
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
                    <div className="row">

                        <div className="col-lg-9 blog-post-single">
                            <div className="row">

                                {courses.map((course, index) => {
                                    return (
                                        <div className="col-lg-6 col-md-6 col-12" onClick={() => setCourseDetail(course).then(() => pushToPage())}>
                                            <div className="course-item mb-5">
                                                <div className="image-blog">
                                                    <img src="/assets/images/blog_1.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="course-br">
                                                    <div className="course-title">
                                                        <h2><a href="/courses/zeynep-kurs" title="">{course.name}</a></h2>
                                                    </div>
                                                    <div className="course-desc">
                                                        <p>{course.description}</p>
                                                    </div>
                                                </div>
                                                <div className="course-meta-bot">
                                                    <ul>
                                                        <li><i className="fa fa-user" aria-hidden="true"></i>{course.teacher_name}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>
                        <div className="col-lg-3 col-12 right-single">
                            <div className="widget-search">
                                <div className="site-search-area">
                                    <form /* method="GET" */ id="site-searchform"/*  action="/courses" */>
                                        <div>
                                            <input className="input-text form-control" name="search" id="search-k" placeholder="Search..." type="text" />
                                            <button id="searchsubmit" value="Search" type="submit"></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="widget-categories">
                                <h3 className="widget-title">Categories</h3>
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