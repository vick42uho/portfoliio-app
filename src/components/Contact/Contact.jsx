import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact' className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odit ratione totam at! Fugit omnis suscipit aliquam similique facilis harum autem amet eius placeat assumenda. Quaerat culpa quisquam quo ullam.</p>
          <p className={styles.contact_address}>
            123 Main Street Bangkok, Thailand
          </p>
          <p>
            <FaPhone />
            (+66) 92 445 2492
          </p>
          <p>
            <FaEnvelope />
            victhegunners@gmail.com
          </p>
        </div>
        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.input_group}>
              <div>
                <label htmlFor="first name">First Name</label>
                <input type="text" placeholder="Mr. Thaweep" />
              </div>
              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="Poraha" />
              </div>
            </div>

            <label htmlFor="email address">Email address</label>
            <input type="email" placeholder="victhegunners@gmail.com" />
            <label htmlFor="message">Your message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
