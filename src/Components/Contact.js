import React from "react";


class Contact extends React.Component {
    render() {
        return (
            <div>

                <div class="menu_img">
                    <div class="h2_2">
                        <h2>Contact</h2></div>
                </div>

                <h1 class="contact_h1">Contact</h1>
                <p class="contact_p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <div class="form_1">
                    <input type="text" id="fname" name="fname" placeholder="Your Name" />
                    <input type="text" id="fname" name="fname" placeholder="Your Email" />

                    <select class="select_1"  placeholder="Please select person">
                        <option disabled selected>Please select person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <textarea class="textarea" rows="5" placeholder="Your Message">
                    </textarea>
                    <button type="submit" class="submit_1 con">Send Message</button>
                </div>


            </div>
        )

    }
}

export default Contact;