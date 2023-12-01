import Image from "next/image";

import opennessIcon from "@/public/icons/openness.svg";
import responsibilityIcon from "@/public/icons/responsibility.svg";
import innovationIcon from "@/public/icons/innovation.svg";
import qualityIcon from "@/public/icons/quality.svg";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="title-font">Main values of our company</h2>
        <p className={styles.descr}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </p>
        <ul className={styles.cases_list}>
          <li className={styles.case}>
            <h3 className={styles.subtitle}>
              <Image
                src={opennessIcon}
                alt="openness icon"
                width={16}
                height={16}
              />
              Openness
            </h3>
            <p className={styles.text}>
              to the world, people, new ideas and projects
            </p>
          </li>
          <li className={styles.case}>
            <h3 className={styles.subtitle}>
              <Image
                src={responsibilityIcon}
                alt="responsibility icon"
                width={16}
                height={16}
              />
              Responsibility
            </h3>
            <p className={styles.text}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          <li className={styles.case}>
            <h3 className={styles.subtitle}>
              <Image
                src={innovationIcon}
                alt="innovation icon"
                width={16}
                height={16}
              />
              Innovation
            </h3>
            <p className={styles.text}>
              we use the latest technology to implement non-standard solutions
            </p>
          </li>
          <li className={styles.case}>
            <h3 className={styles.subtitle}>
              <Image
                src={qualityIcon}
                alt="quality icon"
                width={16}
                height={16}
              />
              Quality
            </h3>
            <p className={styles.text}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
