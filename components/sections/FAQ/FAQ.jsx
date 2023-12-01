import Link from "next/link";
import Image from "next/image";

import {QuestionsList} from "@/components/elements/QuestionsList/QuestionsList";

import styles from "./FAQ.module.scss";
import {ArrowBottom} from "@/components/elements/icons/ArrowBottom/ArrowBottom";

export const FAQ = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className="title-font">Frequently Asked Questions</h3>
        <QuestionsList />
        <div className={styles.link_box}>
          <p className={styles.question}>
            Didn&apos;t find the answer to your question?
          </p>
          <Link className={styles.link} href="/">
            Contact Us
            <ArrowBottom />
          </Link>
        </div>
      </div>
    </section>
  );
};
