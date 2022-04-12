import { withThemeCreator } from "@material-ui/styles"
import GymTourVideo from "../video/gymTourVideo.mp4"
import logo from '../logo.svg';


export default function Home() {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                style={{
                    positon: "absolute",
                    width: "100%",
                    height: "100%",
                    //left: "50%",
                    objectFit: "cover",
                    // transform: "translate(-50%, -50%)",
                    zIndex: "-100",
                    filter: "grayscale(100%)"
                }}
                >
                <source src={GymTourVideo} type="video/mp4" />
            </video>
            <img src={logo}
                style={{
                    top: "30%",
                    left: "40%",
                    zIndex: "100",
                    position: "absolute"
                }}
            />

            {/* <h2 style={{
                top: "50%",
                left: "45%",
                zIndex: "100",
                background: "rgb(255, 255, 255, .7)",
                position: "fixed",
                padding: "10px"
            }}>Hustle. Grit. Grind.</h2> */}

            <div style={{
                height: "750px"
            }}>Free Trial</div>
        </div>

    )
}
