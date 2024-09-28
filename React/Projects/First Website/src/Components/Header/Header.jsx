import React from 'react'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';


function Header() {
return (
<>
    {/* Main */}
    <div className="p-8 flex bg-slate-400 w-full">
    {/*1 This is the logo */}
    <div className="logo h-fit bg-slate-800 w-1/4 m-2 rounded-xl">
        <img
        src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small_2x/abstract-circle-logo-icon-free-png.png"
        alt="main logo"
        />
    </div>
    {/*2 Adderess */}
    <div className="w-1/4">
        <p>
        #Nukad Gali,
        <br />
        Chutad Gali{" "}
        </p>
    </div>
    {/*3 Get In Touch */}
    <div className="w-1/4">
        <p>
        Phone: 7696636208
        <br />
        Email: vishalmark@gmail.com
        </p>
    </div>
    {/*4 about and social media icons */}
    <div className="social_media_icons flex flex-col align-middle w-1/4">
        <div className="aboutSummary text-left text-sm">
        <p>
            These two brothers have been enjoying the outdoors together since
            the early 80's. Motorcycle riding, skiing, snowboarding and BMX
            were the early passions while growing up in California.
        </p>
        </div>
        <div className="icons"></div>
        <div className="social_media_icon_1"></div>
        <div className="social_media_icon_2"></div>
        <div className="social_media_icon_3"></div>
        <div className="social_media_icon_4"></div>
        </div>
    </div>
</>
);
}

export default Header