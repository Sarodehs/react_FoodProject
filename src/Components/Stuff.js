import React from "react";


class Stuff extends React.Component {
    render() {
        return (
            <div>
                <div class="menu_img">
                    <div class="h2_2">
                        <h2>Stuff</h2>
                    </div>
                </div>

                <h1 class="Stuff_h1">Stuff</h1>
                <p class="Stuff_p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="our_team  mar" >
                    <img src="assets/Gallery/Person_img1.jpg" alt="our_team"class="img_hig"/>
                        <div class="content">
                            <h3 class="name">Williamson</h3>
                            <span class="post">Web Developer</span>
                            <ul class="social">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-twitter"></i></li>
                                <li><i class="fa fa-google-plus"></i></li>
                            </ul>
                        </div>
                </div>

                <div class="our_team mar" >
                    <img src="assets/Gallery/Person_img2.jpeg" alt="our_team"class="img_hig"/>
                        <div class="content">
                            <h3 class="name">Thomson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-twitter"></i></li>
                                <li><i class="fa fa-google-plus"></i></li>
                            </ul>
                        </div>
                </div>

                <div class="our_team mar" >
                    <img src="assets/Gallery/Person_img3.jpeg" alt="our_team"class="img_hig"/>
                        <div class="content">
                            <h3 class="name">Edison</h3>
                            <span class="post">UI Designer</span>
                            <ul class="social">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-twitter"></i></li>
                                <li><i class="fa fa-google-plus"></i></li>
                            </ul>
                        </div>
                </div>

                <h1 class="Cust_reviews_h1">Customer Reviews</h1>
                <p class="Cust_reviews_p1">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="Cust_reviews">
                    <img src="assets/Gallery/Profile_1.jpg" alt="gallery" />
                    <h4 class="Name_1"><strong>Cris Fox</strong></h4>
                    <p class="Desig_1">CEO at Might Tech.</p>
                    <p class="Cust_reviews_p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.
                        <br />Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus.
                        <br />Suspendisse varius nibh non aliquet.
                    </p>
                </div>
            </div>
        )
    }
}

export default Stuff;