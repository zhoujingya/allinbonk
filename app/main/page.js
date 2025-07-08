'use client' // Required for interactivity
import { Twitter, Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import '../globals.css'
import { VIDEO_URLS, getCachedVideo, cleanupVideoCache } from '../components/VideoPreloader'

export default function MainPage() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(false)

  useEffect(() => {
    // Clean up preloaded hidden iframes before rendering visible ones
    cleanupVideoCache();
  }, []);

  useEffect(() => {
    // Check if videos are already cached
    const backgroundVideo = getCachedVideo('background')
    const sideLeftVideo = getCachedVideo('sideLeft')
    const sideRightVideo = getCachedVideo('sideRight')

    if (backgroundVideo && sideLeftVideo && sideRightVideo) {
      console.log('Using cached videos')
      setVideosLoaded(true)
    } else {
      console.log('Videos not cached, loading normally')
      // Fallback: set loaded after a short delay
      setTimeout(() => setVideosLoaded(true), 1000)
    }
  }, [])

  const togglePhoto = () => {
    setIsPhotoExpanded(!isPhotoExpanded)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blurred YouTube Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <iframe
          className="w-full h-full scale-150 blur-sm"
          src={VIDEO_URLS.background}
          title="Casino Ambience"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Side YouTube Videos */}
      <div className="side-videos-container">
        <div className="side-video left-video">
          <div className="side-video-inner">
            <iframe
              src={VIDEO_URLS.sideLeft}
              title="Casino Side Video Left"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
        <div className="side-video right-video">
          <div className="side-video-inner">
            <iframe
              src={VIDEO_URLS.sideRight}
              title="Casino Side Video Right"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Loading overlay for videos */}
      {!videosLoaded && (
        <div className="fixed inset-0 z-30 bg-black/80 flex items-center justify-center">
          <div className="text-gold text-2xl font-bold animate-pulse">
            Loading All In Experience...
          </div>
        </div>
      )}

      {/* Glowing Gold Navbar */}
      <nav className="animated-navbar relative z-20 flex justify-between items-center p-6 bg-black/80 shadow-[0_0_30px_rgba(212,175,55,0.6)]">
        <div className="flex-1"></div>
        
        <div className="flex-1"></div>
        
        <div className="flex gap-4 flex-1 justify-end">
          {/* X (Twitter) Button */}
          <a
            href="https://x.com/allinbonk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button group flex items-center justify-center text-2xl font-black"
            aria-label="X (Twitter)"
          >
            𝕏
            <div className="social-glow"></div>
          </a>
          
          {/* Telegram Button */}
          <a
            href="https://t.me/Allinportal"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button group"
            aria-label="Telegram"
          >
            <Send className="w-6 h-6" />
            <div className="social-glow"></div>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Shiny Gold "ALL IN" Text */}
        <div className="jewelry-gold-text mb-12">
          <h1 className="text-8xl md:text-9xl font-black text-center leading-none">
            ALL IN
          </h1>
        </div>

        {/* Clickable Banner Image */}
        <div className="photo-container mb-20">
          <div 
            className={`clickable-photo ${isPhotoExpanded ? 'expanded' : ''}`}
            onClick={togglePhoto}
          >
            <img 
              src="/banner.jpg" 
              alt="Casino Banner" 
              className="photo-image"
            />
          </div>
        </div>

        {/* Contract Address */}
        <div className="w-full flex justify-center mb-6">
          <span className="text-white text-2xl md:text-3xl font-extrabold text-center drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)] select-all" style={{letterSpacing: '0.03em'}}>
            CA: C9qU3zrWk48aj1VYMsTEYr8WQhSTU5KnAjchZCBxbonk
          </span>
        </div>

        {/* Banner */}
        <div className="banner-container mb-8">
          <div className="banner">
            <div className="banner-content">
              <h2 className="text-4xl md:text-6xl font-bold text-gold mb-4">
                It&apos;s Time To Go All In
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Join Us
              </p>
              <button
                className="gold-button text-2xl px-8 py-4"
                onClick={() => window.open('https://dexscreener.com/solana/asckl2ngkrsjlvtgredjug56a8lxyvfwyptsccyou794', '_blank')}
              >
                <span className="button-text">BUY NOW</span>
                <span className="button-shine"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay for Expanded Photo */}
      {isPhotoExpanded && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={togglePhoto}
        >
          <div className="expanded-photo-content">
            <div className="expanded-photo">
              <img 
                src="/banner.jpg" 
                alt="Casino Banner" 
                className="expanded-photo-image"
              />
              <div className="expanded-photo-overlay">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
