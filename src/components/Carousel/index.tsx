import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "../Icons"

// import required modules
import { Pagination } from "swiper";

export const Carousel = ({ title, children, height = 20 }: any) => {
    return (
        <div className="shadow p-3 bg-white rounded" style={{
            height: `${height}rem`,
            marginTop: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem"
        }}>
            <div className="d-flex flex-row justify-content-between mb-1">
                <div className="font-weight-bold text-lg h6">{title && (title)}</div>
                <div>
                    <ChevronLeft />
                    <ChevronRight />
                </div>
            </div>
            <Swiper
                style={{ padding: "1rem" }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {children}

            </Swiper>
        </div>
    );
}
