import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MicVocal, User, Megaphone, Music, MapPin } from "lucide-react";

const ArtistCard = ({artist, Icon}) => {
    console.log(<Icon />);
    
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg px-0 py-0">
      <CardContent className="w-2/5 py-6">
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="text-center">
          <span className="text-sm font-bold text-gray-900">{artist.name}</span>
          <div className="mb-2 flex gap-1 justify-center text-center items-center text-sm text-gray-600">
            <span>
              <Icon size={16} />
            </span>
            <span>{artist.profession}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span className="text-xs">{artist.location}</span>
          </div>
        </div>
      </CardContent>
      <CardContent className="bg-gradient-to-r from-purple-600 to-blue-600 w-3/5 rounded-r-2xl py-6">
        <div className="h-4/5">
          <div>
            <p className="text-xs">{artist.desc}</p>
          </div>
          <div>
            <span>{artist.priceRange}</span>
          </div>
        </div>
        <div className="h-1/5">
          <Button className="w-full cursor-pointer bg-white text-purple-600 font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Ask for a Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ArtistCard