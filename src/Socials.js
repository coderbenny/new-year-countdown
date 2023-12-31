import React from "react";

const allLinks = [
    {
        id: 1,
        siteName: "facebook",
        image: "/facebook.svg",
        link: "www.facebook.com/benny.hinn.792303"
    },
    {
        id: 2,
        siteName: "instagram",
        image: "/instagram.svg",
        link: "www.instagram.com/_bennyonthebeat"
    },
    {
        id: 3,
        siteName: "youtube",
        image: "/youtube.svg",
        link: "www.youtube.com/@MoonStudiosEmpire"
    },

    {
        id: 4,
        siteName: "tiktok",
        image: "/tiktok.svg",
        link: "www.tiktok.com/_bennyonthebeat"
    }
]



function Socials() {

    function handleClick(e) {
        const social = (e.target.alt);

    }

    return (
        <div className="w-[250px] bg-white items-center justify-center mb-10 p-2 shadow-lg mx-auto rounded-lg">
            <h1 className="font-bold text-center mb-2 text-black shadow-lg">Follow us on Socials</h1>

            <div className="flex justify-center mx-auto p-2">
                {allLinks.map((item) => {
                    return (
                        <img key={item.id} src={item.image} onClick={handleClick} alt={item.link} className="h-10 w-10 cursor-pointer mr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-1 z-40 hover:shadow-2xl" />
                    )
                })}
            </div>

        </div>
    )
}

export default Socials;