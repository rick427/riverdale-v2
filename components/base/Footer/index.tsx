import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                    <h4 className={styles.footer__item__title}>About</h4>

                    <p className={styles.footer__item__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint porro culpa ea animi numquam quam unde non eveniet 
                        natus deleniti.
                    </p>
                </li>
                <li className={styles.footer__item}>
                    <h4 className={styles.footer__item__title}>Contact Info</h4>
                    <div className={styles.footer__item__stack}>
                        <div className={styles.footer__item__box}>
                            <span>Call-center:</span>
                            <p>+254791786110</p>
                        </div>
                        <div className={styles.footer__item__box}>
                            <span>Fax:</span>
                            <p>(888) 637-7262</p>
                        </div>
                        <div className={styles.footer__item__box}>
                            <span>Email:</span>
                            <p>info@riverdale.com</p>
                        </div>
                    </div>
                </li>
                <li className={styles.footer__item}>
                    <h4 className={styles.footer__item__title}>Discover</h4>
                    <div className={styles.footer__item__links}>
                        <a>Proprty for Sale</a>
                        <a>Proprty for Rent</a>
                        <a>About Us</a>
                        <a>Contact Us</a>
                    </div>
                </li>
                <li className={styles.footer__item}>
                    <h4 className={styles.footer__item__title}>Newsletter</h4>
                    <form className={styles.footer__item__form}>
                        <p className={styles.footer__item__form__text}>
                            Sign up to receive the latest articles
                        </p>
                        <input type="text" placeholder='Your email address' />
                        <button>Sign Up &rarr;</button>
                    </form>
                </li>
            </ul>

            <div className={styles.footer__divider} />
            <p className={styles.footer__copyright}>
                &copy;2024 Riverdale - Your key to property solutions
            </p>
        </footer>
    )
}
