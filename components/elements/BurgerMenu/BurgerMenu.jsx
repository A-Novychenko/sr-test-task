"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import menuIcon from "@/public/icons/menu.svg";
import closeIcon from "@/public/icons/close.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";

import {ArrowRight} from "../icons/ArrowRight/ArrowRight";

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
                  <Image
                    src={closeIcon}
                    width={20}
                    height={20}
                    alt="close icon"
                  />
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
                          <ArrowRight />
                        </Link>
                      </li>
                    ))}
                </ul>

                <ul className={styles.social}>
                  <li>
                    <Link href="https://www.facebook.com" target="_blank">
                      <Image
                        src={facebookIcon}
                        alt="facebook icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com" target="_blank">
                      <Image
                        src={instagramIcon}
                        alt="instagram icon"
                        width={24}
                        height={24}
                      />
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
