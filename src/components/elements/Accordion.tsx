import React, { useState } from 'react';

interface AccordionItem {
  key: number;
  question: string;
  answer: string;
}

const items: AccordionItem[] = [
  {
    key: 1,
    question: 'Is my technology allowed on tech?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 2,
    question: 'How to soft launch your business?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 3,
    question: 'How to turn visitors into contributors',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 4,
    question: 'How can I find my solutions?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
];

const Accordion: React.FC = () => {
  const [activeKey, setActiveKey] = useState<number | null>(1);

  const handleToggle = (key: number) => {
    setActiveKey(prev => (prev === key ? null : key));
  };

  return (
    <ul className="accordion-box mt-30 wow fadeInRight">
      {items.map(item => (
        <li
          key={item.key}
          className={`accordion block ${activeKey === item.key ? 'active-block' : ''}`}
          onClick={() => handleToggle(item.key)}
        >
          <div className={`acc-btn ${activeKey === item.key ? 'active' : ''}`}>
            {item.question}
            <div className="icon fa fa-plus" />
          </div>
          <div className={`acc-content ${activeKey === item.key ? 'current' : ''}`}>
            <div className="content">
              <div className="text">{item.answer}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;