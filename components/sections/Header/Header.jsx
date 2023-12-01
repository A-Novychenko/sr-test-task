import {BurgerMenu} from "@/components/elements/BurgerMenu/BurgerMenu.jsx";
import {Logo} from "@/components/elements/Logo/Logo";

import styles from "./Header.module.scss";

export const Hedaer = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrap}>
          <Logo />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
