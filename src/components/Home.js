import GymTourVideo from '../video/gymTourVideo.mp4';
import Logo from '../logo.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
    infoList: {
        textAlign: "left"
    },

    sectionHeader: {
        fontSize: "56px"
    },

    section: {
        paddingTop: "80px",
        height: "800px"
    }
    
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div
            style={{
                background: "black",
                color: "white"
            }}
        >
            <video
                autoPlay
                loop
                muted
                style={{
                    positon: "absolute",
                    width: "100%",
                    // height: "100%",
                    height: "800px",
                    paddingTop: "80px",
                    //left: "50%",
                    objectFit: "cover",
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

                <a href="#info"
                    style={{color: "white", flexBasis: "100%"}}>
                        
                    <ArrowDownwardIcon style={{fontSize: "96px"}} />
                </a>
               
            </div>
     
    
            <div id="info" className={classes.section}>
               <h1 className={classes.sectionHeader}>Hustle. Grit. Grind.</h1> 
               <p>No matter what your fitness goals are, we have a program to help you get there..</p>
                <div style={{ 
                    display: "flex",
                    flexWrap: "wrap"
                }}>
                    <div 
                        style={{
                            flexBasis: "100%"
                        }}
                    >
                        <h1>Athlete Training</h1>
                        <ul className={classes.infoList}>
                            <li>Develop Power, Strength, and Speed</li>
                            <li>Learn Proper Movement Patterns to flourish athletically </li>
                            <li>Meet &amp; exceed the physical demands of your sport</li>
                            <li>Become more confident and self-reliant, both on and off the field</li>
                            <li>Allow your skillset to flourish with a body that is ready for any challenge</li>
                        </ul>
                    </div>
                    <div style={{
                        flexBasis: "100%"
                        }}
                    >
                        <h1>Adult Fitness</h1>
                        <ul className={classes.infoList}>
                            <li>Former athletes + Weekend Warriors... tap back into the athlete you once were!</li>
                            <li>Newbies... develop your goals and begin your fitness journey</li>
                            <li>Flexible scheduling allows for fitness to "fit" into almost any busy day</li>
                        </ul>
                    </div>
                    <div 
                        style={{
                            flexBasis: "100%"
                        }}
                    >
                        <a href="#signUp" 
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                        >
                            <h1>Sign Up <ArrowDownwardIcon fontSize="large" /></h1>
                        </a>

                    </div>
                </div>
            </div>

            <div id="signUp"
                className={classes.section}
                style={{
                    backgroundColor: "#ea1c2d"
                }}
            >
                <h1 className={classes.sectionHeader}>
                    Get Involved
                </h1>
                <p style={{
                    width: "80%",
                    margin: "auto"
                }}>
                    Let's get to work! If you can't make it to the gym? 
                    Join our email list and check out the Garden State Performance YouTube channel to stay up to date on wat we do, how we program, and other sh*t that is worth talking about for training and fitness.</p>

                <h1>
                    How to Sign Up
                </h1>

                <ol className={classes.infoList}>
                    <li>Apply for a Free Trial (2 Sessions)</li>
                    <li>After applying we will contact you to schedule your first session</li>
                    <li>We will sit down and discuss your goals and expectations for training</li>
                    <li>After the two sessions, if we are a good fit for each other you choose a membership option</li>
                </ol>

                <a href="#">
                    <h1>Start Free Trial +</h1>
                </a>

                <a href="#">
                    <h1>Join The Garden State Performance Email List</h1>
                </a>

                <a href="#">
                    <h1>Check out the Garden Performance YouTube Channel</h1>
                </a>

            </div>

        </div>

    )
}
