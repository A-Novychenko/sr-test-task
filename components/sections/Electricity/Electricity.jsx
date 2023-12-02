import {Counter} from "@/components/elements/Counter/Counter";

import styles from "./Electricity.module.scss";

export const Electricity = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.title_wrap}>
          <h3 className={`${"title-font"} ${styles.title}`}>
            Electricity we produced for all time
          </h3>
        </div>
        <Counter />
      </div>
    </section>
  );
};
