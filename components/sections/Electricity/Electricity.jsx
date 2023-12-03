import {Counter} from "@/components/elements/Counter/Counter";

import styles from "./Electricity.module.scss";

export const Electricity = () => {
  return (
    <section className="section" id="electricity">
      <div className="container">
        <div className={styles.title_wrap}>
          <h2 className={`${"title-font"} ${styles.title}`}>
            Electricity we produced for all time
          </h2>
        </div>
        <Counter />
      </div>
    </section>
  );
};
