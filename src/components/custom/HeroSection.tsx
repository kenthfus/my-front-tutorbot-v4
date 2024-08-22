import Link from "next/link";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { StrapiImage } from "@/components/custom/StrapiImage";

import ChatwootWidget from "@/components/custom/ChatwootWidget"

interface Image {
    id: number;
    url: string;
    alternativeText: string | null;
  }
  
  interface Link {
    id: number;
    url: string;
    label: string;
  }
  
  interface HeroSectionProps {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: Image;
    link: Link;
  }

export async function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, link } = data;
  console.dir(data, { depth: null });

  const user = await getUserMeLoader();
  const userLoggedIn = user.ok;
  const linkUrl = userLoggedIn ? "/dashboard" : link.url;

////  const imageURL = "http://localhost:1337" + image.url;// + "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <header className="relative h-[600px] overflow-hidden">
      <StrapiImage
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full aspect/16:9"
        src={image.url}
////        src={imageURL}
//        src="https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//        style={{
//          aspectRatio: "1920/1080",
//          objectFit: "cover",
//        }}
        height={1080}
        width={1920}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          {subHeading}
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
          href={linkUrl}
        >
          {userLoggedIn ? "go Dashboard" : link.label}
        </Link>
      </div>
      hi<ChatwootWidget/>hi
    </header>
  );
}