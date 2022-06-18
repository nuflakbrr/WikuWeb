import React from 'react'

export default function GalleryCard({ imgSrc, imgAlt }) {
    return (
        <div className="max-w-md object-cover object-center hover:shadow-2xl hover:scale-105 duration-300 ease-in-out cursor-pointer">
            <img src={imgSrc} alt={imgAlt} width={400} height={400} />
        </div>
    )
}
