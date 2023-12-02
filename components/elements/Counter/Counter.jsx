"use client";

import {useEffect, useRef, useState} from "react";

import styles from "./Counter.module.scss";

export const Counter = () => {
  const [value, setValue] = useState(1134147814);

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [value]);

  return (
    <div className={styles.wrap}>
      <div className={styles.value_wrap}>
        <p className={styles.value}>
          {value
            .toLocaleString("en-US", {
              useGrouping: false,
            })
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
      </div>
      <p className={styles.measure}>kWh</p>
    </div>
  );
};
