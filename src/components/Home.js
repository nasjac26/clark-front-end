import Carousel from "./Carousel";

function Home(props) {
    console.log(props, "props for user in Home")
    return (
        <div>
            <Carousel user={props.user} />
        </div>
    )
}


export default Home;