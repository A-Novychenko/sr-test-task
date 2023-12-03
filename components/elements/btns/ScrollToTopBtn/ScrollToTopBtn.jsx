"use client";

import {Link, animateScroll} from "react-scroll";

import {ArrowTopIcon} from "../../icons/ArrowTopIcon";

import styles from "./ScrollToTopBtn.module.scss";

const scrollToTop = () => {
  animateScroll.scrollToTop();
};

export const ScrollToTopBtn = () => {
  return (
    <Link
      className={styles.btn}
      to="top"
      onClick={() => {
        scrollToTop();
      }}
    >
      <ArrowTopIcon />
    </Link>
  );
};
