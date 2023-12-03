import Link from "next/link";

import {LearnMoreBtn} from "@/components/elements/btns/LearnMoreBtn/LearnMoreBtn";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <section className={styles.section} id="main">
      <div className="container">
        <div className={styles.content_wrap}>
          <div className={styles.content_box}>
            <h1 className={styles.main_title}>RENEWABLE ENERGY For any task</h1>
            <div className={styles.inner}>
              <p className={styles.descr}>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </p>
              <div className={styles.link_wrap}>
                <LearnMoreBtn />
              </div>
            </div>
          </div>

          <address>
            <ul className={styles.address_list}>
              <li>
                <Link
                  href="https://maps.app.goo.gl/pDcqs4SzPGA7h9Vg7"
                  target="_blank"
                >
                  79005, Ukraine, Lviv, Shota Rustaveli Street, 7
                </Link>
              </li>
              <li>
                <Link href="mailto:office@ecosolution.com">
                  office@ecosolution.com
                </Link>
              </li>
              <li>
                <p className={styles.copyright}>ecosolution © 2023</p>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
};
