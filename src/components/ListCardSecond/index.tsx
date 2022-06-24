import { Carousel } from "../Carousel"
import { CardSecond } from "../CardSecond"

export const ListCardSecond = () => {

    return (
        <Carousel title="Lorem ipsum Dolor sit Amet">
            {CardSecond()}
            {CardSecond()}
            {CardSecond()}
            {CardSecond()}
        </Carousel>
    );
}