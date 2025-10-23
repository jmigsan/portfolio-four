import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

const ImageSwitcher = ({ images }: { images: StaticImageData[] }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className='relative w-full h-full'>
            <Image
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className='transition-opacity duration-500'
            />
        </div>
    );
};

export default ImageSwitcher;
