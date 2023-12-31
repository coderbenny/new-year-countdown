import React from "react";

function Socials() {

    function handleClick(e) {
        console.log("Clicked!")
    }

    return (
        <div className="flex justify-between bg-white mb-10 p-1">
            <img src="./facebook-svgrepo-com.svg" onClick={handleClick} alt="facebook" className="h-10 w-10" />
            <img src="./instagram-svgrepo-com.svg" onClick={handleClick} alt="instagram" className="h-10 w-10" />
            <img src="./tiktok-logo-logo-svgrepo-com.svg" onClick={handleClick} alt="tiktok" className="h-10 w-10" />
            <img src="./youtube-svgrepo-com.svg" onClick={handleClick} alt="youtube" className="h-10 w-10" />
        </div>
    )
}

export default Socials;