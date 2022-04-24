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
        height: "825px"
    },

    homeContainer: {
        color: "white",
        background: "black",
        textAlign: "center"  
    },

    link: {
        color: "skyblue"
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
                <h1 className={classes.sectionHeader}>Hustle. Grit. Grind.</h1> 
                <p className={classes.sectionCaption}>Any athlete. Any goal. You've just got to do the <em>work</em></p>
                    
                    <div style={{ 
                        display: "flex",
                        flexWrap: "wrap"
                    }}>

                        <div className={classes.bodyText}>
                            <h1>Athlete Training</h1>
                            <ul className={classes.infoList}>
                                <li className={classes.infoListItem}>Develop Power, Strength, and Speed for your Sport</li>
                                <li className={classes.infoListItem}>Learn the proper movement patterns for athletic efficiency and performance</li>
                                <li className={classes.infoListItem}>Transfer strength and speed training to the field, court, mats, wherever you compete</li>
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
                    <h1 className={classes.sectionHeader}>
                        Get Involved
                    </h1>

                    <p>   
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://forms.gle/nCCYsZVZ9rqEucBc9"
                            className={classes.link}>
                                <em>GSP's Principles of Athleticism</em>
                        </a>
                    </p>

                    <h1>
                        How to Become a Member
                    </h1>

                    <ol className={classes.infoList}>
                        <li className={classes.infoListItem}>Access the link below to receive the Principles of Athleticism article and schedule your FREE athletic assessment</li>
                        <li className={classes.infoListItem}>We will reach out to you within 24 hours to schedule your session</li>
                        <li className={classes.infoListItem}>At your session we will conduct a free athletic assessment based to guide your training </li>
                        <li className={classes.infoListItem}> If we are a good fit for your training, we&#8217;ll get to work based on your assessment! It&#8217;s that simple. A program built for you to take your game to the next level </li>
                    </ol>

                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://forms.gle/nCCYsZVZ9rqEucBc9"
                        className={classes.link}
                    >
                        <h1>Become a Member <AddIcon /></h1>
                    </a>

                    <p className={classes.bodyText}>Can't make it to the gym? Join the <a className={classes.link} target="_blank" rel="noreferrer" href="https://forms.gle/focuC3RcTgeg2TBJ6">Garden State Performance Email List <EmailIcon fontSize='small' /></a> and connect with us on social media!</p>

                    <div style={{
                        width: "98%",
                        margin: "auto",
                        maxWidth: "500px",
                        marginTop: "20px"
                    }}>
                        <iframe width="85%" height="200" src="https://www.youtube.com/embed/1K--JPaEq8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </div>

            </div>

    )
}
