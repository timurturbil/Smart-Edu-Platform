import Footer from "../components/footer";
import Header from "../components/header";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import addCourseToUser from "../controllers/course_user/addCourse";
export default function CourseDetail(props) {
    const course_detail = useSelector((state) => state.course.courseDetail)
    const user = JSON.parse(localStorage.getItem("user"));
    let history = useHistory();
    const pushToPage = (page) => {
        history.push({
            pathname: `/${page}`,
            /* search: '?query=abc', */
            /* state: { detail: 'some_value' } */
        });
    };
    const addCourseToUserFunction = () => {
        addCourseToUser(user._id, course_detail._id).then(() => {
            pushToPage('dashboard');
        })
    }
    return (
        <div >
            <Header />
            <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                <div className="container text-center">
                    <h1>{course_detail.teacher_name}<span className="m_1">{course_detail.description}</span></h1>
                </div>
            </div>

            <div id="overviews" className="section wb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 blog-post-single">
                            <div className="blog-item">
                                <div className="image-blog">
                                    <img src="/assets/images/blog_single.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className="post-content">
                                    <div class="post-date">

                                        <input type="hidden" name="course_id" value="618a8c45742505001529e7d8" />
                                        <button class="btn btn-lg btn-warning text-white" onClick={() => addCourseToUserFunction()}><span>ENROLL</span></button>

                                    </div>
                                    <div className="meta-info-blog">
                                        <span><i className="fa fa-calendar"></i> <a href="#">May 11, 2015</a> </span>
                                    </div>
                                    <div className="blog-title">
                                        <h2><a href="#" title=""></a>{course_detail.name}</h2>
                                    </div>
                                    <div className="blog-desc">

                                        <blockquote className="default">
                                            {course_detail.description}
                                        </blockquote>

                                    </div>
                                </div>
                            </div>

                            <div className="blog-author">
                                <div className="author-bio">
                                    <h3 className="author_name"><a href="#">{course_detail.teacher_name}</a></h3>

                                </div>
                            </div>

                        </div>{/* end col */}
                        <div className="col-lg-3 col-12 right-single">
                            <div className="widget-search">
                                <div className="site-search-area">
                                    <form method="GET" id="site-searchform" action="/courses">
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

                                    <li><a href="/courses?categories=programming">Programming</a></li>

                                    <li><a href="/courses?categories=web-design">Web Design</a></li>

                                    <li><a href="/courses?categories=branding">Branding</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>{/* end row */}
                </div>{/* end container */}
            </div>{/* end section */}
            <Footer />
        </div>
    );
}