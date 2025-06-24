import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ArtistCard = ({title, description, imgSrc}) => {
  return (
    <Card className="p-0 md:flex ">
      <div className="md:w-1/4 bg-gray-100 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl px-4 flex items-center">
        <div className="relative md:w-fit w-full flex justify-center overflow-hidden md:rounded-full lg:p-2 p-1 md:ring-4 ring-purple-500">
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt={title}
            className="object-cover"
          />
        </div>
      </div>

      <div className="md:w-3/4 py-6 px-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <div className="px-6 my-2">
          <CardAction>
            <Link href={"/artists"}>Book Now </Link>
            <ArrowRight />
          </CardAction>
        </div>
      </div>
    </Card>
  );
}

export default ArtistCard;