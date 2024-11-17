import React from 'react';

const YouTubeEmbed = ({ embedId }) => (
    <div className="flex justify-center">
        <iframe
            className="w-full h-64 md:h-96"
            src={`https://youtu.be/gqC0IZVAlsk?si=mFHi8OFv-IfvW2IN${embedId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
        />
    </div>
);

export default YouTubeEmbed;