"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Loader2 } from "lucide-react"

// Fix for Leaflet icon issues in Next.js
const fixLeafletIcons = () => {
    // Only run this on the client side
    if (typeof window !== "undefined") {
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
            iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })
    }
}

interface MapProps {
    latitude: number
    longitude: number
    zoom?: number
    markerTitle?: string
    className?: string
    address?: string
    googleMapsUrl?: string
}

export default function Map({
    latitude,
    longitude,
    zoom = 14,
    markerTitle = "LIFE-MAC Africa Headquarters",
    className = "h-[400px] w-full rounded-lg overflow-hidden",
    address,
    googleMapsUrl
}: MapProps) {
    const mapContainer = useRef<HTMLDivElement>(null)
    const mapInstance = useRef<L.Map | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!mapContainer.current) return

        // Fix Leaflet icon issues
        fixLeafletIcons()

        // Initialize map if it doesn't exist
        if (!mapInstance.current) {
            mapInstance.current = L.map(mapContainer.current, {
                scrollWheelZoom: false // Disable scroll zoom by default
            }).setView([latitude, longitude], zoom)

            // Add OpenStreetMap tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
            }).addTo(mapInstance.current)

            // Add marker with popup
            const popupContent = address 
                ? `<div><strong>${markerTitle}</strong><br/>${address}</div>`
                : markerTitle
            
            L.marker([latitude, longitude])
                .addTo(mapInstance.current)
                .bindPopup(popupContent)
                .openPopup()

            // Add scale control
            L.control.scale().addTo(mapInstance.current)

            // Set loading to false when tiles are loaded
            mapInstance.current.whenReady(() => {
                setLoading(false)
            })
        } else {
            // If map already exists, just update the view
            mapInstance.current.setView([latitude, longitude], zoom)
        }

        // Clean up
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove()
                mapInstance.current = null
            }
        }
    }, [latitude, longitude, zoom, markerTitle, address])

    return (
        <div className="relative h-full w-full group">
            <div ref={mapContainer} className={className} />
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-10">
                    <Loader2 className="h-8 w-8 text-blue-900 animate-spin" />
                </div>
            )}
            {googleMapsUrl && (
                <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-[400] bg-white text-blue-900 px-3 py-1.5 rounded-md text-xs  shadow-md hover:bg-blue-50 transition-colors opacity-90 hover:opacity-100"
                >
                    Get Directions
                </a>
            )}
        </div>
    )
}
