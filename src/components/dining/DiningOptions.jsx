import React from "react";

const DiningOptions = () => {
  return (
    <section className="flex flex-col items-center bg-primary-gray2">
      <div className="max-w-7xl">
        <section className="gallery-section  ">
          <div className="flex items-center justify-center mb-8">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="heading1 font-primary text-white font-semibold tracking-wider text-center">
              Buffet & Dining Options Near Ratapani
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-xl text-justify text-white md:text-center  text-center">
              Guests can enjoy set meals, homestyle buffets on weekends, and
              carefully curated dishes made with ingredients harvested from our
              own gardens. If you’re searching for the best dinner in Ratapani,
              healthy lunch options, or a wholesome dining experience inside the
              jungle, Madhuban’s kitchen offers a memorable culinary journey.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DiningOptions;
