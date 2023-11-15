import HeroSlider, {Overlay, Slide, MenuNav} from "hero-slider";

import styles from './hero.module.scss';
import home_01 from "@/assets/hero/home-5.jpg";
import home_02 from "@/assets/hero/home-1.jpg";
import home_03 from "@/assets/hero/home-2.jpg";
import home_04 from "@/assets/hero/home-3.jpg";

export default function Hero() {
    return (
        <HeroSlider
            height="100vh"
            autoplay
            controller={{
                initialSlide: 0,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}  
        >
            {/* <Overlay/> */}

            <Slide
                shouldRenderMask
                label="Giau Pass - Italy"
                background={{
                    backgroundImageSrc: home_01.src
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.stack}>
                        <h1 className={styles.stack__title}>Lavington Apartments.</h1>
                        <p className={styles.stack__text}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolore repellat quas dolor voluptatem magni inventore, 
                            in dicta. Cumque vero nobis dolorum dicta quo delectus 
                            accusantium, ullam, adipisci ipsam repellendus molestias.
                        </p>
                        {/* <h4 className={styles.stack__subtitle}>KES. 25,000</h4> */}
                        <button className={styles.stack__button}>Read more &rarr;</button>
                    </div>
                </div>
            </Slide>

            <Slide
                shouldRenderMask
                label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: home_02.src
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.stack}>
                        <h1 className={styles.stack__title}>The Enclave.</h1>
                        <p className={styles.stack__text}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolore repellat quas dolor voluptatem magni inventore, 
                            in dicta. Cumque vero nobis dolorum dicta quo delectus 
                            accusantium, ullam, adipisci ipsam repellendus molestias.
                        </p>
                        {/* <h4 className={styles.stack__subtitle}>KES. 25,000</h4> */}
                        <button className={styles.stack__button}>Read more &rarr;</button>
                    </div>
                </div>
            </Slide>

            <Slide
                shouldRenderMask
                label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: home_03.src
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.stack}>
                        <h1 className={styles.stack__title}>Oasis Apartments.</h1>
                        <p className={styles.stack__text}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolore repellat quas dolor voluptatem magni inventore, 
                            in dicta. Cumque vero nobis dolorum dicta quo delectus 
                            accusantium, ullam, adipisci ipsam repellendus molestias.
                        </p>
                        {/* <h4 className={styles.stack__subtitle}>KES. 25,000</h4> */}
                        <button className={styles.stack__button}>Read more &rarr;</button>
                    </div>
                </div>
            </Slide>

            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"
                background={{
                    backgroundImageSrc: home_04.src
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.stack}>
                        <h1 className={styles.stack__title}>Lantern Heights.</h1>
                        <p className={styles.stack__text}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolore repellat quas dolor voluptatem magni inventore, 
                            in dicta. Cumque vero nobis dolorum dicta quo delectus 
                            accusantium, ullam, adipisci ipsam repellendus molestias.
                        </p>
                        {/* <h4 className={styles.stack__subtitle}>KES. 25,000</h4> */}
                        <button className={styles.stack__button}>Read more &rarr;</button>
                    </div>
                </div>
            </Slide>

            <MenuNav/>
        </HeroSlider>
    )
}
