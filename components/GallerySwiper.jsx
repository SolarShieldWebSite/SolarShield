import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import styles from "./GallerySwiper.module.scss";

import { Gallery, Item } from "react-photoswipe-gallery";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";

SwiperCore.use([Navigation, Autoplay]);

function GallerySwiper({ data, galeryId = "cars" }) {
  const [format, setFormat] = useState(1);

  const handleResize = () => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      setFormat(2);
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
      setFormat(2);
    } else {
      setFormat(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      navigation={true}
      spaceBetween={20}
      loop={true}
      slidesPerView={format}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {data.map((image, index) => (
        <SwiperSlide key={index} virtualIndex={index} className={styles.slide}>
          <Gallery id={galeryId}>
            <Item
              original={image.src}
              thumbnail={image.src}
              width="1000"
              height="1300"
              alt={image.alt}
            >
              {({ ref, open }) => (
                <img
                  style={{ cursor: "pointer" }}
                  src={image.src}
                  ref={ref}
                  onClick={open}
                  alt={image.alt}
                />
              )}
            </Item>
          </Gallery>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GallerySwiper;
