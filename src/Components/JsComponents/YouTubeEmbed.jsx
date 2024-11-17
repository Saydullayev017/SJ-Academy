import React from 'react';

const YouTubeEmbed = ({ embedId }) => (
    <div className="flex justify-center">
<iframe className="w-full h-64 md:h-96" src="https://www.youtube.com/embed/gqC0IZVAlsk?si=Tm5OcongyNxroQEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
);

export default YouTubeEmbed;
