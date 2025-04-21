'use client'

import { useEffect, useState } from 'react'

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const scrolled = (currentScroll / totalHeight) * 100
      setScrollPercent(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 right-0 h-full w-[4px] bg-black z-50">
      <div
        className="bg-amber-500 w-full transition-all duration-150 ease-out"
        style={{ height: `${scrollPercent}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
