import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600 transition-max-height duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
}
export default FAQItem; 