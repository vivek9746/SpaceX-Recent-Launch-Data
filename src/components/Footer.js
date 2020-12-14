import React from 'react';
import Styles from '../components/Footer.module.css';

const Footer = () =>{

    const openInstagram =()=>{
        window.open('https://www.instagram.com/spacex/');
    }
    const openTwitter = () =>{
        window.open('https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');
    }
    const openLinkedIn = () =>{
        window.open('https://www.linkedin.com/company/spacex/');
    }
    const openYoutube = () =>{
        window.open('https://www.youtube.com/user/spacexchannel');
    }
    return(
        <div style={{marginBottom:"0px"}}>
            <div className={Styles.FooterDiv}>
                <div className={Styles.innerFooter}>
                    <h6 onClick={openTwitter}>Twitter</h6>
                    <h6 onClick={openInstagram}>Instagram</h6>
                    <h6 onClick={openLinkedIn}>Linkedin</h6>
                    <h6 onClick ={openYoutube}>Youtube</h6>
                </div>

            </div>
        </div>
    )
}
export default Footer;