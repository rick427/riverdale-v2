import styles from './featured.module.scss';
import Listing from '@/components/base/Listing';

import { Listings } from "@/constants/listings";

export default function Featured() {
    return (
        <section className={styles.featured}>
            <div className={styles.featured__header}>
                <h1 className={styles.featured__header__title}>Discover our Featured Listings.</h1>
                <p className={styles.featured__header__subtitle}>
                    These featured listings contain exclusive real 
                    estate opportunities within the city. We have a lot
                    of properties to choose from, take your time and explore 
                    with Riverdale.
                </p>
            </div>

            <div className={styles.featured__grid}>
                {Listings.filter(item => item.featured).map(listing => <Listing key={listing.id} listing={listing} />)}
            </div>
        </section>
    )
}
