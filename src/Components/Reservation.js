import React from "react";


class Reservation extends React.Component {
    render() {
        return (
            <div>
                <div class="menu_img">
                    <div class="h2_2">
                        <h2>Reservation</h2>
                    </div>
                </div>

                <h1 class="Reservation_h1">Reservation</h1>
                <p class="Reservation_p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="Reserve_left">
                    <h3>Book a Table</h3>
                    <div class="Reserve_form1">
                        <input type="date" name="date" value="" equired data-error="Please enter Date" />
                        <input type="time" name="time" value="" equired data-error="Please enter Date" />


                        <select class="select_2" placeholder="Select person">
                            <option disabled selected>Select person</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                </div>

                <div class="Reserve_right">
                    <h3>Contact Details</h3>
                    <div class="Reserve_form2">
                        <input type="text" id="fname" name="fname" placeholder="Your Name" />
                        <input type="text" id="fname" name="fname" placeholder="Your Email" />
                        <input type="text" id="fname" name="fname" placeholder="Your Number" />

                    </div>
                </div>
                <div class="Reserve_btn">
                    <button type="submit" class="submit_2">Book Table</button>
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

export default Reservation;