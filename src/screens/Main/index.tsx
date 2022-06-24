import { Navbar, ListCardFirst, ListCardSecond, ListCardThree } from "../../components"

export const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{
                marginTop: "2rem",
                marginBottom: "2rem"
            }}>
                <ListCardFirst />
                <ListCardSecond />
                <ListCardThree />
            </div>
        </div>
    );
}