import React from "react";
import styles from "./Testimonials.module.css";
import { Tilt } from "react-tilt";


function Testimonials() {
  return (
    <div id='testimonials' className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            labore velit asperiores et expedita, corrupti nam aperiam deserunt
            ducimus, quasi soluta. Voluptates perferendis nesciunt voluptate
            voluptatum quisquam pariatur commodi libero.
          </p>
          <Tilt scale={2} transitionSpeed={3000} tiltReverse={true}>
          <img
            src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"
            alt=""
          /></Tilt>
          <h4>John Doe</h4>
          <p className={styles.bio}>Wab Developer</p>
        </div>

        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            labore velit asperiores et expedita, corrupti nam aperiam deserunt
            ducimus, quasi soluta. Voluptates perferendis nesciunt voluptate
            voluptatum quisquam pariatur commodi libero.
          </p>
          <Tilt scale={2} transitionSpeed={3000} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww"
            alt=""
          /></Tilt>
          <h4>John Pot</h4>
          <p className={styles.bio}>Wab Developer</p>
        </div>

        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            labore velit asperiores et expedita, corrupti nam aperiam deserunt
            ducimus, quasi soluta. Voluptates perferendis nesciunt voluptate
            voluptatum quisquam pariatur commodi libero.
          </p>
          <Tilt scale={2} transitionSpeed={3000} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww"
            alt=""
          /></Tilt>
          <h4>John Eo</h4>
          <p className={styles.bio}>Wab Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
