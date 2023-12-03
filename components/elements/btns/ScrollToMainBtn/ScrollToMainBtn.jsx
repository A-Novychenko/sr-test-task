"use client";

import {Link, scroller} from "react-scroll";

import {ArrowTopIcon} from "../../icons/ArrowTopIcon";

import styles from "./ScrollToMainBtn.module.scss";

const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 100,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

export const ScrollToMainBtn = () => {
  return (
    <Link
      className={styles.btn}
      to="main"
      spy={true}
      smooth={true}
      duration={800}
      offset={-111}
      onClick={() => {
        scrollTo();
      }}
    >
      <ArrowTopIcon />
    </Link>
  );
};
