"use client";

import {Link, scroller} from "react-scroll";

import {ArrowBottomIcon} from "../../icons/ArrowBottomIcon";

import styles from "./GetInTouchBtn.module.scss";

const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 100,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

export const GetInTouchBtn = () => {
  return (
    <Link
      className={styles.get_in_touch}
      to="contact"
      spy={true}
      smooth={true}
      duration={800}
      offset={-111}
      onClick={() => {
        scrollTo();
      }}
    >
      Get in touch
      <ArrowBottomIcon />
    </Link>
  );
};
