import { Container } from "../../shareComponents/Container";
import React, { useState } from "react";
import { SectionTitle } from "../../shareComponents/SectionTitle";
import ReviewCard from "../../shareComponents/ReviewCard";
import { ReviewsData } from "../../db/NavData";
import { Stars } from "./Icon";
import { cn } from "../../utils";

const Reviews = () => {
  const [active, setActive] = useState(1);
  const activeReview = ReviewsData[active];
  return (
    <section className="my-9 md:my-20 lg:my-[120px] xl:my-[150px] py-10 lg:py-20 bg-[#F6F6F6]">
      <Container>
        
          <SectionTitle gradient="Our Client" className="text-center">
            Reviews From
          </SectionTitle>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px] pt-10 ">
            <div className="flex w-full gap-5">
              {/* Reviews line */}
              <div className="bg-[#E2DED8] w-[5px] rounded-[20px]">
                <div className=" space-y-[15px]">
                  {Array.from(Array(3).keys()).map((el) => (
                    <div
                      keys={el}
                      className={cn(
                        "w-[5px] h-[92px] rounded-[20px] bg-transparent",
                        active == el && "bg-gradient-primary"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Reviews Card */}
              <div className="space-y-[15px] flex-grow">
                {ReviewsData.map((props, i) => (
                  <ReviewCard
                    key={i}
                    active={active == i}
                    onClick={() => setActive(i)}
                    {...props}
                  />
                ))}
              </div>
            </div>

            {/* User Reviews */}
            <div className="pt-5 sm:pt-0 space-y-[30px] w-full">
              <h2 className=" text-[20px] sm:text-[30px] font-bold text-secondary">
               {activeReview.userReviews.title}
              </h2>
              <div className="flex justify-start items-center gap-[5px]">
                {Array.from(Array(activeReview.userReviews.stars).keys()).map((el) => (
                  <Stars keys={el} />
                ))}
              </div>
              <p className="text-sm sm:text-base text-accent max-w-[500px]">
               {activeReview.userReviews.details}
              </p>
            </div>
          </div>
        
      </Container>
    </section>
  );
};

export default Reviews;


