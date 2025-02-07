'use client'

import { Building2, Calendar, Globe, MapPin, Twitter } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PopupCity } from "@/types/popup-city"

interface CityCardProps {
  city: PopupCity
}

export function CityCard({ city }: CityCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ON NOW":
        return "bg-green-100 text-green-800"
      case "UPCOMING":
        return "bg-blue-100 text-blue-800"
      case "FINISHED":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-4">
          <Badge 
            variant="secondary" 
            className={`${getStatusColor(city.status)}`}
          >
            {city.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-xl font-bold">{city.brand}</span>
        </div>
        <h3 className="text-2xl font-bold mt-2">{city.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">{city.oneLiner}</p>
        <div className="space-y-4">
          {city.dateRange && (
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>{city.dateRange}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{city.location.city}, {city.location.country}</span>
          </div>
          <div className="flex gap-4 mt-6">
            {city.websiteUrl && (
              <a 
                href={city.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-secondary"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            )}
            {city.twitterUrl && (
              <a
                href={city.twitterUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-secondary"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
