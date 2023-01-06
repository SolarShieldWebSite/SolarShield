import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import styles from "./GallerySwiper.module.scss";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Autoplay]);

function GallerySwiper({ data }) {
  const [format, setFormat] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setFormat(window.matchMedia("(max-width: 900px)").matches);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setFormat(window.matchMedia("(max-width: 900px)").matches);
      });
    };
  }, []);

  return (
    <Swiper
      navigation={true}
      spaceBetween={20}
      loop={true}
      slidesPerView={format ? 2 : 4}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {data.map((image, index) => (
        <SwiperSlide key={index} virtualIndex={index} className={styles.slide}>
          <a href={image.src} target="_blank" rel="noreferrer noopener">
            <img src={image.src} alt={image.alt} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GallerySwiper;
