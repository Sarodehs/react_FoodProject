import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="Contact_infobox">
                    <div class="box_1">
                        <i class="material-icons">phone_in_talk</i>
                        <div class="overflow-hidden">
                            <h4>Phone</h4>
                            <p>+01 123-456-4590</p>
                        </div>
                    </div>
                    <div class="box_1">
                        <i class="material-icons">mail</i>
                        <div class="overflow-hidden">
                            <h4>Email</h4>
                            <p>yourmail@gmail.com</p>
                        </div> 
                    </div>
                    <div class="box_1">
                        <i class="material-icons">location_on</i>
                        <div class="overflow-hidden">
                            <h4>Location</h4>
                            <p>800, Lorem Street, US</p>
                        </div>
                    </div>
                </div>
                <footer class="footer_area">
                    <div class="Bg_footer">
                        <h3>About Us</h3>
                        <p>Integer cursus scelerisque ipsum id <br />efficitur. Donec a dui fringilla, gravida <br />lorem ac, semper magna.
                            Aenean <br />rhoncus ac lectus a interdum. Vivamus <br />semper posuere dui, at ornare turpis <br />ultrices sit amet.
                            Nulla cursus lorem ut <br />nisi porta, ac eleifend arcu ultrices.</p>
                    </div>
                    <div class="Bg_footer">
                        <h3>Opening hours</h3>
                        <p>Monday : Closed</p>
                        <p>Tue-Wed : 09am - 10pm</p>
                        <p>Thu-Fri : 09am - 10pm</p>
                        <p>Sat-Sun : 09am - 10pm</p>
                    </div>
                    <div class="Bg_footer">
                        <h3>Contact information</h3>
                        <p class="lead">Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
                        <p class="lead">+01 2000 800 9999</p>
                        <p class="lead">info@admin.com</p>
                    </div>
                    <div class="Bg_footer">
                        <h3>Subscribe</h3>
                        <div class="subsrcibe_form">
                            <form class="subsrcibe_form">
                                <input class="form_input" placeholder="Email Address..." />
                                <button type="submit" class="submit">SUBSCRIBE</button>
                            </form>
                        </div>
                        <ul class="social_media">
                            <li><i class="fa fa-facebook"></i></li>
                            <li><i class="fa fa-twitter"></i></li>
                            <li><i class="fa fa-linkedin"></i></li>
                            <li><i class="fa fa-google-plus"></i></li>
                            <li><i class="fa fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div class="copyright">
                        <p class="company_name">All Rights Reserved.&copy; 2021
                            The Food Place Design By : html design</p>
                    </div>
                </footer> 
            </div>
        )
    }
}


export default Footer;