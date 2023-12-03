import {QuestionsList} from "@/components/elements/QuestionsList/QuestionsList";
import {ContactUsBtn} from "@/components/elements/btns/ContactUsBtn/ContactUsBtn";

import styles from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <section className="section" id="FAQ">
      <div className="container">
        <div className={styles.mobile}>
          <h2 className="title-font">Frequently Asked Questions</h2>
          <QuestionsList />
          <div className={styles.link_box}>
            <p className={styles.question}>
              Didn&apos;t find the answer to your question?
            </p>
            <ContactUsBtn />
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
              <ContactUsBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
