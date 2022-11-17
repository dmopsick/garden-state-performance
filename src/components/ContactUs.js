
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContactUs() {

    return(
        <div className='section pageContainer redBackground centerText'>
            <h1 className='sectionHeader'>Contact GSP</h1>
            <h2 className='sectionSubheader'>Stop by or hit us up</h2>
           
            <p className='largeBodyText marginTop'>
                <a href="mailto:gardenstateperf@gmail.com"
                    style={{
                        color: "white"
                    }}
                >GardenStatePerf@gmail.com </a>
                •
                732-245-7494 
            </p>
            <p className='largeBodyText marginTop'>
                1701 Valley Road Unit E, Ocean, NJ 07712
            </p>

            <h2 class='sectionSubheader' style={{
                marginTop: '25px'
            }}>Social Media</h2>
            <ul className='infoList' style={{
                textDecoration: 'none'
            }}>
                <li className='infoListItem'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer" 
                        href="https://www.instagram.com/gardenstateperformance_/">
                        Instagram<InstagramIcon fontSize='large' />
                    </a>
                </li>
                <li className='infoListItem'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer" 
                        href="https://www.youtube.com/channel/UC_PjfKHV8wfWTIinmjaHPLg">
                        YouTube <YouTubeIcon fontSize='large' />
                    </a>
                </li>
                <li className='infoListItem'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/shane-nolan-23kb">
                        LinkedIn<LinkedInIcon fontSize='large' />
                    </a>
                </li>
                <li className='infoListItem'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/Garden-State-Performance-101134245910969">
                        Facebook <FacebookIcon fontSize='large' />
                    </a>
                </li>
                
            </ul>
        </div>

    )

}
