import React from 'react'

const MertorCard = ({ customClass, imgSrc, text, desctiption }) => {

    console.log(imgSrc)
    return (
        <div className={`w-[95vw]  flex flex-col  justify-between items-center md:flex-row  ${customClass}`}>
            {/* left */}
            <div className="w-full md:w-6/12 ">
                <h1 className="text-[3vh] md:text-[3vw] font-bold text-[#2BB17A]">{text}</h1>
                <p className="text-[2vh] md:text-[1.5vw]">{desctiption}</p>
            </div >
            {/* Right */}
            <div className="w-full md:w-4/12 flex justify-center items-center ">
                <img src={imgSrc} alt="" loading="lazy" className="mt-[2vw] w-[100vw]  md:w-[25vw]" />
            </div>
        </div>
    )
}

export default MertorCard
