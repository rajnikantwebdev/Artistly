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


const ArtistCard = ({title, description, imgSrc}) => {
  return (
    <Card>
      <div className="w-1/4">
        <div className="relative w-fit overflow-hidden bg-white rounded-full lg:p-2 p-1">
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt={title}
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-3/4">
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
            <span>Book Now </span>
            <ArrowRight />
          </CardAction>
        </div>
      </div>
    </Card>
  );
}

export default ArtistCard;