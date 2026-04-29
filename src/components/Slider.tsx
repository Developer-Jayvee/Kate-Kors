import React, { useState } from "react";

interface DualRangeSliderInterface {
  minVal ?: number;
  maxVal ?: number;
}
const DualRangeSlider = ({ minVal , maxVal} : DualRangeSliderInterface) => {
  const min =  0;
  const max = 10000;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto  ">
      <div className="relative h-10">
        {/* Full Track */}
        <div className="absolute top-1/2 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>

        {/* Active Range */}
        <div
          className="absolute top-1/2 h-[2px] bg-gray-700 -translate-y-1/2"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min Range */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-10 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-white
                     [&::-webkit-slider-thumb]:border
                     [&::-webkit-slider-thumb]:border-gray-700
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:w-4
                     [&::-moz-range-thumb]:h-4
                     [&::-moz-range-thumb]:bg-white
                     [&::-moz-range-thumb]:border
                     [&::-moz-range-thumb]:border-gray-700
                     [&::-moz-range-thumb]:cursor-pointer"
        />

        {/* Max Range */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-10 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-white
                     [&::-webkit-slider-thumb]:border
                     [&::-webkit-slider-thumb]:border-gray-700
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:w-4
                     [&::-moz-range-thumb]:h-4
                     [&::-moz-range-thumb]:bg-white
                     [&::-moz-range-thumb]:border
                     [&::-moz-range-thumb]:border-gray-700
                     [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>

      {/* Values */}
      <div className="flex justify-between mt-1 text-sm text-gray-700">
        <p className="font-inter"> Range :  {'\u20B1'} {minValue} - {'\u20B1'} {maxValue.toLocaleString()} </p>
      </div>
    </div>
  );
};

export default DualRangeSlider;