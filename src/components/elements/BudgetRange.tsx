import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Range = (Slider as any).Range || Slider;

const BudgetRange: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([0, 1500]);

  return (
    <div className="form-group col-lg-12">
      <label htmlFor="budget-range">Budget Range</label>
      <div className="range-slider-one">
        <input
          id="budget-range"
          type="text"
          className="range-amount"
          value={`$${value[0].toLocaleString()} - $${value[1].toLocaleString()}`}
          readOnly
          aria-label="Selected budget range"
        />
        <Range
          className="distance-range-slider"
          value={value}
          onChange={(val: [number, number]) => setValue(val)}
          min={0}
          max={2000}
          step={1}
          allowCross={false}
          pushable={10}
        />
      </div>
    </div>
  );
};

export default BudgetRange;
