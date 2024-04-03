import { Box, Container, Icon, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import React from 'react'

function Details() {
    return (
        <Container>
            <Box className='box' bgcolor='rgb(51,51,51)'>
                <div className="fotter_f">
                    <div className="newletter">
                        <h4 className='h_f'>newletter</h4>
                        <input type="text" />
                        <button className='btn'>Submit</button>
                        <h6 className='subtitle'>
                            Enter your email address to receive the latest news & products information</h6>
                    </div>
                    <div className="f_item">
                        <a className='heading' href="Products">Products</a>
                        <a href="Network Cameras">Network Cameras</a>
                        <a href="HDCVI Cameras">HDCVI Cameras</a>
                        <a href="PTZ Cameras">PTZ Cameras</a>
                        <a href="Thermal Cameras">Thermal Cameras</a>
                        <a href="Explosion-Proof & Anti-Corrosion">Explosion-Proof & Anti-Corrosion</a>
                        <a href="Network Recorders">Network Recorders</a>
                        <a href="HDCVI Recorders">HDCVI Recorders</a>
                        <a href="Learn More">Learn More</a>
                    </div>
                    <div className="f_item">
                        <a className='heading' href=" Solutions">Solutions</a>
                        <a href="Transportation">Transportation</a>
                        <a href="Critical Infrastructure">Critical Infrastructure</a>
                        <a href="Traffic">Traffic</a>
                        <a href="Banking & Finance">Banking & Finance</a>
                        <a href="Building">Building</a>
                        <a href="Retail">Retail</a>
                    </div>
                    <div className="f_item">
                        <a className='heading' href=" Support"> Support</a>
                        <a href="Tools">Tools</a>
                        <a href="Download Center">Download Center</a>
                        <a href="Training">Training</a>
                        <a href="RMA">RMA</a>
                        <a href="Video">Video</a>
                        <a href="Dahua India Call Center">Dahua India Call Center</a>
                        <a href="Dahua India Service Center And The Policy">Dahua India Service Center And The Policy</a>
                    </div>
                    <div className="f_item">
                        <a className='heading' href="Partners">Partners</a>
                        <a href="Dahua ECO Partner Program">Dahua ECO Partner Program</a>
                    </div>

                    <div className="f_item">
                        <a className='heading' href="News & Events">News & Events</a>
                        <a href="Press Release">Press Release</a>
                        <a href="Success Stories">Success Stories</a>
                        <a href="Notice">Notice</a>
                        <a href="Events">Events</a>
                        <a href="Newsletter">Newsletter</a>
                        <a href="CSR">CSR</a>
                    </div>
                    <div className="f_item">
                        <a className='heading' href='About Us'>About Us</a>
                        <a href='Introduction'>Introduction</a>
                        <a href='Contact Us'>Contact Us</a>
                        <a href='Trust Center'>Trust Center</a>
                        <a href='Terms of Use'>Terms of Use</a>
                        <a href='Privacy Policy'>Privacy Policy</a>
                    </div>
                </div>
                <div className="sepration"></div>
                <Container>
                    <Box className="fotter_s">
                        <Box>
                            <h5 className='f_l'> © 2010-2024 Dahua Technology Co., Ltd</h5>
                            <h5 className='chinese'>浙ICP备07004180号-3  浙公网安备 33010802004137号</h5>
                        </Box>
                        <Box className='icons'>
                            <FacebookIcon />
                            <YouTubeIcon />
                            <AcUnitIcon />
                            <FingerprintIcon />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default Details;
