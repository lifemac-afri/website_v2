"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Twitter, Share2 } from "lucide-react"
import { useEffect, useState } from "react"

interface ShareButtonsProps {
  title: string
  slug: string
}

const ShareButtons = ({ title, slug }: ShareButtonsProps) => {
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/impact-stories/${slug}`)
    }
  }, [slug])

  const handleShare = (platform: string) => {
    if (!url) return

    let shareUrl = ""
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
        break
      default:
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this inspiring story: ${title}`,
          url: url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wider mr-2">Share:</span>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => handleShare('facebook')}
        className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => handleShare('twitter')}
        className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => handleShare('linkedin')}
        className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleNativeShare}
        className="h-8 w-8 rounded-full hover:bg-gray-100 text-gray-600 md:hidden"
        aria-label="Share"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default ShareButtons
