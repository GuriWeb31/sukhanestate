import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="">
      <button
  onClick={onClick}
  aria-expanded={isOpen}
  className={`border-b border-[#001842] w-full text-left py-4 px-2 flex justify-between items-center transition-colors 
    ${isOpen ? 'text-[#04b1fe]' : 'text-[#001842]'} hover:text-[#04b1fe]`}
>
  <span className="font-medium transition-all duration-300 text-[20px]">
    {question}
  </span>
  <span className="text-[#04b1fe] text-[28px] leading-none">
    {isOpen ? '−' : '+'}
  </span>
</button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className={`px-2 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="py-4 text-[#001842] text-[18px]">{answer}</div>
      </div>
    </div>
  );
};

const FAQCollapse = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      question: 'Do I have to sell my home with you after?',
      answer:
        "No, you're not required to sell your home with Sukhan Estate. While this was a requirement in the past, we've since removed it to offer more flexibility and peace of mind to our clients.",
    },
    {
      question: 'How do you make money?',
      answer: 'We make money through service fees and partnerships with lenders.',
    },
    {
      question: 'How do I qualify?',
      answer: 'You qualify based on income, credit score, and home eligibility.',
    },
    {
      question: 'Will this affect my credit score?',
      answer: 'No, checking your eligibility does not affect your credit score.',
    },
    {
      question: 'Does Sukhan Estate work with pre-approved buyers?',
      answer: 'Yes, we do. It can speed up the process and improve your offers.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="xl:p-4 lg:p-4 md:p-4 max-sm:p-0 rounded-md  mx-auto">
      {data.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQCollapse;
