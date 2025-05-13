import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = ({ textColor = "#000" }) => {
    return (
        <div className='app-download' id='app-download'>
            <p style={{ color: 'yellow' }}>
                For Better Experience Download <br />SwiftBites App
            </p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Play Store" />
                <img src={assets.app_store} alt="App Store" />
            </div>
        </div>
    );
};

export default AppDownload;
