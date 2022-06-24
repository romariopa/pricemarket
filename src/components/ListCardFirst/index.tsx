import { CardFirst } from "../CardFirst"

export const ListCardFirst = () => {
    return (
        <div className="px-3">
            <div className="row">
                <div className="col">
                    <CardFirst textButton="Lorem ipsum" bigTextButton/>
                </div>
                <div className="col">
                    <CardFirst widthImage={4} text="Loren ipsum dolor sit" />
                </div>
                <div className="col">
                    <CardFirst widthImage={4} text="Loren ipsum dolor sit" />
                </div>
                <div className="col">
                    <CardFirst widthImage={4} text="Loren ipsum dolor sit" />
                </div>
            </div>
        </div>
    );
}