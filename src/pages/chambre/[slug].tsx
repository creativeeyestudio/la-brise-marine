import ContentPage from "@/app/_components/layouts/ContentPage";
import Image from "next/image";
import Head from "next/head";
import ButtonLink from "@/app/_components/buttonLink";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from 'lodash';

const RoomPage = () => {
  const [room, setRoom] = useState(null);
  
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_ROOMS_MANAGER}/1`);
        setRoom(response.data);
      } catch (error) {
        console.error("Error fetching room:", error);
      }
    };

    fetchRoom();
  }, []);

  return (
    <>
      <ContentPage secondary_page={false}>
        <Head>
          <title>{room?.room_name}</title>
          <meta name="description" content="" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        {/* Heroscreen */}
        <figure className="relative aspect-[4/3] md:aspect-video lg:aspect-[inherit] lg:h-dvh">
          <Image src={`/images/chambres/` + _.kebabCase(room?.room_name) + '.jpg'} alt="Chambre" fill={true} objectFit="cover"></Image>
        </figure>

        {/* Intro */}
        <section className="px-xs py-xs sm:px-sm sm:py-sm md:px-md md:py-md lg:px-lg lg:py-lg xl:grid xl:grid-cols-3 xl:gap-lg">
          <div className="xl:col-span-2">
            <h1 className="text-3xl">{room?.room_name}</h1>
            <p>{room?.room_desc}</p>

            <div className="mt-4 flex flex-col gap-4 xl:flex-row xl:justify-between xl:mt-md">
              <span>{room?.room_price} €</span>
              <ButtonLink
                primary={true}
                label={"Réserver une chambre"}
                href={"#"}
                classes="w-[max-content]"
              ></ButtonLink>
            </div>
          </div>

          <div className="bg-tertiary mt-8 px-xs py-xs sm:px-sm sm:py-sm xl:col-start-3 xl:h-max xl:mt-0">
            <p className="uppercase">
              <strong>Nos services</strong>
            </p>
            <ul className="list-disc ms-8 leading-7">
              {room?.room_services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Image */}
        <div className="lg:px-lg lg:py-lg lg:bg-primary">
            <figure className="relative aspect-[4/3] md:aspect-video xl:aspect-[inherit] xl:h-[72dvh]">
                <Image src="" alt="Chambre" fill={true} objectFit="cover" className="bg-black bg-opacity-50"></Image>
            </figure>
          
        </div>
      </ContentPage>
    </>
  );
};

export default RoomPage;
