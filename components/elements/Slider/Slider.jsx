"use client";

import {useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y} from "swiper/modules";

import {ArrowRight} from "../icons/ArrowRight/ArrowRight";
import {ArrowLeftSlider} from "../icons/ArrowsSlider/ArrowLeftSlider";
import {ArrowRightSlider} from "../icons/ArrowsSlider/ArrowRightSlider";

import buh from "@/public/imgs/activities/buh.jpg";
import bosch from "@/public/imgs/activities/bosch.jpg";
import biotechRivne from "@/public/imgs/activities/biotech-rivne.jpg";
import healthyFarm from "@/public/imgs/activities/healthyfarm.jpg";
import biotech from "@/public/imgs/activities/biotech.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./Slider.module.scss";

const slides = [
  {
    _id: 1,
    img: buh,
    city: "Lviv Region, Radekhiv town",
    company: "Private Enterprise “ZAKHIDNYI BUH”",
    activities: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    _id: 2,
    img: bosch,
    city: "Zhytomyr city",
    company: "Private Enterprise “Bosch”",
    activities: "Solar Panels for industrial use",
    date: "November 2023",
  },
  {
    _id: 3,
    img: biotechRivne,
    city: "Rivne city",
    company: "Private Enterprise “Biotech””",
    activities: "Thermal modules",
    date: "October 2023",
  },
  {
    _id: 4,
    img: healthyFarm,
    city: "Kherson city",
    company: "Private Enterprise “HealthyFarm”",
    activities: "Wind power",
    date: "September 2021",
  },
  {
    _id: 5,
    img: biotech,
    city: "Zaporizhia city",
    company: "Private Enterprise “Biotech”",
    activities: "Mini nuclear stations",
    date: "May 2021",
  },
];

export const Slider = () => {
  const swiperRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const formatter = (n) => {
    return n > 9 ? n : `0${n}`;
  };

  return (
    <>
      <div className={styles.navigation_slides}>
        <p className={styles.count}>
          <span className={styles.count_active}>{formatter(activeSlide)}</span>
          &nbsp;/
          {formatter(slides?.length)}
        </p>

        <div className={styles.nav_btns}>
          <button type="button" onClick={() => swiperRef.current.slidePrev()}>
            <ArrowLeftSlider />
          </button>

          <button type="button" onClick={() => swiperRef.current.slideNext()}>
            <ArrowRightSlider />
          </button>
        </div>
      </div>
      <Swiper
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex + 1);
        }}
      >
        {slides &&
          slides.map(({_id, img, city, company, activities, date}) => {
            return (
              <SwiperSlide key={_id}>
                <div>
                  <div className={styles.img_wrap}>
                    <Image
                      src={img}
                      alt={`work completed in the ${company}`}
                      width={596}
                      height={395}
                    />
                  </div>
                  <div className={styles.info_wrap}>
                    <div className={styles.company_info}>
                      <p className={styles.location}>{`${city} ${company}`}</p>
                    </div>
                    <div className={styles.company_info_desctop}>
                      <p className={styles.location}>{city}</p>
                      <p className={styles.company}>{company}</p>
                    </div>
                    <Link className={styles.link} href="/">
                      <ArrowRight size={28} />
                    </Link>
                  </div>
                  <div className={styles.activities_box}>
                    <p>{activities}</p>
                    <p>{date}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
