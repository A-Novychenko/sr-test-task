"use client";

import {Link, scroller} from "react-scroll";

import {ArrowBottomIcon} from "../../icons/ArrowBottomIcon";

import styles from ".//ContactUsBtn.module.scss";

const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 100,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

export const ContactUsBtn = () => {
  return (
    <Link
      className={styles.link}
      to="contact"
      spy={true}
      smooth={true}
      duration={800}
      offset={-111}
      onClick={() => {
        scrollTo();
      }}
    >
      Contact Us
      <ArrowBottomIcon />
    </Link>
  );
};
