"use client"
import React, {useEffect, useState} from "react";
import ArtistCard from "./ArtistCard";
import { MicVocal, User, Footprints, Laugh, Disc3 } from "lucide-react";
import Filters from "./Filters";
import Image from "next/image";

export default function ArtistPage({ artistData }) {
  const [filteredArtistData, setFilteredArtistData] = useState(null)
  const categoryFilter = artistData !== null && Array.from(new Set(artistData.map((artist) => artist.category)))
  const locationFilter = artistData !== null && Array.from(new Set(artistData.map((artist) => artist.location)));
  
  const [categoryValue, setCategoryValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [priceRange, setPriceRange] = useState(null)
  const allPrices = artistData.flatMap((artist) => [
    artist.minPrice,
    artist.maxPrice,
  ]);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const step = 20000;

  const priceBuckets = [];
  for (let start = minPrice; start < maxPrice; start += step) {
    const end = start + step;
    priceBuckets.push(
      `₹${start.toLocaleString()} - ₹${end.toLocaleString()}`);
  }

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

  useEffect(() => {
    let filtered = artistData;

    if (categoryValue) {
      filtered = filtered.filter(
        (artist) =>
          artist.category.toLowerCase() === categoryValue.toLowerCase()
      );
    }

    if (locationValue) {
      filtered = filtered.filter(
        (artist) =>
          artist.location.toLowerCase() === locationValue.toLowerCase()
      );
    }

    if (priceRange) {
      const [minStr, maxStr] = priceRange.replace(/[₹,]/g, "").split(" - ");
      const min = parseInt(minStr);
      const max = parseInt(maxStr);

      filtered = filtered.filter(
        (artist) => artist.minPrice <= max && artist.maxPrice >= min
      );
    }

    setFilteredArtistData(filtered);
  }, [categoryValue, locationValue, priceRange, artistData]);
    
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
        <div className="flex flex-wrap items-center mb-10 gap-6">
          <Filters position={categoryValue} setPosition={setCategoryValue} title={"Category"} filtersValue={categoryFilter} /> <Filters position={locationValue} setPosition={setLocationValue} title={"Location"} filtersValue={locationFilter} />
          <Filters title={"Price Range"} filtersValue={priceBuckets} position={priceRange} setPosition={setPriceRange} />
        </div>

        {filteredArtistData !== null && filteredArtistData.length !== 0 ? (<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArtistData.map((artist) => {
            const Icon = getIcon(artist.profession.toLowerCase())
            return <ArtistCard key={artist.id} artist={artist} Icon={Icon} />;
          })}
        </div>) : <div className=" flex justify-center">
          <div className="flex flex-col items-center">
            <Image src="/empty-box.png" width={300} height={300} alt="No Artist Found" />
            <span className="text-xl ">Sorry, No Artist Found</span>
            </div></div>}
      </div>
    </div>
  );
}
