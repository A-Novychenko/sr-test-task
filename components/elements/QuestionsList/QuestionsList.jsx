"use client";

import {useState} from "react";
import Image from "next/image";

import addIcon from "@/public/icons/add.svg";
import minusIcon from "@/public/icons/minus.svg";

import styles from "./QuestionsList.module.scss";

const questions = [
  {
    _id: 1,
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    _id: 2,
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    _id: 3,
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    _id: 4,
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    _id: 5,
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
];

export const QuestionsList = () => {
  const [isOpenAnswer, setIsOpenAnswer] = useState(1);

  const toggleAnswer = (id) => {
    setIsOpenAnswer(isOpenAnswer === id ? null : id);
  };

  return (
    <ul className={styles.list}>
      {questions &&
        questions.map(({_id, question, answer}) => {
          return (
            <li key={_id} className={styles.item}>
              <button
                className={styles.btn}
                type="button"
                onClick={() => toggleAnswer(_id)}
              >
                {isOpenAnswer === _id ? (
                  <Image
                    src={minusIcon}
                    alt="minus icon"
                    width={16}
                    height={16}
                  />
                ) : (
                  <Image src={addIcon} alt="add icon" width={16} height={16} />
                )}
              </button>
              <div className={styles.content}>
                <p>{question}</p>
                {isOpenAnswer === _id && <p>{answer}</p>}
              </div>
            </li>
          );
        })}
    </ul>
  );
};
