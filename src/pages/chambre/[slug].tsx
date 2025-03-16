import ContentPage from "@/app/_components/layouts/ContentPage";
import Heroscreen from "@/app/_components/panels/Heroscreen";
import Head from "next/head";

const RoomPage = () => {
    return(
        <>
            <ContentPage secondary_page={false}>
                <Head>
                    <title>Nom de la chambre</title>
                    <meta name="description" content="" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                {/* Heroscreen */}
                
                {/* Intro */}
                <section>
                    <div>
                        <h1 className="text-3xl">Nom de la chambre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea soluta neque necessitatibus, earum magnam sapiente blanditiis odit error animi, officia deleniti tempora ipsam magni eum ipsa, sed sunt ipsum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea soluta neque necessitatibus, earum magnam sapiente blanditiis odit error animi, officia deleniti tempora ipsam magni eum ipsa, sed sunt ipsum.</p>
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div></div>
                </section>
                {/* Image */}
            </ContentPage>
        </>
    );
}

export default RoomPage;