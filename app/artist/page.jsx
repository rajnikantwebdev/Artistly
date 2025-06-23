import React from 'react'
import ArtistPage from '@/components/ArtistContainer'

const page = async () => {
    const response = await fetch("http://localhost:3000/artistData.json");
    const artistData = await response.json();
    console.log(artistData);
    
  return <ArtistPage artistData={artistData} />;
}

export default page