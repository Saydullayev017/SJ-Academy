import React from 'react';

const ContentRenderer = ({ content }) => {
    return (
        <div>
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <p key={index}>{item.value}</p>;
                    case 'header':
                        return <h2 key={index}>{item.value}</h2>;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentRenderer;
