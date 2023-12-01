import {Slider} from "@/components/elements/Slider/Slider";

import styles from "./Cases.module.scss";

export const Cases = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className="title-font">Successful cases of our company</h3>
        <Slider />
      </div>
    </section>
  );
};
