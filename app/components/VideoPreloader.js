'use client'
import { useEffect, useRef } from 'react'

// Video URLs used across the app
export const VIDEO_URLS = {
  background: 'https://www.youtube.com/embed/M0YCY55ulBw?autoplay=1&mute=1&loop=1&controls=0&playlist=M0YCY55ulBw',
  sideLeft: 'https://www.youtube.com/embed/OOpvxNW3pCk?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=OOpvxNW3pCk',
  sideRight: 'https://www.youtube.com/embed/OOpvxNW3pCk?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=OOpvxNW3pCk'
}

// Global video cache
const videoCache = new Map()

export const VideoPreloader = ({ onLoadComplete }) => {
  const preloadedRef = useRef(false)

  useEffect(() => {
    if (preloadedRef.current) return
    preloadedRef.current = true

    const preloadVideo = (url, key) => {
      return new Promise((resolve) => {
        const iframe = document.createElement('iframe')
        iframe.src = url
        iframe.style.position = 'absolute'
        iframe.style.left = '-9999px'
        iframe.style.top = '-9999px'
        iframe.style.width = '1px'
        iframe.style.height = '1px'
        iframe.style.opacity = '0'
        iframe.allow = 'autoplay; encrypted-media'
        
        // Store reference for cleanup
        if (!videoCache.has(key)) {
          videoCache.set(key, iframe)
        }
        
        iframe.onload = () => {
          console.log(`Preloaded video: ${key}`)
          resolve()
        }
        
        iframe.onerror = () => {
          console.warn(`Failed to preload video: ${key}`)
          resolve() // Resolve anyway to not block the flow
        }
        
        document.body.appendChild(iframe)
      })
    }

    const preloadImages = () => {
      const images = [
        { src: '/banner.jpg', key: 'banner' },
        { src: '/chinese-pattern.jpg', key: 'pattern' }
      ]
      
      return Promise.all(
        images.map(({ src, key }) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => {
              console.log(`Preloaded image: ${key}`)
              resolve()
            }
            img.onerror = () => {
              console.warn(`Failed to preload image: ${key}`)
              resolve()
            }
            img.src = src
          })
        })
      )
    }

    // Preload everything in parallel
    Promise.all([
      preloadVideo(VIDEO_URLS.background, 'background'),
      preloadVideo(VIDEO_URLS.sideLeft, 'sideLeft'),
      preloadVideo(VIDEO_URLS.sideRight, 'sideRight'),
      preloadImages()
    ]).then(() => {
      console.log('All assets preloaded successfully')
      if (onLoadComplete) {
        onLoadComplete()
      }
    })

    return () => {
      // Don't cleanup on unmount - keep videos cached for main page
    }
  }, [onLoadComplete])

  return null
}

// Function to get cached video iframe
export const getCachedVideo = (key) => {
  return videoCache.get(key)
}

// Function to cleanup video cache (call when leaving the app)
export const cleanupVideoCache = () => {
  videoCache.forEach((iframe) => {
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe)
    }
  })
  videoCache.clear()
} 