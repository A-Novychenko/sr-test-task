"use client";

import {useState} from "react";
import * as LinkNext from "next/link";
import Image from "next/image";
import {Link, scroller} from "react-scroll";

import menuIcon from "@/public/icons/menu.svg";
import {ArrowRightIcon} from "../icons/ArrowRightIcon";
import {FacebookIcon} from "../icons/FacebookIcon";
import {InstagramIcon} from "../icons/InstagramIcon";
import {CloseIcon} from "../icons/CloseIcon";

import styles from "./BurgerMenu.module.scss";

const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 100,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};

const links = [
  {title: "Main", name: "main"},
  {title: "About", name: "about"},
  {title: "Cases", name: "cases"},
  {title: "FAQ", name: "FAQ"},
  {title: "Contact Us", name: "contact"},
];

export const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
    document.body.classList.toggle("modal-open", true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.classList.toggle("modal-open", false);
  };

  return (
    <>
      {!isOpenMenu && (
        <button className={styles.menu_btn} type="button" onClick={openMenu}>
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
                  onClick={closeMenu}
                >
                  <CloseIcon />
                  <span>close</span>
                </button>
              </div>

              <div className={styles.links_wrap}>
                <ul className={styles.link_list}>
                  {links &&
                    links.map(({name, title}, i) => (
                      <li key={i}>
                        <Link
                          className={styles.link}
                          activeClass={styles.active}
                          to={name}
                          spy={true}
                          smooth={true}
                          duration={800}
                          offset={-111}
                          onClick={() => {
                            closeMenu();
                            scrollTo();
                          }}
                        >
                          {title}
                          <ArrowRightIcon />
                        </Link>
                      </li>
                    ))}
                </ul>

                <ul className={styles.social}>
                  <li>
                    <LinkNext
                      className={styles.social_link}
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <FacebookIcon />
                    </LinkNext>
                  </li>
                  <li>
                    <LinkNext
                      className={styles.social_link}
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </LinkNext>
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
