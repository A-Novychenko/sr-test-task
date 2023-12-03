import Link from "next/link";

import {Logo} from "@/components/elements/Logo/Logo";
import {ScrollToTopBtn} from "@/components/elements/btns/ScrollToTopBtn/ScrollToTopBtn";
import {FacebookIcon} from "@/components/elements/icons/FacebookIcon";
import {InstagramIcon} from "@/components/elements/icons/InstagramIcon";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrap}>
          <Logo />
          <div className={styles.inner}>
            <div className={styles.social_list_tab_desk}>
              <ul className={styles.social_list}>
                <li>
                  <Link
                    className={styles.social_link}
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.social_link}
                    href="https://www.instagram.com"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <ScrollToTopBtn />
          </div>
        </div>

        <div className={styles.social_list_mobile}>
          <ul className={styles.social_list}>
            <li>
              <Link
                className={styles.social_link}
                href="https://www.facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link
                className={styles.social_link}
                href="https://www.instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.contacts_wrap}>
          <ul className={styles.contacts}>
            <li>
              <Link
                href="https://maps.app.goo.gl/pDcqs4SzPGA7h9Vg7"
                target="_blank"
              >
                79005, Ukraine, Lviv, street. Shota Rustaveli, 7
              </Link>
            </li>
            <li>
              <Link href="mailto:office@ecosolution.com" target="_blank">
                office@ecosolution.com
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>ecosolution &#169; 2023</p>
        </div>
      </div>
    </footer>
  );
};
