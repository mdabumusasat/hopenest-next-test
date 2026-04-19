"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const counters = [
  {
    id: 1,
    icon: "/assets/images/icons/counter-icon-1-1.png",
    target: 50,
    suffix: "+",
    title: "Communities Supported",
  },
  {
    id: 2,
    icon: "/assets/images/icons/counter-icon-1-2.png",
    target: 4000,
    suffix: "+",
    title: "Meals Served",
  },
  {
    id: 3,
    icon: "/assets/images/icons/counter-icon-1-3.png",
    target: 3200,
    suffix: "+",
    title: "Children Educated",
  },
  {
    id: 4,
    icon: "/assets/images/icons/counter-icon-1-4.png",
    target: 100,
    suffix: "%",
    title: "Non-Profit & Transparent",
  },
];

const CounterItem = ({ icon, target, suffix, title }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-items">
      <div className="icon">
        <Image src={icon} alt={title} width={60} height={60} />
      </div>

      <div className="content">
        <h3 className="count-box">
          {count.toLocaleString()}
          {suffix}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-section fix">
      <div className="container">
        <div
          className="counter-wrapper wow fadeInUp"
          data-wow-delay=".3s"
        >
          {counters.map((item) => (
            <CounterItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;