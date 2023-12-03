"use client";

import {useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y} from "swiper/modules";

import {ArrowLeftSliderIcon} from "@/components/elements/icons/ArrowLeftSliderIcon";
import {ArrowRightSliderIcon} from "@/components/elements/icons/ArrowRightSliderIcon";
import {ArrowRightIcon} from "@/components/elements/icons/ArrowRightIcon";

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
import styles from "./Cases.module.scss";

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

export const Cases = () => {
  const swiperRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const formatter = (n) => {
    return n > 9 ? n : `0${n}`;
  };

  return (
    <section className="section" id="cases">
      <div className="container">
        <div className={styles.wrap}>
          <h2 className={`${"title-font"} ${styles.title}`}>
            Successful cases of our company
          </h2>

          <div className={styles.navigation_slides}>
            <p className={styles.count}>
              <span className={styles.count_active}>
                {formatter(activeSlide)}
              </span>
              &nbsp;/
              {formatter(slides?.length)}
            </p>

            <div className={styles.nav_btns}>
              <button
                type="button"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <ArrowLeftSliderIcon />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current.slideNext()}
              >
                <ArrowRightSliderIcon />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[A11y]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex + 1);
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {slides &&
            slides.map(({_id, img, city, company, activities, date}) => {
              return (
                <SwiperSlide key={_id} className={styles.slide}>
                  <div>
                    <div className={styles.img_wrap}>
                      <Image
                        className={styles.img}
                        src={img}
                        alt={`work completed in the ${company}`}
                      />
                    </div>
                    <div className={styles.info_wrap}>
                      <div className={styles.company_info}>
                        <p
                          className={styles.location}
                        >{`${city} ${company}`}</p>
                      </div>
                      <Link className={styles.link} href="/">
                        <ArrowRightIcon size={28} />
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
      </div>
    </section>
  );
};
