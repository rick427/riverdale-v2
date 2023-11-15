import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
    const [headerScroll, setHeaderScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        if(scrollTop >= 250) setHeaderScroll(true);
        else setHeaderScroll(false);
    }

    return (
        <header className={`${styles.header} ${headerScroll && styles.headerScroll}`}>
            <h1 className={styles.header__brand}>riverdale.</h1>

            <div className={styles.header__group}>
                <ul className={styles.header__list}>
                    <li className={styles.header__list__item}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.header__list__item}>
                        <Link href="/">Company</Link>
                    </li>
                    <li className={styles.header__list__item}>
                        <Link href="/">Listings</Link>
                    </li>
                    <li className={styles.header__list__item}>
                        <Link href="/">Blogs</Link>
                    </li>
                    <li className={styles.header__list__item}>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>

                <button className={styles.header__button}>
                    +254 791 786 110
                </button>
            </div>
        </header>
    )
}
