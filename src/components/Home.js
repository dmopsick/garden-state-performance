import GymTourVideo from '../video/gymTourVideo.mp4';
import Logo from '../logo.svg';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Icon } from '@material-ui/core/Icon';


export default function Home() {
    return (
        <div style={{
            background: "black",
            color: "white"
        }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    positon: "absolute",
                    width: "100%",
                    // height: "100%",
                    height: "750px",
                    //left: "50%",
                    objectFit: "cover",
                    // transform: "translate(-50%, -50%)",
                    zIndex: "-100",
                    filter: "grayscale(100%)"
                }}
                >
                <source src={GymTourVideo} type="video/mp4" />
            </video>
            <div style={{   
                zIndex: "100",
                position: "absolute",
                width: "100%",
                top: "20%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center"
                }}
            >
                <img src={Logo}
                    style={{
                        width: "50%",
                        flexBasis: "20%"
                    
                    }}
                />

                <a href="#signUp"
                    style={{color: "white", flexBasis: "100%"}}>
                        
                    <ArrowDownwardIcon style={{fontSize: "96px"}} />
                </a>
               

            </div>
     
        




            <div id="signUp"
                style={{
                    height: "750px"
                }}
            >
               <h1 style={{marginTop: "25px"}}>Sign Up</h1> 

            </div>
        </div>

    )
}
