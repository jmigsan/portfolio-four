"use client";
import { useState } from "react";
import paperPattern from "../assets/paper-pattern.jpg";
import ImageSwitcher from "./ImageSwitcher";
import house1 from "@/app/assets/house1.png";
import house2 from "@/app/assets/house2.png";
import table1 from "@/app/assets/table1.png";
import table2 from "@/app/assets/table2.png";
import vr1 from "@/app/assets/vr1.png";
import vr2 from "@/app/assets/vr2.png";
import Image from "next/image";
import houseDemo from "@/app/assets/house-demo.gif";
import pptDemo from "@/app/assets/ppt-demo.gif";
import vrDemo from "@/app/assets/vr-demo.gif";

const Projects = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const closeModal = () => setOpenModal(null);

    return (
        <div>
            <div id='projects' className='-mt-20 absolute' />
            <div
                className='flex flex-col text-lg items-center gap-14 pb-14'
                style={{
                    backgroundImage: `url(${paperPattern.src})`,
                    backgroundSize: "92%",
                }}
            >
                <h1 className='text-6xl font-nacelle-heavy pt-14'>Projects</h1>

                {/* Project 1 */}
                <div className='flex'>
                    <div className='w-105 flex items-center justify-center'>
                        <Image
                            src={houseDemo}
                            alt='House demo'
                            className='p-5'
                        />
                    </div>
                    <div className='flex flex-col w-105'>
                        <div className='w-60 h-60 ml-20'>
                            <ImageSwitcher images={[house1, house2]} />
                        </div>
                        <div className='bg-amber-50 rounded-2xl p-5 shadow-lg my-2'>
                            <h1 className='font-nacelle-heavy text-2xl'>
                                House MD Chatbot
                            </h1>
                            <div>
                                <p className='font-courier-prime bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-md my-2'>
                                    TypeScript, Next.js, Tailwind, Python,
                                    FastAPI, Google Gen AI, Unsloth, RunPod,
                                    Pinecone
                                </p>
                                <p>
                                    Fine-tuned an open source LLM and deployed
                                    to a private endpoint. With RAG
                                    functionality.
                                </p>
                                <div className='flex justify-center'>
                                    <button
                                        onClick={() => setOpenModal("modal1")}
                                        className='rounded-full text-white bg-gray-900 hover:bg-amber-50 border-2 border-black hover:text-black transition-colors duration-300 pt-2 pb-1 px-3 mt-2 shadow-md text-md hover:cursor-pointer'
                                    >
                                        Click for more info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 1 */}
                {openModal === "modal1" && (
                    <>
                        <div
                            className='fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity'
                            onClick={closeModal}
                        />
                        <div
                            className='fixed inset-0 z-50 flex items-center justify-center p-4'
                            onClick={closeModal}
                        >
                            <div
                                className='bg-amber-50 rounded-2xl shadow-xl max-w-md w-full p-6 relative'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className='absolute top-4 right-4 text-gray-500 hover:text-black transition-colors'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                                <h2 className='text-2xl font-nacelle-heavy mb-4'>
                                    House MD Chatbot
                                </h2>
                                <ul>
                                    <li>
                                        Fine-tuned an open source LLM and
                                        deployed to a private endpoint. With RAG
                                        functionality.
                                    </li>
                                    <li>
                                        Qwen3-4B LLM fine-tuned on House, M.D.
                                        episode transcripts using Google Compute
                                        Engine.
                                    </li>
                                    <li>
                                        Implemented RAG pipeline. 1,000+ medical
                                        Wikipedia articles preprocessed and
                                        vectorised into Pinecone. Used Gemini
                                        API for context-aware retrieval at
                                        runtime.
                                    </li>
                                    <li>
                                        Deployed model to private endpoint on
                                        RunPod. Frontend on Vercel. Backend on
                                        Fly.io.
                                    </li>
                                    <li>
                                        Full-stack LLM application demonstrating
                                        data engineering, model fine-tuning, and
                                        production deployment.
                                    </li>
                                </ul>
                                <div className='flex justify-center gap-2'>
                                    <a
                                        href='http://github.com/jmigsan/housemdchatbot-frontend'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='underline'
                                    >
                                        Frontend Repo
                                    </a>
                                    |
                                    <a
                                        href='http://github.com/jmigsan/housemdchatbot-backend'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='underline'
                                    >
                                        Backend Repo
                                    </a>
                                    |
                                    <a
                                        href='https://housemdchatbot-frontend.vercel.app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='underline'
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Project 2 */}
                <div className='flex'>
                    <div className='flex flex-col w-105'>
                        <div className='w-60 h-60 ml-20'>
                            <ImageSwitcher images={[table1, table2]} />
                        </div>
                        <div className='bg-amber-50 rounded-2xl p-5 shadow-lg my-2'>
                            <h1 className='font-nacelle-heavy text-2xl'>
                                PowerPoint Automation Tool
                            </h1>
                            <div>
                                <p className='font-courier-prime bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-md my-2'>
                                    Python, python-pptx, Tkinter
                                </p>
                                <p>
                                    Developed an app to automate slide
                                    preparation. Task reduced from 2 hours to 15
                                    minutes.
                                </p>
                                <div className='flex justify-center'>
                                    <button
                                        onClick={() => setOpenModal("modal2")}
                                        className='rounded-full text-white bg-gray-900 hover:bg-amber-50 border-2 border-black hover:text-black transition-colors duration-300 pt-2 pb-1 px-3 mt-2 shadow-md text-md hover:cursor-pointer'
                                    >
                                        Click for more info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-105 flex items-center justify-center'>
                        <Image src={pptDemo} alt='PPT demo' className='p-5' />
                    </div>
                </div>

                {/* Modal 2 */}
                {openModal === "modal2" && (
                    <>
                        <div
                            className='fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity'
                            onClick={closeModal}
                        />
                        <div
                            className='fixed inset-0 z-50 flex items-center justify-center p-4'
                            onClick={closeModal}
                        >
                            <div
                                className='bg-amber-50 rounded-2xl shadow-xl max-w-md w-full p-6 relative'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className='absolute top-4 right-4 text-gray-500 hover:text-black transition-colors'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                                <h2 className='text-2xl font-nacelle-heavy mb-4'>
                                    PowerPoint Automation Tool
                                </h2>
                                <ul>
                                    <li>
                                        Developed an app to automate slide
                                        preparation. Task reduced from 2 hours
                                        to 15 minutes.
                                    </li>
                                    <li>
                                        Achieved 100% adoption by PowerPoint
                                        operators in 7-person team with
                                        continued active use.
                                    </li>
                                    <li>
                                        Packaged for non-technical users with
                                        PyInstaller and Inno Setup.
                                    </li>
                                </ul>
                                <div className='flex justify-center gap-2'>
                                    <a
                                        href='https://github.com/jmigsan/CentralPPTMaker'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='underline'
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Project 3 */}
                <div className='flex'>
                    <div className='w-105 flex items-center justify-center'>
                        <Image src={vrDemo} alt='VR demo' className='p-5' />
                    </div>
                    <div className='flex flex-col w-105'>
                        <div className='w-60 h-60 ml-20'>
                            <ImageSwitcher images={[vr1, vr2]} />
                        </div>
                        <div className='bg-amber-50 rounded-2xl p-5 shadow-lg my-2'>
                            <h1 className='font-nacelle-heavy text-2xl'>
                                Virtual Reality Language Learning App
                            </h1>
                            <div>
                                <p className='font-courier-prime bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-md my-2'>
                                    C#, Unity, Google Gen AI, LangGraph,
                                    FastAPI, Python
                                </p>
                                <p>
                                    Created VR app to teach language through
                                    speech-to-speech-like interactive NPC
                                    dialogue.
                                </p>
                                <div className='flex justify-center'>
                                    <button
                                        onClick={() => setOpenModal("modal3")}
                                        className='rounded-full text-white bg-gray-900 hover:bg-amber-50 border-2 border-black hover:text-black transition-colors duration-300 pt-2 pb-1 px-3 mt-2 shadow-md text-md hover:cursor-pointer'
                                    >
                                        Click for more info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 3 */}
                {openModal === "modal3" && (
                    <>
                        <div
                            className='fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity'
                            onClick={closeModal}
                        />
                        <div
                            className='fixed inset-0 z-50 flex items-center justify-center p-4'
                            onClick={closeModal}
                        >
                            <div
                                className='bg-amber-50 rounded-2xl shadow-xl max-w-md w-full p-6 relative'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className='absolute top-4 right-4 text-gray-500 hover:text-black transition-colors'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                                <h2 className='text-2xl font-nacelle-heavy mb-4'>
                                    Virtual Reality Language Learning App
                                </h2>
                                <ul>
                                    <li>
                                        Created VR app to teach language through
                                        speech-to-speech-like interactive NPC
                                        dialogue.
                                    </li>
                                    <li>
                                        Implemented dynamic narrative generation
                                        using LangGraph, Gemini API, and OpenAI
                                        Whisper to generate contextual
                                        conversations across 38+ supported
                                        languages.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default Projects;
