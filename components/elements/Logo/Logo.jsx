import Image from "next/image";

import logo from "@/public/icons/logo.svg";

import {AllRoundGothic, CASaygon} from "@/fonts/font";
import styles from "./Logo.module.scss";
import Link from "next/link";

export const Logo = () => {
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

        <p className={`${AllRoundGothic.variable} ${styles.name}`}>
          ecosolution
        </p>
        <p className={`${CASaygon.variable} ${styles.label}`}>
          <span className={styles.label_accent}>GREEN</span>ERGY FOR LIFE
        </p>
      </div>
    </Link>
  );
};
