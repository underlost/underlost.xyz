import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"


const ClentSection = () => {

  return (
    <>
      <section className="max-w-xl mx-auto stacked-sm bg-black text-white text-center">
        <div className="text-center mb-4 px-8">
          <h2 className="text-2xl font-mono">
            Some of the clients <br /> I've worked with
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
        >
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/frs-clipper.png"
              alt="FRS Clipper"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/gettyimages.webp"
              alt="Getty Images"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/graham-and-walker.png"
              alt="Graham & Walker"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/meta.png"
              alt="Meta"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/modernden.png"
              alt="Modern Den Real Estate & Development"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/parks-rec.webp"
              alt="Seattle Parks & Recreation"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/pinterest.webp"
              alt="Pinterest"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/puget-sound-clean-air-agency.png"
              alt="Puget Sound Clean Air Agency"
              className="my-auto"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/watson-adventures.png"
              alt="Watson Adventures"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto image-logo-wrapper">
            <StaticImage
              src="../../images/logos/williams_kastner.png"
              alt="Williams Kastner"
              className="my-auto"
              width={200}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}


export default ClentSection