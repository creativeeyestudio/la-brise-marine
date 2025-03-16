import ContentPage from "@/app/_components/layouts/ContentPage";
import Image from "next/image";
import Head from "next/head";
import ButtonLink from "@/app/_components/buttonLink";

const RoomPage = () => {
  return (
    <>
      <ContentPage secondary_page={false}>
        <Head>
          <title>Nom de la chambre</title>
          <meta name="description" content="" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        {/* Heroscreen */}
        <figure className="relative aspect-[4/3] md:aspect-video">
          <Image src="" alt="Chambre" fill={true} objectFit="cover"></Image>
        </figure>

        {/* Intro */}
        <section className="px-xs py-xs sm:px-sm sm:py-sm md:px-md md:py-md lg:px-lg lg:py-lg xl:grid xl:grid-cols-3 xl:gap-lg">
          <div className="xl:col-span-2">
            <h1 className="text-3xl">Nom de la chambre</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              ea soluta neque necessitatibus, earum magnam sapiente blanditiis
              odit error animi, officia deleniti tempora ipsam magni eum ipsa,
              sed sunt ipsum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              ea soluta neque necessitatibus, earum magnam sapiente blanditiis
              odit error animi, officia deleniti tempora ipsam magni eum ipsa,
              sed sunt ipsum.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <span>0,00 €</span>
              <ButtonLink
                primary={true}
                label={"Réserver une chambre"}
                href={"#"}
                classes="w-[max-content]"
              ></ButtonLink>
            </div>
          </div>
          <div className="bg-tertiary mt-8 px-xs py-xs sm:px-sm sm:py-sm xl:col-start-3 xl:h-max">
            <p className="uppercase">
              <strong>Nos services</strong>
            </p>
            <ul className="list-disc ms-4">
              <li>Liste des prestations</li>
            </ul>
          </div>
        </section>

        {/* Image */}
        <figure className="relative aspect-[4/3]">
          <Image src="" alt="Chambre" fill={true} objectFit="cover"></Image>
        </figure>
      </ContentPage>
    </>
  );
};

export default RoomPage;
