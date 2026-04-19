import React from 'react';
import CounterUp from '../elements/CounterUp';

const Funfact = () => {
  const funfactData = [
    { count: "100", text: "Customer Satisfaction" },
    { count: "350", text: "Total Case Winning Award" },
    { count: "500", text: "Experienced Legal Advisors" },
    { count: "250", text: "Number of Branches" },
  ];

  return (
    <section className="funfact-section">
      {funfactData.map((item, index) => (
        <div key={index} className="funfact-item" aria-label={`Statistic: ${item.text}`}>
          <h2>
            <CounterUp end={parseInt(item.count, 10)} />+
          </h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Funfact;