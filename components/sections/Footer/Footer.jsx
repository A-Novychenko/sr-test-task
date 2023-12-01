import Image from "next/image";
import Link from "next/link";

import {Logo} from "@/components/elements/Logo/Logo";

import arrowTop from "@/public/icons/arrow-top.svg";
import facebookIcon from "@/public/icons/facebook-contact.svg";
import instagramIcon from "@/public/icons/instagram-contact.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrap}>
          <Logo />
          <button className={styles.btn} type="button">
            <Image src={arrowTop} alt="arrow icon" width={16} height={16} />
          </button>
        </div>

        <ul className={styles.social_list}>
          <li>
            <Link href="https://www.facebook.com" target="_blank">
              <Image
                className={styles.social_icon}
                src={facebookIcon}
                alt="facebook icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com" target="_blank">
              <Image
                className={styles.social_icon}
                src={instagramIcon}
                alt="instagram icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
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
    </footer>
  );
};
