import React from "react";


class BlogSingle extends React.Component {
    render() {
        return (
            <div>
                <div class="menu_img">
                    <div class="h2_2">
                        <h2>Blog</h2></div>
                </div>

                <h1 class="blog_h1">Blog</h1>
                <p class="blog_p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="floatleft_1">
                    <img src="assets/Gallery\Blogsingle.jpg" class="floatleft_3" alt="blog" />
                    <div class="blog-date">
                        27 Fab
                    </div>
                </div>
                <div class="floatright_1">
                    <h4 class="blog-categories_1">Search</h4>
                    <div class="blog_search">
                        <input type="text" id="fname" name="fname" placeholder="Search blog" />
                        <button class="search-btn">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    <h4 class="blog-categories_1">Categories</h4>
                   
                    <div class="blog-categories">
                        <ul>
                            <li><p><span>Food</span></p></li>
                            <li><p><span>Pizza</span></p></li>
                            <li><p><span>Drink</span></p></li>
                            <li><p><span>Indian</span></p></li>
                            <li><p><span>Burger</span></p></li>
                            <li><p><span>Music</span></p></li>
                        </ul>
                    </div> 
                </div>
                <div class="innerblog-details">
                    <h3>Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium.</h3>
                    <ul>
                        <li>Posted By : <span>Rubel Ahmed</span></li>
                        <li>|</li>
                        <li>Time : <span>11.30 am</span></li>

                        <p>Vestibulum quis ultricies enim. Quisque eu sapien a erat congue lacinia bibendum ac massa. Morbi vehicula aliquet libero sit amet dictum. Integer vel mauris non magna consequat porttitor. Nulla facilisi. Suspendisse posuere, elit eu fringilla congue, turpis magna tempor odio, a placerat magna tortor a mauris. Phasellus lobortis turpis dui, eget mollis ex vestibulum auctor. Nunc viverra leo ut accumsan aliquet. Maecenas aliquam dolor eget felis bibendum blandit.</p>
                        <p>Nunc iaculis, massa eget pellentesque mollis, nulla mauris aliquam eros, vitae condimentum leo nisl ut purus. Etiam nibh diam, vehicula non tincidunt id, consequat nec ex. Praesent vulputate sapien non tellus ultrices hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque arcu erat. Curabitur dapibus fringilla porta. Sed in neque sit amet ante feugiat blandit. Nulla fringilla purus diam, cursus venenatis diam luctus nec.</p>
                        <blockquote class="blog-quote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat lacus. Nunc nisi velit, consectetur vitae ex porttitor, placerat scelerisque mauris. Phasellus sit amet tincidunt metus, quis tempus ex. Quisque in lorem ut mi ullamcorper suscipit eu nec purus. Nam maximus sagittis iaculis.</p>
                        </blockquote>
                        <p>Vestibulum quis ultricies enim. Quisque eu sapien a erat congue lacinia bibendum ac massa. Morbi vehicula aliquet libero sit amet dictum. Integer vel mauris non magna consequat porttitor. Nulla facilisi. Suspendisse posuere, elit eu fringilla congue, turpis magna tempor odio, a placerat magna tortor a mauris.</p>
                    </ul>
                </div>

                <div class="recentpost-box">
                    <h3>Recent Post</h3>
                    <div class="recent-img">
                        <img src="assets/Gallery/small-1.jpg" class="recent-img_1" alt="blog" /></div>
                    <div class="recent-info">
                        <ul>
                            <li class="recent-info_1">Posted By :<span>Rubel Ahmed</span></li>
                            <li class="recent-info_2">|</li>
                            <li class="recent-info_2">Time : <span>11.30 am</span></li>
                        </ul>
                        <h4>Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium.</h4>

                    </div>

                    <br /><br /><br /> <div class="recent-img">
                        <img src="assets/Gallery/small-2.jpg" class="recent-img_1" alt="blog" /></div>
                    <div class="recent-info">
                        <ul>
                            <li class="recent-info_1">Posted By : <span>Rubel Ahmed</span></li>
                            <li class="recent-info_2">|</li>
                            <li class="recent-info_2">Time : <span>11.30 am</span></li>
                        </ul>
                        <h4>Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium.</h4>

                    </div>

                    <br /><br /><br /> <div class="recent-img">
                        <img src="assets/Gallery/small-3.jpg" class="recent-img_1" alt="blog" /></div>
                    <div class="recent-info">
                        <ul>
                            <li class="recent-info_1">Posted By : <span>Rubel Ahmed</span></li>
                            <li class="recent-info_2">|</li>
                            <li class="recent-info_2">Time : <span>11.30 am</span></li>
                        </ul>
                        <h4>Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium.</h4>

                    </div>

                    <br /><br /><br /> <div class="recent-img">
                        <img src="assets/Gallery/small-4.jpg" class="recent-img_1" alt="blog" /></div>
                    <div class="recent-info">
                        <ul>
                            <li class="recent-info_1">Posted By : <span>Rubel Ahmed</span></li>
                            <li class="recent-info_2">|</li>
                            <li class="recent-info_2">Time : <span>11.30 am</span></li>
                        </ul>
                        <h4>Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium.</h4>
                    </div>

                    <br /><br /><br /><h3>Recent Tag</h3>
                    <div class="blog-tag-box">
                        <ul>
                            <li><p>Food</p></li>
                            <li><p>Drink</p></li>
                            <li><p>Nature</p></li>
                            <li><p>Italian</p></li>
                            <li><p>Indian</p></li>
                            <li><p>Fashion</p></li>
                        </ul>
                    </div>
                </div>

                <div class="blog-comment-box">
                    <h3>Comments</h3>
                    <div class="comment-item">
                        <div class="comment-item-left">
                            <img src="assets/Gallery/avatar.jpg" alt="blog" />
                        </div>
                        <div class="comment-item-right">
                            <p href="#">Rubel Ahmed</p>
                            <i class="fa fa-clock-o comment-item-right_1"  aria-hidden="true"></i>Time : <span>11.30 am</span>
                            <div class="des-l">
                                <p>Morbi lacinia ultrices lorem id tincidunt. Cras id dui risus. Pellentesque consectetur id mi sed pharetra. Proin imperdiet gravida nisl, sit amet varius urna. In auctor.</p>
                            </div>
                            <p href="#" class="right-btn-re"><i class="fa fa-reply" aria-hidden="true"></i> Reply</p>
                        </div>
                    </div>
                    <div class="comment-item children">
                        <div class="comment-item-left">
                            <img src="assets/Gallery/avatar.jpg" class="comment-item" alt="blog" />
                        </div>
                        <div class="comment-item-right">
                            <p class="comment-item" href="#">Admin</p>
                            <i class="fa fa-clock-o comment-item-right_1"aria-hidden="true"></i>Time : <span>1.30 pm</span>
                            <div class="des-l">
                                <p class="comment-item">Morbi lacinia ultrices lorem id tincidunt. Cras id dui risus. Pellentesque consectetur id mi sed pharetra. Proin imperdiet gravida nisl, sit amet varius urna. In auctor.</p>
                            </div>
                            <p href="#" class="right-btn-re"><i class="fa fa-reply" aria-hidden="true"></i> Reply</p>
                        </div>
                    </div>
                    <div class="comment-item">
                        <div class="comment-item-left">
                            <img src="assets/Gallery/avatar.jpg" alt="blog" />
                        </div>
                        <div class="comment-item-right">
                            <p href="#">Rubel Ahmed</p>
                            <i class="fa fa-clock-o comment-item-right_1"aria-hidden="true"></i>Time : <span>11.30 am</span>
                            <div class="des-l">
                                <p>Morbi lacinia ultrices lorem id tincidunt. Cras id dui risus. Pellentesque consectetur id mi sed pharetra. Proin imperdiet gravida nisl, sit amet varius urna. In auctor.</p>
                            </div>
                            <p href="#" class="right-btn-re"><i class="fa fa-reply" aria-hidden="true"></i> Reply</p>
                        </div>
                    </div>
                </div>

                <div class="comment-respond-box">
                    <h3 class="comment-respond">Leave your comment</h3>
                    <div class="comment-form">
                        <input type="text" id="fname" name="fname" placeholder="Your Name" /><br />
                        <input type="text" id="fname" name="fname" placeholder="Your Email" />
                    </div>
                    <div class="comment-textarea">
                        <textarea rows="5" placeholder="Your Message">
                        </textarea>
                    </div>
                    <div class="submit_3">
                        <button type="submit" class="comment-respond_1">Send Comment</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSingle;