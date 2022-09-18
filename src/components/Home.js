import GymTourVideo from '../video/gymTourVideo.mp4';
import Logo from '../logo.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "skyblue"
    },

    infoList: {
        textAlign: "left",
        width: "85%",
        margin: "auto",
        fontSize: "18px"
    },

    infoListItem: {
        marginBottom: "5px"
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%"
    },

    sectionCaption: {
        fontSize: "22px",
        width: "90%",
        margin: "auto",
        marginTop: "15px",
        marginBottom: "15px"
    },

    section: {
        height: "835px"
    },

    homeContainer: {
        color: "white",
        background: "black",
        textAlign: "center"  
    },

    link: {
        color: "skyblue"
    },

    hoursLink: {
        color: "skyblue",
        fontSize: "32px",
        margin: "auto"
    },

    bodyText: {
        margin: "auto",
        width: "85%"
    }
    
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.homeContainer}>
            <div className={classes.section}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        positon: "absolute",
                        width: "100%",
                        height: "100%",
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
                        alt="Garden State Performance Logo"
                        style={{
                            width: "50%",
                            flexBasis: "20%"
                        
                        }}
                    />

                    <Link to="info"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                            
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                
                </div>
            </div>
        
        
            <div id="info" className={classes.section}>
                <h1 className={classes.sectionHeader}>Movement. Strength. Performance.</h1> 
                <p className={classes.sectionCaption}>Become a better human - a better athlete - a better player</p>
                    
                    <div style={{ 
                        display: "flex",
                        flexWrap: "wrap"
                    }}>

                        <div className={classes.bodyText}>
                            <h1>Training at GSP</h1>
                            <ul className={classes.infoList}>
                            <li className={classes.infoListItem}>Learn the proper movement patterns for athletic efficiency and performance</li>
                                <li className={classes.infoListItem}>Develop Power, Strength, and Speed for your Sport</li>
                                <li className={classes.infoListItem}>Explore the boundaries of your athleticism and express your full abilities</li>
                                <li className={classes.infoListItem}>Develop confidence and self-reliance in a competitive environment</li>
                                <li className={classes.infoListItem}>Become battle-tested in your off-seasons to be ready for the main event</li>
                            </ul>
                        </div>

                        <div style={{
                                flexBasis: "100%"
                            }}
                        >
                            <Link to="signUp" 
                                smooth={true}
                                duration={500}
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                            >
                                <h1>Sign Up <ArrowDownwardIcon className={classes.movingArrow} fontSize="large" /></h1>
                            </Link>

                        </div>
                    </div>
                </div>

                <div id="signUp"
                    className={classes.section}
                    style={{
                        backgroundColor: "#a7171a",
                        height: "875px"
                    }}
                >
                    <h1 className={classes.sectionHeader}>What Do the People Think of GSP?</h1>

                    <p className={classes.bodyText}>
                        <em>
                            Great place to workout. My son is a football player who loves to workout here. Great people and awesome motivators. 
                            He has helped my son transform his body for football. Highly recommend this place. Shane is the best!
                        </em> - Jill Barnes
                    </p>

                    <p className={classes.bodyText}>
                        <em>
                            You will not be disappointed in this gym at all. All three of my kids are members here and they absolutely love it.
                            My oldest son is now a freshmen in college on the Wrestling team lifting more then most on his team. GSP is 100% the reason for this. The BEST, go check them out.
                        </em> - Levies
                    </p>

                    <p className={classes.bodyText}>
                        <em>
                            I&#8217;ve been to so many gyms and none compare to Garden State Performance. Every day is different and challenging and the results are awesome!
                        </em> - Esther
                    </p>

                    <p className={classes.bodyText}>
                        <em>
                            GSP is welcoming place designed for all levels and ages. Work out at your own pace, increasing levels and timing each week. 
                            Challenging while gaining endurance and strength
                        </em> - OMT
                    </p>

                    <p>  
                        <em>GSP's Principles of Athleticism </em> -
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://forms.gle/nCCYsZVZ9rqEucBc9"
                            className={classes.link}
                            style={{
                                marginLeft: "5px"
                            }}>
                                Get the Article <EmailIcon fontSize='small' />
                        </a>
                    </p>

                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://forms.gle/26EjLbeDkoVDGhU78"
                        className={classes.link}
                    >
                        <h1>Become a Member <AddIcon /></h1>
                    </a>

                    <p className={classes.bodyText}>Can&#8217;t make it to the gym? Join the <a className={classes.link} target="_blank" rel="noreferrer" href="https://forms.gle/focuC3RcTgeg2TBJ6">Garden State Performance Email List <EmailIcon fontSize='small' /></a> and connect with us on social media!</p>

                    <div style={{
                        width: "98%",
                        margin: "auto",
                        maxWidth: "500px",
                        marginTop: "20px"
                    }}>
                    </div>
                    
                </div>

            </div>

    )
}
