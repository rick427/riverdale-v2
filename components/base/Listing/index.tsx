import { PiUser, PiMapPinBold, PiBathtub, PiBed, PiScales } from "react-icons/pi";

import styles from './listing.module.scss';
import type { Listing } from "@/constants/listings";

type ListingProps = {
    listing: Listing;
}

export default function Listing({listing}:ListingProps) {
    return (
        <div className={styles.listing}>
            <figure className={styles.listing__image}>
                <img src={listing.imageUrl} alt="listing" />
                <span className={styles.listing__badge}>
                    Featured
                </span>
                <h4 className={styles.listing__price}>
                    {listing.currency} {listing.minPrice.toLocaleString()}
                </h4>
            </figure>

            <div className={styles.listing__stack}>
                <h3 className={styles.listing__title}>
                    {listing.name}
                </h3>
                <div className={styles.listing__group}>
                    <PiMapPinBold size={18} />
                    <p className={styles.listing__subtitle}>
                        {listing.location}
                    </p>
                </div>
            </div>

            <div className={styles.listing__feats}>
                <div className={styles.listing__feats__box}>
                    <PiBed size={18} />
                    <h5 className={styles.listing__feats__box__title}>
                        Beds {listing.bedrooms}
                    </h5>
                </div>
                <div className={styles.listing__feats__box}>
                    <PiBathtub size={18} />
                    <h5 className={styles.listing__feats__box__title}>
                        Baths {listing.bathrooms}
                    </h5>
                </div>
                <div className={styles.listing__feats__box}>
                    <PiScales size={18} />
                    <h5 className={styles.listing__feats__box__title}>
                        Sizes {listing.sizes.toLocaleString()}
                    </h5>
                </div>
            </div>

            <div className={styles.listing__divider} />
            <div className={styles.listing__footer}>
                <div className={styles.listing__footer__user}>
                    <PiUser size={15} />
                    <p className={styles.listing__footer__user__title}>
                        {listing.postedBy}
                    </p>
                </div>

                <p className={styles.listing__footer__text}>
                    {listing.createdAt}
                </p>
            </div>
        </div>
    )
}
