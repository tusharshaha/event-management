// import bannerr from '../../../../assets/banner/banner.jpg';

const Banner = () => {
  return (
    <>

      <section className="banner relative">
        <div className="banner_bottom"></div>
        <div className="big_text">conference</div>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center pb-14">
            <h1 className="heading1">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="group relative inline-block focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                <span className="relative inline-block border-2 border-[#4f9fe2] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                  Get Started
                </span>
              </a>
              <a
                className="group relative inline-block focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                <span className="relative inline-block border-2 border-[#4f9fe2] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                  Learn More
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
