"use client";

import Image from "next/image";
import {Link, scroller} from "react-scroll";

import arrowRight from "@/public/icons/arrow-right.svg";

import styles from "./LearnMoreBtn.module.scss";

const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 100,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

export const LearnMoreBtn = () => {
  return (
    <Link
      className={styles.link}
      to="cases"
      spy={true}
      smooth={true}
      duration={800}
      offset={-111}
      onClick={() => {
        scrollTo();
      }}
    >
      <span className={styles.link_text}>Learn more</span>
      <span className={styles.icon_wrap}>
        <Image src={arrowRight} alt="arrow icon" width={16} height={16} />
      </span>
    </Link>
  );
};
