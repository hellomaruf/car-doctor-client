import img from "../assets/homeCarousel/1.jpg";
import img1 from "../assets/homeCarousel/2.jpg";
import img2 from "../assets/homeCarousel/3.jpg";
import img3 from "../assets/homeCarousel/4.jpg";
function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="carousel w-full h-[650px]">
        <h2 className="text-4xl ">hello </h2>
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img} className="w-full rounded-xl" />
          <div className="absolute flex h-full w-full items-center rounded-xl  bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]">
            <div className=" max-w-xl space-y-8 pl-16">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-600 hover:bg-orange-500 border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex  transform -translate-y-1/2   bottom-0 right-5 ">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-orange-500 border-none hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle ml-5  hover:bg-orange-500 border-none hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex h-full w-full items-center rounded-xl  bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]">
            <div className=" max-w-xl space-y-8 pl-16">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-600 hover:bg-orange-500 border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex  transform -translate-y-1/2   bottom-0 right-5 ">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-orange-500 border-none hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle ml-5  hover:bg-orange-500 border-none hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex h-full w-full items-center rounded-xl  bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]">
            <div className=" max-w-xl space-y-8 pl-16">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-600 hover:bg-orange-500 border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex  transform -translate-y-1/2   bottom-0 right-5 ">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-orange-500 border-none hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle ml-5  hover:bg-orange-500 border-none hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex h-full w-full items-center rounded-xl  bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]">
            <div className=" max-w-xl space-y-8 pl-16">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-600 hover:bg-orange-500 border-none text-white">
                  Discover More
                </button>
                <button className="btn bg-transparent text-white border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex  transform -translate-y-1/2   bottom-0 right-5 ">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-orange-500 border-none hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle ml-5  hover:bg-orange-500 border-none hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
