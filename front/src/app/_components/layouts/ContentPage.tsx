import Parallax from '../panels/Parallax';
import TextImage from '../panels/TextImage';
import TextDoubleImage from '../panels/TextDoubleImage';
import React from 'react';

const ContentPage: React.FC = () => {
    return(
        <main>
            <Parallax />
            <TextImage />
            <TextDoubleImage />
        </main>
    );
}

export default ContentPage;