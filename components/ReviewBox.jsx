import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./ReviewBox.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ReviewBox({ reviews = [], dark = false }) {
  const [format, setFormat] = useState(1);

  const handleResize = () => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      setFormat(1);
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
    <section>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={format}
        navigation
        pagination={{ clickable: true }}
        className={`${styles.swiper} ${dark ? styles.dark : ""}`}
      >
        {reviews?.map((review) => {
          const avatarLink = review.author.split(" ")[0];
          return (
            <SwiperSlide
              key={review.id}
              virtualIndex={review.id}
              className={styles.slide}
            >
              <div className={styles.authorBox}>
                <img
                  src={`https://avatars.dicebear.com/api/personas/${avatarLink}.svg`}
                  alt={review.author}
                />
                <h4>{review.author}</h4>
              </div>
              <div className={styles.ratingContainer}>
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src="/assets/Orange_star.svg"
                      alt={`star ${i}`}
                    />
                  ))}
              </div>
              <p className={styles.content}>{review.content}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
