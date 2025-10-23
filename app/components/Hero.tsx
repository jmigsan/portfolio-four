"use client";

import chroma from "chroma-js";
import Image from "next/image";
import ImageSwitcher from "./ImageSwitcher";
import sit1 from "@/app/assets/sit1.png";
import sit2 from "@/app/assets/sit2.png";
import sit3 from "@/app/assets/sit3.png";
import paperRectangle from "@/app/assets/paper-rectangle.png";

const Hero = () => {
    const dawnTop = "#03204c";
    const dawnMiddle = "#a285a0";
    const dawnBottom = "#fd9a83";

    const dayTop = "#254472";
    const dayMiddle = "#4d6ea2";
    const dayBottom = "#959eaf";

    const duskTop = "#03204c";
    const duskMiddle = "#a285a0";
    const duskBottom = "#fd9a83";

    const nightTop = "#03234b";
    const nightMiddle = "#053965";
    const nightBottom = "#334261";

    const getTimeOfDay = (hour: number) => {
        if (hour >= 5 && hour < 11) return "dawn";
        if (hour >= 11 && hour < 19) return "day";
        if (hour >= 19 && hour < 22) return "dusk";
        return "night";
    };

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const timeOfDay = getTimeOfDay(currentHour);

    const skyColour = {
        // Default to day
        top: dayTop,
        middle: dayMiddle,
        bottom: dayBottom,
    };

    const getPercentageBetween = (
        start: number,
        end: number,
        value: number
    ): number => {
        const steepness = 10;

        const t = (value - start) / (end - start);
        const shifted = (t - 0.5) * steepness;
        return 1 / (1 + Math.exp(-shifted));
    };

    let percentage = 0;

    /* prettier-ignore */
    switch (timeOfDay) {
        case "dawn":
            percentage = getPercentageBetween(5, 11, currentHour);

            skyColour.top = chroma.mix(dawnTop, dayTop, percentage).hex();
            skyColour.middle = chroma.mix(dawnMiddle, dayMiddle, percentage).hex();
            skyColour.bottom = chroma.mix(dawnBottom, dayBottom, percentage).hex();
            break;
        case "day":
            percentage = getPercentageBetween(11, 19, currentHour);

            skyColour.top = chroma.mix(dayTop, duskTop, percentage).hex();
            skyColour.middle = chroma.mix(dayMiddle, duskMiddle, percentage).hex();
            skyColour.bottom = chroma.mix(dayBottom, duskBottom, percentage).hex();
            break;
        case "dusk":
            percentage = getPercentageBetween(19, 22, currentHour);

            skyColour.top = chroma.mix(duskTop, nightTop, percentage).hex();
            skyColour.middle = chroma.mix(duskMiddle, nightMiddle, percentage).hex();
            skyColour.bottom = chroma.mix(duskBottom, nightBottom, percentage).hex();
            break;
        case "night":
            percentage = 0;
            
            skyColour.top = chroma.mix(nightTop, dawnTop, percentage).hex();
            skyColour.middle = chroma.mix(nightMiddle, dawnMiddle, percentage).hex();
            skyColour.bottom = chroma.mix(nightBottom, dawnBottom, percentage).hex();
            break;
    }

    return (
        <div
            style={{
                background: `linear-gradient(to bottom, ${skyColour.top} 10%, ${skyColour.middle} 75%, ${skyColour.bottom} 100%)`,
            }}
            className='h-[90vh] pt-[120px] flex'
        >
            {/* Info */}
            <div className='text-white flex flex-col gap-6 p-9 w-1/2'>
                <div className='text-6xl flex flex-col gap-2'>
                    <h1>Hello, I&apos;m </h1>
                    <h1 className='font-nacelle-heavy '>Juan Miguel Sanchez</h1>
                </div>
                <p className='text-xl'>
                    Computer Science graduate with experience in full-stack
                    development, AI/LLM systems, and workflow automation. Recent
                    projects include a fine-tuned LLM deployment project and a
                    workflow automation tool in active production use.
                </p>
            </div>
            {/* Picture */}
            <div className='w-1/2 relative'>
                <Image
                    src={paperRectangle}
                    alt='Paper background'
                    className='absolute ml-10 w-130 h-120'
                />
                <div className='relative w-130 h-120 ml-6'>
                    <ImageSwitcher images={[sit1, sit2, sit3, sit2]} />
                </div>
            </div>
        </div>
    );
};
export default Hero;
