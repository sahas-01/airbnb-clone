import React from 'react'
import Image from 'next/image'
const SmallCard = ({ img, distance, location }) => {
    console.log(img)
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative w-16 h-16">
                <Image
                    src={img}
                    width={80}
                    height={80}
                    className="rounded-lg"
                    alt='location'
                />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard