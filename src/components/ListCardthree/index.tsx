import { Carousel } from "../Carousel"
import { CardThree } from "../CardThree"

export const ListCardThree = () => {

    return (
        <Carousel title="Dolor Sit Amet" height={13}>
            {CardThree()}
            {CardThree()}
            {CardThree()}
            {CardThree()}
        </Carousel>
    );
}