import Link from "next/link";
import Image from "next/image";

import arrowRight from "@/public/icons/arrow-right.svg";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.main_title}>RENEWABLE ENERGY For any task</h1>
        <div className={styles.content_wrap}>
          <p className={styles.descr}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <div className={styles.link_wrap}>
            <Link className={styles.link} href="/">
              <span className={styles.link_text}>Learn more</span>
              <span className={styles.icon_wrap}>
                <Image
                  src={arrowRight}
                  alt="arrow icon"
                  width={16}
                  height={16}
                />
              </span>
            </Link>
          </div>

          <address>
            <ul className={styles.address_list}>
              <li>
                <Link
                  href="https://maps.app.goo.gl/pDcqs4SzPGA7h9Vg7"
                  target="_blanc"
                >
                  79005, Ukraine, Lviv, street. Shota Rustaveli, 7
                </Link>
              </li>
              <li>
                <Link href="mailto:office@ecosolution.com">
                  office@ecosolution.com
                </Link>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
};
