import React, { useState } from 'react';
import '../../CSS/Page2/Accordion.css'; 

const AccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`accordion-item ${isActive ? 'active' : ''}`}>
            <div className="accordion-title" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            {isActive && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
