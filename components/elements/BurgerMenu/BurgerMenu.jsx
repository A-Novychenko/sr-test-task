"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import menuIcon from "@/public/icons/menu.svg";
import {ArrowRightIcon} from "../icons/ArrowRightIcon";
import {FacebookIcon} from "../icons/FacebookIcon";
import {InstagramIcon} from "../icons/InstagramIcon";
import {CloseIcon} from "../icons/CloseIcon";

import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const links = [
    {name: "Main", href: "/"},
    {name: "About", href: "/"},
    {name: "Cases", href: "/"},
    {name: "FAQ", href: "/"},
    {name: "Contact Us", href: "/"},
  ];

  return (
    <>
      {!isOpenMenu && (
        <button
          className={styles.menu_btn}
          type="button"
          onClick={() => {
            setIsOpenMenu(true);
          }}
        >
          <Image src={menuIcon} width={16} height={16} alt="menu icon" />
        </button>
      )}

      {isOpenMenu && (
        <div className={styles.burger_menu_backdrop}>
          <div className="container">
            <div className={styles.content_wrap}>
              <div className={styles.close_btn_wrap}>
                <button
                  className={styles.close_btn}
                  type="button"
                  onClick={() => {
                    setIsOpenMenu(false);
                  }}
                >
                  <CloseIcon />
                  <span>close</span>
                </button>
              </div>

              <div className={styles.links_wrap}>
                <ul className={styles.link_list}>
                  {links &&
                    links.map(({name, href}, i) => (
                      <li key={i}>
                        <Link className={styles.link} href={href}>
                          {name}
                          <ArrowRightIcon />
                        </Link>
                      </li>
                    ))}
                </ul>

                <ul className={styles.social}>
                  <li>
                    <Link
                      className={styles.social_link}
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.social_link}
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
