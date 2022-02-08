import Carousel from "./Carousel";

function Home(props) {
    return (
        <div>
            <Carousel user={props.user} />
        </div>
    )
}


export default Home;