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
    <Card className="p-0">
      <div className="w-1/4 bg-gray-100 rounded-l-2xl px-4 flex items-center">
        <div className="relative w-fit overflow-hidden rounded-full lg:p-2 p-1 ring-4 ring-purple-500">
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt={title}
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-3/4 py-6 px-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
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