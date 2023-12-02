import Link from "next/link";
import Image from "next/image";

import {ContactForm} from "@/components/elements/ContactForm/ContactForm";

import {FacebookIcon} from "@/components/elements/icons/FacebookIcon";
import {InstagramIcon} from "@/components/elements/icons/InstagramIcon";
import callIcon from "@/public/icons/call.svg";
import smsIcon from "@/public/icons/sms.svg";
import mapIcon from "@/public/icons/map.svg";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={`${"title-font"} ${styles.title}`}>Contact us</h2>
        <div className={styles.wrap}>
          <div className={styles.contact_wrap}>
            <address>
              <ul className={styles.contact_box}>
                <p className={styles.label}>Phone:</p>
                <ul className={styles.list}>
                  <li>
                    <Link
                      className={`${styles.link} ${styles.link_phone}`}
                      href="tel:+380981234567"
                    >
                      <Image
                        src={callIcon}
                        alt="phone icon"
                        width={24}
                        height={24}
                      />
                      38 (098) 12 34 567
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="tel:+380931234567">
                      <Image
                        src={callIcon}
                        alt="phone icon"
                        width={24}
                        height={24}
                      />
                      38 (093) 12 34 567
                    </Link>
                  </li>
                </ul>
                <p className={styles.label}>E-mail:</p>
                <ul className={styles.list}>
                  <li>
                    <Link
                      className={styles.link}
                      href="mailto:office@ecosolution.com"
                    >
                      <Image
                        src={smsIcon}
                        alt="email icon"
                        width={24}
                        height={24}
                      />
                      office@ecosolution.com
                    </Link>
                  </li>
                </ul>
                <p className={styles.label}>Address:</p>
                <ul className={styles.list}>
                  <li>
                    <Link
                      className={styles.link}
                      href="https://maps.app.goo.gl/pDcqs4SzPGA7h9Vg7"
                      target="_blanc"
                    >
                      <Image
                        src={mapIcon}
                        alt="map icon"
                        width={24}
                        height={24}
                      />
                      79005, Ukraine, Lviv, street. Shota Rustaveli, 7
                    </Link>
                  </li>
                </ul>
              </ul>
            </address>

            <div>
              <p className={styles.label}>Social Networks:</p>
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
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};