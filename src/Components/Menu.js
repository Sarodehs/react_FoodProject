import React from "react";


class Menu extends React.Component {
    render() {
        return (
            <div>
                <div class="menu_img">
                    <div class="h2_2">
                        <h2>Special Menu</h2></div>
                </div>
                <h1 class="Special_h1">Special Menu</h1>
                <p class="Special_p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="display_one">
                    <ul>
                        <li class="b_1 four active">ALL</li>
                        <li class="b_1 four">DRINKS</li>
                        <li class="b_1 four">LUNCH</li>
                        <li class="b_1 four">DINNER</li>
                    </ul>
                </div>

                <div class="special_menu">
                    <div class="img_drinks">
                        <img src="assets/image/Drinks_1.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Drinks 1</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$7.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Drinks_2.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Drinks 2</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$9.79</h5>
                        </div>
                    </div>
                    <div class="img_drinks">
                        <img src="assets/image/Drinks_3.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Drinks 3</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$10.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Lunch_1.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Lunch 1</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$15.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Lunch_2.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Lunch 2</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$18.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Lunch_3.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Lunch 3</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$20.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Dinner_1.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Dinner 1</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$25.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Dinner_2.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Dinner 2</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$22.79</h5>
                        </div>
                    </div>

                    <div class="img_drinks">
                        <img src="assets/image/Dinner_3.jpg" alt="drinks" />
                        <div class="text">
                            <h2>Special Dinner 3</h2>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5>$24.79</h5>
                        </div>
                    </div>
                </div>

                <div class="middle_img">

                    <p class="p_2">" If you're not the one cooking, stay out of the way and compliment the chef.  "
                        <br /><span class="p_3">Michael Strahan</span> </p>
                </div> <br />


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
export default Menu;