
import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="w-full bg-calculatorDisplay p-4 rounded-t-lg">
      <div className="overflow-x-auto">
        <p className="text-right text-white text-3xl font-mono tracking-wider overflow-hidden">
          {value || '0'}
        </p>
      </div>
    </div>
  );
};

export default Display;
