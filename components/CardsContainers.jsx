import React from 'react'
import ArtistCard from "./Card";

const cardsData = [
  {
    id: 1,
    title: "Singers",
    desc: "Discover talented vocalists who bring melodies to life with their unique styles and genres.",
    imgSrc: "/icons/singer.png",
    icon: "🎤",
  },
  {
    id: 2,
    title: "Dancers",
    desc: "Explore dynamic performers who express stories and emotions through captivating movements.",
    imgSrc: "/icons/dance.png",
    icon: "💃",
  },
  {
    id: 3,
    title: "Speakers",
    desc: "Engage with inspiring orators who motivate and educate with powerful words and ideas.",
    imgSrc: "/icons/speaker.png",
    icon: "🎙️",
  },
  {
    id: 4,
    title: "DJs",
    desc: "Vibe with skilled DJs who mix beats and create unforgettable atmospheres at any event.",
    imgSrc: "/icons/dj.png",
    icon: "🎧",
  },
];

const CardsContainers = () => {
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-2 bg-white lg:grid-cols-2 gap-6 px-6 w-full mb-8"
  >
    {cardsData.map((card) => {
        return (
            <ArtistCard key={card.id} title={card.title} description={card.desc} imgSrc={card.imgSrc} />
        );
    })}
    </div>
  )
}

export default CardsContainers