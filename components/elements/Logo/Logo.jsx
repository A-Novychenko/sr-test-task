"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {throttle} from "lodash";

import {AllRoundGothic, CASaygon} from "@/fonts/font";
import logo from "@/public/icons/logo.svg";

import styles from "./Logo.module.scss";

export const Logo = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = throttle(() => {
      setIsScroll(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScroll(false);
      }, 300);
    }, 300);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link className={styles.link} href="/">
      <div className={styles.logo_wrap}>
        <Image
          className={styles.logo_icon}
          src={logo}
          alt="Company `s logo"
          width={31}
          height={18}
        />

        <p
          className={`${AllRoundGothic.variable} ${styles.name}`}
          style={{color: isScroll ? "#97D28B" : "#173D33"}}
        >
          ecosolution
        </p>
        <p className={`${CASaygon.variable} ${styles.label}`}>
          <span className={styles.label_accent}>GREEN</span>ERGY FOR LIFE
        </p>
      </div>
    </Link>
  );
};
