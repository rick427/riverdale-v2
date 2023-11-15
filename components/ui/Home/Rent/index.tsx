import styles from './rent.module.scss';
import Listing from '@/components/base/Listing';

import { Listings } from "@/constants/listings";

export default function RentProperties() {
    return (
        <section className={styles.rent}>
            <div className={styles.rent__header}>
                <h1 className={styles.rent__header__title}>Properties for Rent.</h1>
                <p className={styles.rent__header__subtitle}>
                    These featured listings contain exclusive real 
                    estate opportunities within the city. We have a lot
                    of properties to choose from, take your time and explore 
                    with Riverdale.
                </p>
            </div>

            <div className={styles.rent__grid}>
                {Listings.filter(item => item.status.includes("RENT")).map(listing => <Listing key={listing.id} listing={listing} />)}
            </div>
        </section>
    )
}
