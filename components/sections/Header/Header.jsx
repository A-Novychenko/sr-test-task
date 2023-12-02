import Link from "next/link";

import {BurgerMenu} from "@/components/elements/BurgerMenu/BurgerMenu.jsx";
import {Logo} from "@/components/elements/Logo/Logo";
import {ArrowBottomIcon} from "@/components/elements/icons/ArrowBottomIcon";

import styles from "./Header.module.scss";

export const Hedaer = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrap}>
          <Logo />
          <div className={styles.btn_wrap}>
            <BurgerMenu />
            <Link href="" className={styles.get_in_touch}>
              Get in touch
              <ArrowBottomIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
