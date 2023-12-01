"use client";

import {useState} from "react";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {Hourglass} from "react-loader-spinner";

import arrowRight from "@/public/icons/arrow-right.svg";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [visibleMsg, setVisibleMsg] = useState("");
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = async ({name, email, phone, msg}) => {
    try {
      setLoad(true);
      const sendData = `<b>Contact us form</b>\n\n<b>Ім'я: ${name}</b>\n<b>Email: ${email}</b>\n<b>Phone: ${phone}</b>\n<b>Message:\n${msg}</b>\n`;

      const res = await fetch(`/api/tg/`, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendData),
      });
      if (!res.ok) {
        throw new Error("Error TG send");
      }

      reset();
      setLoad(false);
      setVisibleMsg("success");
      setTimeout(() => {
        setVisibleMsg("");
      }, 3000);
    } catch (error) {
      setLoad(false);
      setVisibleMsg("fail");
      setTimeout(() => {
        setVisibleMsg("");
      }, 3000);
    }
  };

  return (
    <>
      {!visibleMsg ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.input_wrap}>
              <label className={styles.label}>* Full name:</label>
              <input
                {...register("name", {required: true})}
                className={styles.input}
                style={{borderColor: errors.name ? "#D28B8B" : "#97D28B"}}
                placeholder="John Rosie"
              />
              {errors.name && (
                <span className={styles.error}>Wrong Fullname</span>
              )}
            </div>

            <div className={styles.input_wrap}>
              <label className={styles.label}>* E-mail:</label>
              <input
                type="email"
                {...register("email", {required: true})}
                className={styles.input}
                style={{borderColor: errors.email ? "#D28B8B" : "#97D28B"}}
                placeholder="johnrosie@gmail.com"
              />
              {errors.email && (
                <span className={styles.error}>Wrong Email</span>
              )}
            </div>
            <div className={styles.input_wrap}>
              <label className={styles.label}>* Phone:</label>
              <input
                type="phone"
                {...register("phone", {required: true})}
                className={styles.input}
                style={{borderColor: errors.phone ? "#D28B8B" : "#97D28B"}}
                placeholder="380961234567"
              />
              {errors.phone && (
                <span className={styles.error}>Wrong Phone</span>
              )}
            </div>

            <div className={styles.textarea_wrap}>
              <label className={styles.label}>Message:</label>
              <textarea
                {...register("msg")}
                className={styles.textarea}
                placeholder="Your message"
              />
            </div>

            <button className={styles.btn} type="submit">
              Send
              <span className={styles.btn_inner}>
                <Image
                  src={arrowRight}
                  alt="arrow icon"
                  width={16}
                  height={16}
                />
              </span>
            </button>
            {load && (
              <div className={styles.loader_wrap}>
                <Hourglass
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#0AD87A", "#72ed72"]}
                />
              </div>
            )}
          </form>
        </>
      ) : (
        <div className={styles.notify_wrap}>
          <p
            className={styles.notify_msg}
            style={{
              backgroundColor: visibleMsg === "success" ? "#97D28B" : "#D28B8B",
            }}
          >
            {visibleMsg === "success"
              ? "Message sent successfully!"
              : `Message not sent! Please try again later.`}
          </p>
        </div>
      )}
    </>
  );
};
