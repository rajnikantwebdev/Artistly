"use client"
import React from "react";
import ArtistCard from "./ArtistCard";
import { MicVocal, User, Footprints, Laugh, Disc3 } from "lucide-react";

export default function ArtistPage({ artistData }) {
  const getIcon = (profession) => {
    switch (profession) {
      case "singer":
        return  MicVocal
      case "dancer":
        return Footprints;
      case "dj":
        return Disc3; 
      case "comedian": 
        return Laugh;
      default:
        User;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Artists
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover talented artists ready to make your event unforgettable
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {artistData.map((artist) => {
            const Icon = getIcon(artist.profession.toLowerCase())
            return <ArtistCard key={artist.id} artist={artist} Icon={Icon} />;
          })}
        </div>
      </div>
    </div>
  );
}
