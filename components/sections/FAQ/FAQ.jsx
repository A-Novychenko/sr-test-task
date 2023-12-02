import Link from "next/link";

import {QuestionsList} from "@/components/elements/QuestionsList/QuestionsList";
import {ArrowBottomIcon} from "@/components/elements/icons/ArrowBottomIcon";

import styles from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.mobile}>
          <h2 className="title-font">Frequently Asked Questions</h2>
          <QuestionsList />
          <div className={styles.link_box}>
            <p className={styles.question}>
              Didn&apos;t find the answer to your question?
            </p>
            <Link className={styles.link} href="/">
              Contact Us
              <ArrowBottomIcon />
            </Link>
          </div>
        </div>
        <div className={styles.tab_desk}>
          <QuestionsList />
          <div className={styles.wrap}>
            <h2 className="title-font">Frequently Asked Questions</h2>
            <div className={styles.link_box}>
              <p className={styles.question}>
                Didn&apos;t find the answer to your question?
              </p>
              <Link className={styles.link} href="/">
                Contact Us
                <ArrowBottomIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
