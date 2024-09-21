import React, { useState, useRef } from 'react';
import Cards from './Cards';

function Foreground() {
    const ref = useRef(null);

    const data = [
        { desc: "Hello, I am Khushavant Wagh", filesize: ".9mbs", close: false, tag: { isOpen: true, tagTitle: "Test Download", tagColor: "green" } },
        { desc: "I am Software Engineer", filesize: ".9mbs", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
        { desc: "Say Hello to Me! 😁", filesize: ".9mbs", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" } },
    ];

    return (
        <div>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Cards key={index} data={item} reference={ref} />
                ))}
            </div>
        </div>
    );
}

export default Foreground;
