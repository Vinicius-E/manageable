import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footerWrapper">
            <img src={process.env.PUBLIC_URL + '/assets/walletIcon.png'} alt="Will Be Menu" width={48} height={48}/>
            <div className="footerProjectName">Manageable Footer</div>
            <img src={process.env.PUBLIC_URL + '/assets/profileIcon.png'} alt="Will Be Profile" width={48} height={48}/>
        </footer>
    )
}

export default Footer