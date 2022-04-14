
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles(theme => ({

    socialIconContainer: {
        flexBasis: "25%",
        textAlign: "center",
    },

    socialIconLink: {
        color: "white"
    }

}));

export default function Footer() {
    const classes = useStyles();

    return(
        <div style={{
            background: "black",
            color: "white",
            height: "150px",
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center"
        }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "90%",
                    margin:"auto",
                    maxWidth: "500px"
                }}>
                    <div className={classes.socialIconContainer}>
                        <a className={classes.socialIconLink}
                            target="_blank"
                            rel="noreferrer" 
                            href="https://www.instagram.com/gardenstateperformance_/">
                            <InstagramIcon fontSize='large' />
                        </a>
                    </div>
                    <div className={classes.socialIconContainer}>
                            <a className={classes.socialIconLink}
                                target="_blank"
                                rel="noreferrer" 
                                href="https://www.youtube.com/channel/UC_PjfKHV8wfWTIinmjaHPLg">
                                <YouTubeIcon fontSize='large' />
                            </a>
                    </div>
                    <div className={classes.socialIconContainer}>
                            <a className={classes.socialIconLink}
                                target="_blank"
                                rel="noreferrer" 
                                href="https://www.linkedin.com/in/shane-nolan-23kb">
                                <LinkedInIcon fontSize='large' />
                            </a>
                    </div>
                    <div className={classes.socialIconContainer}>
                            <a className={classes.socialIconLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/Garden-State-Performance-101134245910969">
                                <FacebookIcon fontSize='large' />
                            </a>
                    </div>
                
            </div>
            <hr />
            <p>
                <a href="mailto:gardenstateperf@gmail.com"
                    style={{
                        color: "white"
                    }}
                >GardenStatePerf@gmail.com </a>
                •
                732-245-7494
            </p>
            <p>
                1701 Valley Road Unit E, Ocean, NJ 07712
            </p>
            <p>
                Est. 2022
            </p>
            <hr />
        

        </div>
    )

}
