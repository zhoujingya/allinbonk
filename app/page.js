'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { VideoPreloader } from './components/VideoPreloader'

export default function Home() {
  const [showDoors, setShowDoors] = useState(false)
  const [isPreloading, setIsPreloading] = useState(false)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsPreloading(true)
    
    // If assets are already loaded, proceed immediately
    if (assetsLoaded) {
      setShowDoors(true)
      setTimeout(() => router.push('/main'), 900)
    } else {
      // Wait for assets to load, then proceed
      setTimeout(() => {
        setShowDoors(true)
        setTimeout(() => router.push('/main'), 900)
      }, 300) // Reduced wait time since we're preloading
    }
  }

  const handleAssetsLoaded = () => {
    setAssetsLoaded(true)
    console.log('Assets loaded, ready for transition')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Video Preloader - starts loading videos immediately */}
      <VideoPreloader onLoadComplete={handleAssetsLoaded} />
      
      {/* "GO ALL IN" Button */}
      {!showDoors && (
        <button
          onClick={handleClick}
          className="gold-button"
          disabled={isPreloading}
        >
          <span className="button-text">
            {isPreloading ? 'LOADING...' : 'GO ALL IN'}
          </span>
          <span className="button-shine"></span>
        </button>
      )}

      {/* Loading indicator during preload */}
      {isPreloading && !showDoors && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-40">
          <div className="text-gold text-xl font-bold animate-pulse">
            {assetsLoaded ? 'Opening Doors...' : 'Loading Assets...'}
          </div>
        </div>
      )}

      {/* Chinese Doors Animation */}
      {showDoors && (
        <motion.div className="doors-container">
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -100 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="door left-door"
          >
            <div className="door-pattern"></div>
            <div className="gold-border top"></div>
            <div className="gold-border bottom"></div>
            <div className="gold-handle"></div>
            <div className="chinese-character">福</div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 100 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="door right-door"
          >
            <div className="door-pattern"></div>
            <div className="gold-border top"></div>
            <div className="gold-border bottom"></div>
            <div className="gold-handle"></div>
            <div className="chinese-character">福</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}