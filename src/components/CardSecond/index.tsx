import { SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap"
import { ChevronRight } from "../Icons"

export const CardSecond = () => {
    return (
        <SwiperSlide>
            <div className="shadow  rounded mx-1 mt-1 mb-5 p-2" style={{
                width: "100%",
                height: "100%"
            }}>
                <div className="d-flex flex-row mt-2">
                    <div className="col mx-2" style={{ textAlign: "left" }}>
                        <p className="h6">
                            Ipsum Dolor sit
                        </p>
                        <p className="h6 text-left">Dolara manre sit</p>
                    </div>
                    <div className="col mx-2" style={{ textAlign: "end" }}>
                        <div className="h6">
                            Lorem
                        </div>
                        <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                            alt="Responsive image" style={{
                                height: "2rem",
                                width: `4rem`,
                                float: "right"
                            }}
                        />
                    </div>
                </div>

                {/* Body */}

                <div className="d-flex flex-row  border-bottom border-dark my-2">
                    <div className="d-flex flex-row col">
                        <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                            className="mx-1" alt="Responsive image" style={{
                                height: "1rem",
                                width: `2rem`,
                            }}
                        />
                        <p className="h6">Jose P. <small>Hizo un comentario.</small></p>
                    </div>
                    <div className="col-2">
                        <ChevronRight />
                    </div>
                </div>
                <div className="d-flex flex-row  border-bottom border-dark my-2">
                    <div className="d-flex flex-row col">
                        <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                            className="mx-1" alt="Responsive image" style={{
                                height: "1rem",
                                width: `2rem`,
                            }}
                        />
                        <p className="h6">Jose P. <small>Hizo un comentario.</small></p>
                    </div>
                    <div className="col-2">
                        <ChevronRight />
                    </div>
                </div>
                <div className="d-flex flex-row  border-bottom border-dark my-2">
                    <div className="d-flex flex-row col">
                        <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                            className="mx-1" alt="Responsive image" style={{
                                height: "1rem",
                                width: `2rem`,
                            }}
                        />
                        <p className="h6">Jose P. <small>Hizo un comentario.</small></p>
                    </div>
                    <div className="col-2">
                        <ChevronRight />
                    </div>
                </div>

                {/* Footer */}
                <div className="d-flex flex-row mt-4 mx-2 justify-content-between">
                    <p className="h6"><u>Dolor Sit Amet Lor</u></p>
                    <Button variant="secondary" size="sm">Ver Catálogo</Button>
                </div>
            </div>
        </SwiperSlide>
    );
}