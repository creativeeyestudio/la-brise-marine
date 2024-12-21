import Parallax from '@/app/_components/panels/Parallax';
import TextImage from '@/app/_components/panels/TextImage';
import TextDoubleImage from '@/app/_components/panels/TextDoubleImage';
import React from 'react';

const ContentPage: React.FC = () => {
    return(
        <>
            <main>
                <Parallax src={''} alt={''} width={0} height={0} />

                <TextImage title={''} content={''} image={{
                    src: '',
                    width: 0,
                    height: 0,
                    alt: ''
                }} />
                
                <TextDoubleImage title={''} content={''} image1={{
                    src: '',
                    width: 0,
                    height: 0,
                    alt: ''
                }} image2={{
                    src: '',
                    width: 0,
                    height: 0,
                    alt: ''
                }} />
            </main>
        </>
        
    );
}

export default ContentPage;