import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

class BlogSingle extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="all-title-box" style={{ backgroundImage: "url('assets/images/banner.jpg')", objectFit: "intrinsic size", width: "100%", height: "100%" }}>
                    <div className="container text-center">
                        <h1>Blog Single<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
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
                                        <div className="post-date">
                                            <span className="day">30</span>
                                            <span className="month">Nov</span>
                                        </div>
                                        <div className="meta-info-blog">
                                            <span><i className="fa fa-calendar"></i> <a href="#">May 11, 2015</a> </span>
                                            <span><i className="fa fa-tag"></i>  <a href="#">News</a> </span>
                                            <span><i className="fa fa-comments"></i> <a href="#">12 Comments</a></span>
                                        </div>
                                        <div className="blog-title">
                                            <h2><a href="#" title="">perferendis doloribus asperiores.</a></h2>
                                        </div>
                                        <div className="blog-desc">
                                            <p>Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... </p>
                                            <blockquote className="default">
                                                Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.
                                            </blockquote>
                                            <p>Phasellus tristique commodo libero, eget dignissim turpis dignissim quis. Morbi sit amet laoreet nibh, gravida scelerisque felis. Phasellus ultrices pellentesque ligula et viverra. Integer elementum, risus et tempor ultricies, libero turpis pellentesque massa, at facilisis erat nunc hendrerit erat. Praesent rhoncus, augue nec condimentum porta, magna dui volutpat augue, vitae blandit magna quam in massa. Fusce a rhoncus diam. Proin nec lacinia nibh. Praesent sed nisi sed purus dictum laoreet.</p>
                                            <p>Duis at tortor augue. Ut et justo consequat, facilisis lectus facilisis, tincidunt massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vel vestibulum urna. Fusce sed magna posuere, vehicula odio vitae, tempor arcu. Pellentesque eget felis sed eros maximus elementum ultrices a elit. Sed ac sodales enim.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-author">
                                    <div className="author-bio">
                                        <h3 className="author_name"><a href="#">Tom Jobs</a></h3>
                                        <h5>CEO at <a href="#">SmartEDU</a></h5>
                                        <p className="author_det">
                                            Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus omnis saperet docendi nec, eos ea alii molestiae aliquand.
                                        </p>
                                    </div>
                                    <div className="author-desc">
                                        <img src="/assets/images/author.jpg" alt="about author" />
                                        <ul className="author-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="blog-comments">
                                    <h4>Comments (3)</h4>
                                    <div id="comment-blog">
                                        <ul className="comment-list">
                                            <li className="comment">
                                                <div className="avatar"><img alt="" src="/assets/images/avatar-01.jpg" className="avatar" /></div>
                                                <div className="comment-container">
                                                    <h5 className="comment-author"><a href="#">John Smith</a></h5>
                                                    <div className="comment-meta">
                                                        <a href="#" className="comment-date link-style1">February 22, 2015</a>
                                                        <a className="comment-reply-link link-style3" href="#respond">Reply »</a>
                                                    </div>
                                                    <div className="comment-body">
                                                        <p>Ne omnis saperet docendi nec, eos ea alii molestiae aliquand. Latine fuisset mele, mandamus atrioque eu mea, wi forensib argumentum vim an. Te viderer conceptam sed, mea et delenit fabellas probat.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div className="avatar"><img alt="" src="/assets/images/avatar-02.jpg" className="avatar" /></div>
                                                <div className="comment-container">
                                                    <h5 className="comment-author"><a href="#">John Smith</a></h5>
                                                    <div className="comment-meta">
                                                        <a href="#" className="comment-date link-style1">February 22, 2015</a>
                                                        <a className="comment-reply-link link-style3" href="#respond">Reply »</a>
                                                    </div>
                                                    <div className="comment-body">
                                                        <p>Ne omnis saperet docendi nec, eos ea alii molestiae aliquand. Latine fuisset mele, mandamus atrioque eu mea, wi forensib argumentum vim an. Te viderer conceptam sed, mea et delenit fabellas probat.</p>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="avatar"><img alt="" src="/assets/images/avatar-03.jpg" className="avatar" /></div>
                                                        <div className="comment-container">
                                                            <h5 className="comment-author"><a href="#">Thomas Smith</a></h5>
                                                            <div className="comment-meta"><a href="#" className="comment-date link-style1">February 14, 2015</a><a className="comment-reply-link link-style3" href="#respond">Reply »</a></div>
                                                            <div className="comment-body">
                                                                <p>Labores pertinax theophrastus vim an. Error ditas in sea, per no omnis iisque nonumes. Est an dicam option, ad quis iriure saperet nec, ignota causae inciderint ex vix. Iisque qualisque imp duo eu, pro reque consequ untur. No vero laudem legere pri, error denique vis ne, duo iusto bonorum.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comments-form">
                                    <h4>Leave a comment</h4>
                                    <div className="comment-form-main">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input className="form-control" name="commenter-name" placeholder="Name" id="commenter-name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input className="form-control" name="commenter-email" placeholder="Email" id="commenter-email" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input className="form-control" name="commenter-url" placeholder="Website URL" id="commenter-url" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="commenter-message" placeholder="Message" id="commenter-message" cols="30" rows="2"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 post-btn">
                                                    <button className="hover-btn-new orange"><span>Post Comment</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>{/* end col */}
                            <div className="col-lg-3 col-12 right-single">
                                <div className="widget-search">
                                    <div className="site-search-area">
                                        <form method="get" id="site-searchform" action="#">
                                            <div>
                                                <input className="input-text form-control" name="search-k" id="search-k" placeholder="Search keywords..." type="text" />
                                                <input id="searchsubmit" value="Search" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget-categories">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul>
                                        <li><a href="#">Political Science</a></li>
                                        <li><a href="#">Business Leaders Guide</a></li>
                                        <li><a href="#">Become a Product Manage</a></li>
                                        <li><a href="#">Language Education</a></li>
                                        <li><a href="#">Micro Biology</a></li>
                                        <li><a href="#">Social Media Management</a></li>
                                    </ul>
                                </div>
                                <div className="widget-tags">
                                    <h3 className="widget-title">Search Tags</h3>
                                    <ul className="tags">
                                        <li><a href="#"><b>business</b></a></li>
                                        <li><a href="#"><b>jquery</b></a></li>
                                        <li><a href="#">corporate</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">css3</a></li>
                                        <li><a href="#"><b>theme</b></a></li>
                                        <li><a href="#"><b>html5</b></a></li>
                                        <li><a href="#"><b>mysql</b></a></li>
                                        <li><a href="#">multipurpose</a></li>
                                        <li><a href="#">responsive</a></li>
                                        <li><a href="#">premium</a></li>
                                        <li><a href="#">javascript</a></li>
                                        <li><a href="#"><b>Best jQuery</b></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                <Footer />

            </div>
        )
    }
}

export default BlogSingle