import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header class="headerWrapper">
            <img src={process.env.PUBLIC_URL + '/assets/walletIcon.png'} alt="Will Be Menu" width={48} height={48}/>
            <div class="headerProjectName">Manageable Header</div>
            <img src={process.env.PUBLIC_URL + '/assets/profileIcon.png'} alt="Will Be Profile" width={48} height={48}/>
        </header>
    )
}

export default Header;

