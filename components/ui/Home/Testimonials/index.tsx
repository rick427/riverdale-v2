import Carousel from "react-multi-carousel";
import { TfiQuoteLeft } from "react-icons/tfi";
import type { DotProps } from 'react-multi-carousel/lib/types';

import "react-multi-carousel/lib/styles.css";
import styles from './testimonials.module.scss';

const CustomDot = ({onClick, active}:DotProps) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(onClick) onClick();
        e.preventDefault();
    }

    return (
        <button 
            onClick={handleClick} 
            className={`${styles.testimonials__dot} ${active && styles.testimonials__dot__active}`}
        />
    )
}

export default function Testimonials() {
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
        <section className={styles.testimonials}>
            <div className={styles.testimonials__header}>
                <h1 className={styles.testimonials__header__title}>
                    Testimonials.
                </h1>
                <p className={styles.testimonials__header__subtitle}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, nihil.
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
                sliderClass={styles.testimonials__group}
            >
                <div className={styles.testimonials__card}>
                    <TfiQuoteLeft size={40} />
                    <p className={styles.testimonials__card__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam ipsam repellat tempore ipsum sapiente, pariatur nam cum quas 
                        cumque aut assumenda soluta provident ab nisi magni debitis, 
                        facere, maxime quo deserunt tenetur dolorum? 
                        Facilis, voluptate?
                    </p>
                    <div className={styles.testimonials__card__stack}>
                        <span>by</span>
                        <h4>Roy Benneth</h4>
                        <span>Manager, ABC Inc.</span>
                    </div>
                </div>

                <div className={styles.testimonials__card}>
                    <TfiQuoteLeft size={40} />
                    <p className={styles.testimonials__card__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam ipsam repellat tempore ipsum sapiente, pariatur nam cum quas 
                        cumque aut assumenda soluta provident ab nisi magni debitis, 
                        facere, maxime quo deserunt tenetur dolorum? 
                        Facilis, voluptate?
                    </p>
                    <div className={styles.testimonials__card__stack}>
                        <span>by</span>
                        <h4>Micheal Jordan</h4>
                        <span>Manager, NBA</span>
                    </div>
                </div>

                <div className={styles.testimonials__card}>
                    <TfiQuoteLeft size={40} />
                    <p className={styles.testimonials__card__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam ipsam repellat tempore ipsum sapiente, pariatur nam cum quas 
                        cumque aut assumenda soluta provident ab nisi magni debitis, 
                        facere, maxime quo deserunt tenetur dolorum? 
                        Facilis, voluptate?
                    </p>
                    <div className={styles.testimonials__card__stack}>
                        <span>by</span>
                        <h4>John Smith</h4>
                        <span>Manager, Matrix Inc.</span>
                    </div>
                </div>

                <div className={styles.testimonials__card}>
                    <TfiQuoteLeft size={40} />
                    <p className={styles.testimonials__card__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam ipsam repellat tempore ipsum sapiente, pariatur nam cum quas 
                        cumque aut assumenda soluta provident ab nisi magni debitis, 
                        facere, maxime quo deserunt tenetur dolorum? 
                        Facilis, voluptate?
                    </p>
                    <div className={styles.testimonials__card__stack}>
                        <span>by</span>
                        <h4>Uzumaki Naruto</h4>
                        <span>Hokage, Hidden Leaf</span>
                    </div>
                </div>

                <div className={styles.testimonials__card}>
                    <TfiQuoteLeft size={40} />
                    <p className={styles.testimonials__card__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam ipsam repellat tempore ipsum sapiente, pariatur nam cum quas 
                        cumque aut assumenda soluta provident ab nisi magni debitis, 
                        facere, maxime quo deserunt tenetur dolorum? 
                        Facilis, voluptate?
                    </p>
                    <div className={styles.testimonials__card__stack}>
                        <span>by</span>
                        <h4>Satoru Gojo</h4>
                        <span>Special Grade Sorcerer, JJk</span>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}
