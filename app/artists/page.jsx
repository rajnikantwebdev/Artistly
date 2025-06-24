import React from 'react'
import ArtistPage from '@/components/ArtistContainer'

const page = async () => {
    let artistData = [];
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/artistData.json`
      );
      artistData = await response.json();
    } catch (error) {
      console.log("fetch failed, try again later");
    }

  return <ArtistPage artistData={artistData} />;
}

export default page