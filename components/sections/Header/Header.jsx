import {BurgerMenu} from "@/components/elements/BurgerMenu/BurgerMenu.jsx";
import {Logo} from "@/components/elements/Logo/Logo";
import {GetInTouchBtn} from "@/components/elements/btns/GetInTouchBtn/GetInTouchBtn";

import styles from "./Header.module.scss";

export const Hedaer = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrap}>
          <Logo />
          <div className={styles.btn_wrap}>
            <BurgerMenu />
            <GetInTouchBtn />
          </div>
        </div>
      </div>
    </header>
  );
};
