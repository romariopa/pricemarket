import { SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap"
import { ChevronRight } from "../Icons"

export const CardThree = () => {
    return (
        <SwiperSlide>
            <div className="shadow  rounded mx-1 mt-1 mb-5 p-2" style={{
                width: "100%",
                height: "100%"
            }}>
                <div className="d-flex flex-row">
                    <div className="col-4">
                        <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                            className="mx-1" alt="Responsive image" style={{
                                height: "8rem",
                            }}
                        />
                    </div>
                    <div className="col ">
                        <div className="my-4 mx-2  border-bottom border-dark">
                            Crass Luctus Masa Vitae Lorem Dolor Sitamet
                        </div>
                        <div className="d-flex flex-row col mx-2">
                            <div className="mx-1 d-flex flex-row" style={{
                                alignItems: "baseline"
                            }}>
                                <div className="rounded-circle" style={{
                                    height: 18,
                                    width: 18,
                                    backgroundColor: "black"
                                }}></div>
                                <p className="mx-2">Felipe</p>
                            </div>
                            <div className="mx-1">05.01.2022</div>
                            <div className="mx-1">9min</div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
}