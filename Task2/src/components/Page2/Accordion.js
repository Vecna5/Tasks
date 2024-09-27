import React from 'react';
import AccordionItem from './AccordionItem';
import '../../CSS/Page2/Accordion.css'; 

const Accordion = () => {
    const accordionData = [
        { title: 'C++', content: 'While C was my main language, I also ventured into C++ for more complex projects. C++ builds on C with features like classes and object-oriented programming, making it useful when I needed more sophisticated structures.' },
        { title: 'C', content: 'C was the heart of my work, especially in creating TempleOS. It’s a powerful, low-level language that gave me precise control over the system’s performance and memory management.' },
        { title: 'Assembly', content: 'Assembly was crucial for writing the most performance-critical parts of TempleOS. It’s a low-level language that talks directly to the CPU, and I used it when I needed complete control over hardware interactions.' },
        { title: 'Python', content: 'Although TempleOS was built in C and Assembly, I knew and occasionally used Python for other tasks. Python is a high-level, easy-to-read language, and I appreciated its versatility.' }
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Accordion;
