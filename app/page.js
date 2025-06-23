import CardsContainers from "@/components/CardsContainers";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <CardsContainers />
    </main>
  );
}
