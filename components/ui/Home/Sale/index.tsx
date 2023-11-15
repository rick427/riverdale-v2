import styles from './sale.module.scss';
import Listing from '@/components/base/Listing';

import { Listings } from "@/constants/listings";

export default function SaleProperties() {
    return (
        <section className={styles.sale}>
            <div className={styles.sale__header}>
                <h1 className={styles.sale__header__title}>Properties for Sale.</h1>
                <p className={styles.sale__header__subtitle}>
                    These featured listings contain exclusive real 
                    estate opportunities within the city. We have a lot
                    of properties to choose from, take your time and explore 
                    with Riverdale.
                </p>
            </div>

            <div className={styles.sale__grid}>
                {Listings.filter(item => item.status.includes("SALE")).map(listing => <Listing key={listing.id} listing={listing} />)}
            </div>
        </section>
    )
}
