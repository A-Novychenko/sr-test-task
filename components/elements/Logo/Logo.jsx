import Image from "next/image";

import logo from "@/public/icons/logo.svg";

import {AllRoundGothic} from "@/fonts/font";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo_wrap}>
      <Image src={logo} alt="Company `s logo" width={31} height={18} />
      <p className={styles.name}>
        <span className={AllRoundGothic.className}>ecosolution</span>
      </p>
      <p>
        <span>GREEN</span>ERGY FOR LIFE
      </p>
    </div>
  );
};
