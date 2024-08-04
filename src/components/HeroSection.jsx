import React from 'react'
import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className='relative flex h-screen items-center justify-center'>
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video
                    src={video}
                    className='h-full w-full overflow-hidden'
                    muted
                    autoPlay
                    loop
                    playsInline
                    poster={hero}
                ></video>
            </div>
            <div className="relative z-20 flex h-screen flex-col items-center justify-center pb-20">
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    src={logo}
                    alt="restaurant"
                    className='max-w-200 p-19' // Adjust padding as needed
                />
                <p className="relative z-20 flex h-screen flex-col items-center justify-center pb-20 text-lg">India</p> {/* Adjust margin-top to 2rem */}
            </div>
        </section>
    )
}

export default HeroSection
