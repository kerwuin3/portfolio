import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.scss';
import { MdGTranslate } from "react-icons/md";
import { BsCloudSun } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logoImage}
            src="/assets/logoKwn.png"
            alt="Logo"
            loading="eager"
            width={50}
            height={50}
          />
          
        </div>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/Skills">Skills</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.icons}>
          <MdGTranslate className={styles.translateIcon} />
          <BsCloudSun className={styles.sunIcon} />
        </button>
      </nav>
    </header>
  );
}