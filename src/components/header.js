import React, { useState } from 'react';
import createUser from '../controllers/user/createUser';
import loginUser from '../controllers/auth/loginUser';
import { useHistory } from "react-router-dom";
import logoutUser from '../controllers/auth/logoutUser';
export default function Header() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    var loginElement;
    var dismissModal;
    var user = localStorage.getItem("user")
    var isUserLogin = JSON.parse(user) != null ? true : false;
    console.log(`isUserLogin ${isUserLogin}`)
    let history = useHistory();
    function getURL(page) {
        var url = window.location.href.split('3000/')[1];
        if (page == url) {
            return "active";
        } else {
            return ""
        }
    }
    const pushToPage = (page) => {
        history.push({
            pathname: `/${page}`,
            /* search: '?query=abc', */
            /* state: { detail: 'some_value' } */
        });
    };
    function registerUser() {
        var user = {
            "name": name,
            "email": email,
            "type": document.getElementById("selectItem").value == "Student" ? 1 : 2,
            "password": password,
        }
        createUser(user);
        setname("");
        setemail("");
        setpassword("");
        loginElement.click();
    }

    return (
        <div>

            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        {/* <div className="modal-header tit-up">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">Customer Login</h4>
                            </div> */}
                        <div className="modal-body customer-box">
                            <ul className="nav nav-tabs">
                                <li><a ref={a => loginElement = a} className="active" href="#Login" data-toggle="tab">Login</a></li>
                                <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="Login">
                                    {/*  <form role="form" className="form-horizontal"> */}
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="email1" placeholder="Email" type="email" onChange={(e) => setemail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" onChange={(e) => setpassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <button /* type="submit" */ className="btnss btn-light btn-radius btn-brd grd1" style={{ backgroundColor: "#eea412" }} onClick={() => loginUser({ email: email, password: password }).then((e) => {
                                                if (e) {
                                                    dismissModal.click();
                                                    pushToPage("dashboard")
                                                }
                                            })}>
                                                Submit
                                            </button>
                                            {/*  <a className="for-pwd" href="javascript:;">Forgot your password?</a> */}
                                        </div>
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className="tab-pane" id="Registration">
                                    <form role="form" className="form-horizontal">
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input className="form-control" value={name} placeholder="Name" type="text" onChange={(e) => setname(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input className="form-control" value={email} id="email" placeholder="Email" type="email" onChange={(e) => setemail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="col-sm-12">
                                                <select id="selectItem" class="form-control" name="role">
                                                    <option>Student</option>
                                                    <option>Teacher</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input className="form-control" value={password} id="password" placeholder="Password" type="password" onChange={(e) => setpassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <button type="button" className="btn btn-light btn-radius btn-brd grd1" style={{ backgroundColor: "#eea412" }} onClick={() => registerUser()}>
                                                    Save &amp; Continue
                                                </button>
                                                <button ref={submitbutton => dismissModal = submitbutton} type="submit" class="btn btn-light btn-radius btn-brd grd1" style={{ backgroundColor: "#eea412" }} data-dismiss="modal" aria-hidden="true">
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
            <header className="top-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index">
                            <img src="/assets/images/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbars-host">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${getURL("index")}`}><a className="nav-link" /* href="index" */ onClick={() => pushToPage('index')}>Home</a></li>
                                <li className={`nav-item ${getURL("about")}`}><a className="nav-link" /* href="about" */ onClick={() => pushToPage('about')}>About Us</a></li>
                                <li className={`nav-item ${getURL("courses")}`}>
                                    <a className="nav-link " /* href="courses" */ onClick={() => pushToPage('courses')}>Courses </a>
                                    {/* <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                            <a className="dropdown-item" href="courses">Course Grid 2 </a>
                                            <a className="dropdown-item" href="course-grid-3">Course Grid 3 </a>
                                            <a className="dropdown-item" href="course-grid-4">Course Grid 4 </a>
                                        </div> */}
                                </li>
                                {isUserLogin ? <li className={`nav-item ${getURL("dashboard")}`}><a className="nav-link" /* href="dashboard" */ onClick={() => pushToPage('dashboard')}>Dashboard</a></li> : ""}
                                {/* <li className={`nav-item dropdown ${getURL("blog", "blog-single")}`}>
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                            <a className="dropdown-item" href="blog">Blog </a>
                                            <a className="dropdown-item" href="blog-single">Blog single </a>
                                        </div>
                                    </li>
                                    <li className={`nav-item ${getURL("teachers")}`}><a className="nav-link" href="teachers">Teachers</a></li>
                                    <li className={`nav-item ${getURL("pricing")}`}><a className="nav-link" href="pricing">Pricing</a></li> */}
                                <li className={`nav-item ${getURL("contact")}`}><a className="nav-link" /* href="contact" */ onClick={() => pushToPage('contact')}>Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {isUserLogin ? <li><a className="hover-btn-new log orange" onClick={() => logoutUser().then(() => pushToPage('index'))} /* data-target="#login" */ style={{ marginRight: "10px" }}><span><i class="fa fa-sign-in" aria-hidden="true"></i></span></a></li> :
                                    <li><a className="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login" style={{ marginRight: "10px" }}><span><i class="fa fa-sign-in" aria-hidden="true"></i></span></a></li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}