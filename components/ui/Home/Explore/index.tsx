import Carousel from "react-multi-carousel";
import type { DotProps } from 'react-multi-carousel/lib/types';

import "react-multi-carousel/lib/styles.css";
import styles from './explore.module.scss';

import loc_01 from '@/assets/locations/loc-01.jpg';
import loc_02 from '@/assets/locations/loc-02.jpg';
import loc_03 from '@/assets/locations/loc-03.jpg';
import loc_04 from '@/assets/locations/loc-04.jpg';
import loc_05 from '@/assets/locations/loc-05.jpg';
import loc_06 from '@/assets/locations/loc-06.jpg';

const CustomDot = ({onClick, active}:DotProps) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(onClick) onClick();
        e.preventDefault();
    }

    return (
        <button 
            onClick={handleClick} 
            className={`${styles.explore__dot} ${active && styles.explore__dot__active}`}
        />
    )
}

export default function Explore() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className={styles.explore}>
            <div className={styles.explore__header}>
                <h1 className={styles.explore__header__title}>
                    Explore by Counties
                </h1>
                <p className={styles.explore__header__subtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facilis, maiores adipisci assumenda quisquam rerum ea 
                    accusantium quis fugit laudantium. Iusto.
                </p>
            </div>

            <Carousel
                focusOnSelect={false}
                slidesToSlide={1}
                partialVisbile={true}
                customDot={<CustomDot />}
                responsive={responsive}
                centerMode={false}
                autoPlay={true}
                draggable={true}
                showDots={true}
                infinite={true}
                keyBoardControl={true}
                sliderClass={styles.explore__group}
            >
                <figure className={styles.explore__card}>
                    <img src={loc_01.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            Westlands
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            30 properties
                        </p>
                    </div>
                </figure>

                <figure className={styles.explore__card}>
                    <img src={loc_02.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            Parklands
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            12 properties
                        </p>
                    </div>
                </figure>

                <figure className={styles.explore__card}>
                    <img src={loc_03.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            General Mathenge
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            18 properties
                        </p>
                    </div>
                </figure>

                <figure className={styles.explore__card}>
                    <img src={loc_04.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            Kilimani
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            5 properties
                        </p>
                    </div>
                </figure>

                <figure className={styles.explore__card}>
                    <img src={loc_05.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            Kileleshwa
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            19 properties
                        </p>
                    </div>
                </figure>

                <figure className={styles.explore__card}>
                    <img src={loc_06.src} alt="loc" />
                    <div className={styles.explore__card__info}>
                        <h4 className={styles.explore__card__info__title}>
                            Diani
                        </h4>
                        <p className={styles.explore__card__info__subtitle}>
                            100 properties
                        </p>
                    </div>
                </figure>
            </Carousel>
        </section>
    )
}
