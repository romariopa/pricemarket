import { Button } from "react-bootstrap"

export const CardFirst = ({ widthImage = 10, textButton = "Ver", text, bigTextButton }: any) => {

    return (
        <div className="d-flex flex-row shadow-sm py-3 px-2 mb-3 bg-white rounded"
            style={{ height: "5rem", width: "fit-content", marginRight: "2rem" }}>
            <img src="https://e7.pngegg.com/pngimages/220/432/png-clipart-rectangle-shape-shape-angle-rectangle.png"
                className="mx-2" alt="Responsive image" style={{
                    height: "3rem",
                    width: `${widthImage}rem`
                }}
            />
            {text && (<div className="mx-2" style={{width: "6rem"}}>{text}</div>)}

            <Button variant="primary" style={{ width: bigTextButton ? "8rem" : "3rem" }}>
                {textButton}
            </Button>
        </div>
    );
}