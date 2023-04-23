import Image from "next/image";
import review1 from "../../public/review/review1.jpg";
import review2 from "../../public/review/review1.jpg";
import review3 from "../../public/review/review1.jpg";
import style from "../css/review.module.css";

const Reviews = () => {
  return (
    <div className={style.testimonialdiv}>
      <div className={`${style.testimonials} pt-8`}>
        <div className="flex flex-row justify-around">
          <div className="flex justify-center ">
            <div className={style.card}>
              <div className={`${style.face} ${style.front}`}>
                <Image
                  src={review1}
                  alt="testimonial cards"
                  className={style.profile1}
                />
              </div>
              <div className={`${style.face} ${style.back}`}>
                <span className="fas fa-quote-left"></span>
                <div className={style.testimonial}>
                  &quot;"Charlie the food @see_kkb_cee dey do dey parp pass more
                  food for East Legon here,whaaaaat. Its worth every single
                  hype. &quot;"
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={style.card}>
              <div className={`${style.face} ${style.front}`}>
                <Image
                  src={review2}
                  alt="testimonial cards"
                  className={style.profile}
                />
                <div className={`${style.name} pt-3 uppercase`}>@Jeffery</div>
                <div className={style.designation}>Customer somewhere</div>
              </div>
              <div className={`${style.face} ${style.back}`}>
                <span className="fas fa-quote-left"></span>
                <div className={style.testimonial}>
                  &quot;" Really good, you have saved our business! I made bacck
                  the purchase price in just 48 hours! man, this thing is
                  getting better and better as I learn more about it. &quot;"
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={style.card}>
              <div className={`${style.face} ${style.front}`}>
                <Image
                  src={review3}
                  alt="testimonial cards"
                  className={style.profile}
                />
                <div className={`${style.name} pt-3 uppercase`}>
                  Issac Maxwell
                </div>
                <div className={style.designation}>East Legon mayor</div>
              </div>
              <div className={`${style.face} ${style.back}`}>
                <span className="fas fa-quote-left"></span>
                <div className={style.testimonial}>
                  &quot;" Account keeper is the most valuable business research
                  we have EVER purchased. Without electrician, we would ahave
                  gone bankrupt by now. &quot;"
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
